import { IInputDefaultProps, InputDefault } from "./InputDefault";

import { formatCep } from "@/utils/masks/cep";

interface IInputCepProps extends Omit<IInputDefaultProps, "label" | "name"> {
  label?: string;
  name?: string;
}
export function InputCep({
  label = "CEP",
  name = "cep",
  placeholder = "00000-000",
  disabled = false
}: Readonly<IInputCepProps>) {
  return (
    <InputDefault
      label={label}
      name={name}
      placeholder={placeholder}
      mask={formatCep}
      disabled={disabled}
    />
  );
}
