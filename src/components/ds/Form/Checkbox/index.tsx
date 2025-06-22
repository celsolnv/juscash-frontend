import { Controller, useFormContext } from "react-hook-form";

import { Flex } from "@/components/ui";
import { Checkbox } from "@/components/ui/checkbox";

interface ICheckboxDefaultProps {
  name: string;
  label?: string;
}
export function CheckboxDefault({
  name,
  label
}: Readonly<ICheckboxDefaultProps>) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Flex direction={"row"} align="center">
          <Checkbox {...field} id={name} className="hover:scale-105" />
          {label && (
            <label
              htmlFor={name}
              className="ml-2 text-sm text-gray-700 hover:cursor-pointer hover:scale-105"
            >
              {label}
            </label>
          )}
        </Flex>
      )}
    />
  );
}
