import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  useFormContext
} from "react-hook-form";

import { Flex } from "@/components/ui";
import { Checkbox } from "@/components/ui/checkbox";

interface ICheckboxGroupDefaultProps {
  name: string;
  id: string;
  label?: string;
}
export function CheckboxGroupDefault({
  name,
  label,
  id
}: Readonly<ICheckboxGroupDefaultProps>) {
  const { control } = useFormContext();
  const handleOnChange = (
    field: ControllerRenderProps<FieldValues, string>
  ) => {
    const isNewValue = field.value?.includes(id);
    let newValue: string[];
    if (isNewValue) {
      newValue = field.value.filter((filterId) => filterId !== id);
    } else {
      newValue = [...(Array.isArray(field.value) ? field.value : []), id];
    }
    field.onChange(newValue);
  };
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Flex direction={"row"} align="center">
          <Checkbox
            value={id}
            id={id}
            checked={field?.value?.includes(id)}
            className="hover:scale-105"
            onClick={() => handleOnChange(field)}
          />
          {label && (
            <label
              htmlFor={id}
              className="ml-2 text-sm hover:cursor-pointer hover:scale-105"
            >
              {label}
            </label>
          )}
        </Flex>
      )}
    />
  );
}
