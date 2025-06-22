import clsx from "clsx";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";
import { IOptionSelect } from "@/types/Common";

interface ISelectGenericProps {
  onChange: (value: string) => void;
  options: IOptionSelect[];
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  id?: string;
}
export function SelectGeneric({
  onChange,
  options,
  placeholder,
  className,
  defaultValue,
  id
}: Readonly<ISelectGenericProps>) {
  return (
    <Select onValueChange={onChange} defaultValue={defaultValue}>
      <SelectTrigger
        id={id}
        className={clsx(
          className,
          "h-10 px-3 py-2 justify-between items-center w-[200px] rounded-md border border-border bg-white"
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options?.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
