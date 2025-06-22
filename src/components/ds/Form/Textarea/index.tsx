import { Controller, useFormContext } from "react-hook-form";

import clsx from "clsx";

import { Flex, Text } from "@/components/ui";
import { Textarea } from "@/components/ui/textarea";

interface ITextareaDefaultProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  classNameContainer?: string;
  description?: string;
  rows?: number;
  required?: boolean;
}
export function TextareaDefault({
  name,
  label,
  placeholder,
  className,
  rows = 4,
  description,
  classNameContainer,
  required = false
}: Readonly<ITextareaDefaultProps>) {
  const {
    control,
    formState: { errors }
  } = useFormContext();
  return (
    <Flex gap="2" className={classNameContainer}>
      {label && (
        <Text
          as="label"
          size="2"
          weight={"medium"}
          className={clsx(errors[name] && "text-red-500", "text-foreground")}
        >
          {label}
          {required && (
            <Text as="span" className="text-red-600">
              {" "}
              *
            </Text>
          )}
        </Text>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Flex className={className}>
            <Textarea {...field} placeholder={placeholder} rows={rows} />
          </Flex>
        )}
      />
      <Text size="1" className="text-muted-foreground">
        {description}
      </Text>
    </Flex>
  );
}
