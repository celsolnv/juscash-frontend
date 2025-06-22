"use client";

import { useFormContext } from "react-hook-form";

import clsx from "clsx";

import { Skeleton, Text } from "@/components/ui";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useManagerForm } from "@/logic/form";
import { IOptionSelect } from "@/types/Common";

interface ISelectFormProps {
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  className?: string;
  classNameContainer?: string;
  options: IOptionSelect[];
  required?: boolean;
  disabled?: boolean;
  hasRender?: boolean;
}

export function SelectForm({
  name,
  options,
  label,
  placeholder,
  description,
  className,
  classNameContainer,
  required = true,
  hasRender = true,
  disabled = false
}: ISelectFormProps) {
  const {
    control,
    formState: { errors }
  } = useFormContext();
  const loading = useManagerForm().isLoading;
  const { canEdit, isLoading } = useManagerForm();

  if (!hasRender) return null;
  return (
    <Skeleton loading={isLoading}>
      <FormField
        control={control}
        name={name}
        disabled={!canEdit || disabled}
        render={({ field }) => (
          <FormItem
            key={field.value}
            className={clsx("flex flex-col gap-2", classNameContainer)}
          >
            <Text
              as="label"
              size="2"
              weight={"medium"}
              className={clsx(
                errors[name] && "text-red-500",
                "text-foreground"
              )}
            >
              {label}
              {required && (
                <Text as="span" className="text-red-600">
                  {" "}
                  *
                </Text>
              )}
            </Text>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              value={field.value}
              disabled={disabled || !canEdit}
            >
              <FormControl>
                <Skeleton loading={loading} minHeight="36px">
                  <SelectTrigger className={cn(className, "w-full")}>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                </Skeleton>
              </FormControl>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.label} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
            <FormDescription>{description}</FormDescription>
          </FormItem>
        )}
      />
    </Skeleton>
  );
}
