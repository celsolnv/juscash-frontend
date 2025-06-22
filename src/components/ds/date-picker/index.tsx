"use client";

import * as React from "react";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

import { Button, Calendar } from "@/components/ui";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface IDatePickerProps {
  initialDate?: Date;
  formatDate?: string;
  onChangeDate?: (date: Date) => void;
}
export function DatePicker({
  initialDate,
  formatDate = "MMMM, yyyy",
  onChangeDate
}: Readonly<IDatePickerProps>) {
  const [date, setDate] = React.useState<Date>(initialDate || new Date());

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
    if (onChangeDate) {
      onChangeDate(newDate);
    }
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? (
            format(date, formatDate, { locale: ptBR })
          ) : (
            <span>Escolha uma data</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => newDate && handleDateChange(newDate)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
