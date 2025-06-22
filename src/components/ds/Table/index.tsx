import clsx from "clsx";
import { Eye, Edit, Trash2, Ban } from "lucide-react";

import { Column, GenericTableProps } from "./types";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const iconSize = 20;
const mapIcons = {
  edit: <Edit size={iconSize} />,
  delete: <Trash2 size={iconSize} className="stroke-red-500" />,
  view: <Eye size={iconSize} />,
  inactivate: <Ban size={iconSize} />
};

export function GenericTable<T extends { id: string }>({
  data,
  columns,
  onRowClick,
  actions
}: Readonly<GenericTableProps<T>>) {
  const renderCellContent = (item: T, column: Column<T>) => {
    if (column.image) {
      const { type, dataIndex, url, alt, fallback } = column.image;
      const imageUrl = url
        ? url(item)
        : dataIndex
          ? String(item[dataIndex])
          : "";
      const altText = alt ? alt(item) : "";

      if (type === "avatar") {
        return (
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
            <img
              src={imageUrl || fallback || ""}
              alt={altText}
              className="w-full h-full object-cover"
              onError={(e) => {
                if (fallback) {
                  (e.target as HTMLImageElement).src = fallback;
                }
              }}
            />
          </div>
        );
      }

      return (
        <div className="w-12 h-12 rounded overflow-hidden bg-gray-200">
          <img
            src={imageUrl || fallback || ""}
            alt={altText}
            className="w-full h-full object-cover"
            onError={(e) => {
              if (fallback) {
                (e.target as HTMLImageElement).src = fallback;
              }
            }}
          />
        </div>
      );
    }

    let value = item[column.dataIndex];
    if (column.format) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value = column.format(item) as any;
    }
    const isActive = String(value).toLowerCase() === "true";
    switch (column.lineType) {
      case "badge":
        return (
          <span
            className={clsx(
              isActive
                ? "bg-green-100 text-green-700"
                : "bg-secondary text-muted-foreground",
              "inline-flex px-2 text-xs font-semibold rounded-full py-1"
            )}
          >
            {isActive ? "Ativo" : "Inativo"}
          </span>
        );
      case "actions":
        return column.format ? column.format(item) : null;
      default:
        return value !== undefined ? String(value) : "—";
    }
  };

  return (
    <div className="flex flex-col items-start w-full overflow-auto">
      <Table className="min-w-[700px] border-collapse rounded-lg overflow-hidden">
        <TableHeader className="bg-white">
          <TableRow className="border-b border-border">
            {columns.map((column, index) => (
              <TableHead
                key={`${column.dataIndex}-${index}`}
                className="px-6 py-3 text-center text-sm font-medium text-muted-foreground tracking-wider capitalize"
                style={{ width: column.width }}
              >
                {column.title}
              </TableHead>
            ))}
            {actions.length > 0 && (
              <TableHead className="px-6 py-3 text-center text-sm font-medium text-muted-foreground tracking-wider capitalize">
                Ações
              </TableHead>
            )}
            {/* <TableHead className="px-6 py-3 text-center text-sm font-medium text-muted-foreground tracking-wider capitalize">
              Ações
            </TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white">
          {data?.map((item) => (
            <TableRow
              key={item.id}
              className="hover:bg-[#F5F5F4] border-b border-border"
              onClick={() => onRowClick && onRowClick(item.id)}
            >
              {columns.map((column, index) => (
                <TableCell
                  key={`${item.id}-${column.dataIndex}-${index}`}
                  className="px-6 py-4 whitespace-nowrap text-center"
                  // width={column.width || "auto"}
                  style={
                    column.textStyle ? column.textStyle(item, {}) : undefined
                  }
                >
                  <div className="text-sm text-foreground">
                    {renderCellContent(item, column)}
                  </div>
                </TableCell>
              ))}
              <TableCell className="px-6 py-4 whitespace-nowrap text-center">
                {actions.map((action) => (
                  <button
                    key={action.title}
                    title={action.title}
                    onClick={() => action.onClick(item)}
                    className={clsx(
                      action.icon === "delete" && "text-red-500",
                      "cursor-pointer hover:bg-gray-100 focus:bg-gray-100 hover:scale-110 mr-4 disabled:cursor-not-allowed disabled:opacity-50 disabled:scale-100"
                    )}
                    disabled={action.disabled ? action.disabled(item) : false}
                  >
                    {mapIcons[action.icon]}
                  </button>
                ))}
              </TableCell>
            </TableRow>
          ))}
          {data?.length === 0 && (
            <TableRow className="h-[50vh]">
              <TableCell colSpan={columns.length + 1} className="text-center">
                <h3 className="text-foreground text-xl text-gray-700 ">
                  Nenhum dado encontrado.
                  <br /> Verifique os filtros ou adicione novos dados.
                </h3>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
