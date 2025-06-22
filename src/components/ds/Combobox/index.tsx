"use client";

import * as React from "react";

import clsx from "clsx";
import { Check, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { IOptionSelect } from "@/types/Common";

interface IComboboxGenericProps {
  options: IOptionSelect[];
  handleChangeInput: (value: string) => void;
  onSelect?: (value: string) => void;
  placeholder?: string;
  width?: string;
  loading?: boolean;
}
export function ComboboxGeneric({
  options,
  placeholder,
  handleChangeInput,
  onSelect,
  width = "w-[300px]"
}: Readonly<IComboboxGenericProps>) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    if (value === "") {
      handleChangeInput("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={clsx(
            `${width} justify-between text-left !shadow-xs`,
            !value && "text-muted-foreground font-normal"
          )}
        >
          <p className="overflow-hidden text-ellipsis whitespace-nowrap">
            {value
              ? options.find((op) => op.value === value)?.label
              : placeholder}
          </p>
          <ChevronDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={`${width} p-0`}>
        <Command shouldFilter={false}>
          <CommandInput
            onValueChange={(e) => handleChangeInput(e)}
            placeholder="Pesquise aqui"
            className="border-none"
          />
          <CommandList>
            <CommandGroup>
              {[...options]?.map((op) => (
                <CommandItem
                  key={op.value}
                  value={op.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    if (onSelect) {
                      onSelect(currentValue);
                    }
                  }}
                >
                  {op.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === op.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
