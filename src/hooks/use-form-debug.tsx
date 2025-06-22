/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

export function useFormDebug<TFieldValues extends FieldValues>(
  hookform: UseFormReturn<TFieldValues, any, undefined>
) {
  useEffect(() => {
    console.info("Valores do formulário => ", hookform.getValues());
    console.info("Errors no formulário => ", hookform.formState.errors);
  }, [hookform, hookform.formState.errors]);
}
