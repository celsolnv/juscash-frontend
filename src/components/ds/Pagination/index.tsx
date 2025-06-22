import React from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { IPaginationManager, Query } from "@/types/Pagination";

interface PaginationControlsProps {
  filters: Query;
  setPagination: (filters: Query) => void;
  paginationManager?: IPaginationManager;
}

export const Pagination: React.FC<PaginationControlsProps> = ({
  setPagination,
  filters,
  paginationManager
}) => {
  const handleRowsPerPage = (limit: number) => {
    setPagination({ ...filters, limit });
  };
  const handleNextPage = () => {
    setPagination({
      ...filters,
      page: (filters.page ?? 1) + 1
    });
  };

  const handlePreviousPage = () => {
    setPagination({
      ...filters,
      page: (filters.page ?? 1) - 1
    });
  };
  return (
    <div className="flex px-6 py-4 flex-col items-center gap-6 w-full border-t border-border">
      <div className="flex max-w-[1280px] justify-between items-center w-full">
        <div className="flex justify-between items-center flex-1">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              disabled={!filters?.page || filters.page === 1}
              onClick={handlePreviousPage}
              className="w-10 h-10 p-0 border-border rounded-md"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              onClick={handleNextPage}
              size="icon"
              disabled={
                paginationManager?.nextPage === null ||
                paginationManager?.nextPage === undefined
              }
              className="w-10 h-10 p-0 border-border rounded-md"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-muted-foreground  text-sm">
              Linhas por página
            </span>
            <Select
              defaultValue="10"
              onValueChange={(value) => handleRowsPerPage(Number(value))}
            >
              <SelectTrigger className="h-10 px-3 py-2 items-center gap-6 rounded-md border border-[#E4E4E7] bg-white w-[90px]">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};
