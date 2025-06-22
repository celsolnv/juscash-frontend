/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormProvider } from "react-hook-form";

import clsx from "clsx";

import { Button, Flex } from "@/components/ui";
import { useManagerForm } from "@/logic/form";

interface IFormContainerProps {
  hookForm: any;
  onSubmit: (data: any) => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
  formId?: string;
  hasBg?: boolean;
  className?: string;
  isEdit?: boolean;
  hasPermissionByButton?: boolean;
}
export function FormContainer({
  hookForm,
  onSubmit,
  title,
  description,
  children,
  formId,
  hasBg = true,
  hasPermissionByButton = false,
  isEdit = false,
  className
}: Readonly<IFormContainerProps>) {
  const setCanEdit = useManagerForm().setCanEdit;
  const canEdit = useManagerForm().canEdit;
  return (
    <div className="flex max-w-[1280px] px-6 py-6 flex-col items-start gap-6 w-full">
      <div className="flex flex-col items-start gap-8 w-full">
        <div className="flex flex-col items-start w-full rounded-lg border border-border bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
          <Flex direction="row" justify="between" className="w-full">
            <Flex
              className={clsx(
                "p-6 items-start gap-2 w-full",
                hasBg && "bg-border"
              )}
            >
              <h2 className="  text-lg font-semibold leading-none tracking-tight -mx-0.5">
                {title}
              </h2>
              <p className="text-muted-foreground  text-sm font-normal leading-5">
                {description ||
                  "Preencha os campos obrigatórios marcados com * (asterisco)."}
              </p>
            </Flex>

            {hasPermissionByButton && isEdit && !canEdit && (
              <div className="w-full flex items-center justify-end p-6">
                <div />
                <Button onClick={() => setCanEdit(true)} type="button">
                  Habilitar edição
                </Button>
                <div />
              </div>
            )}
          </Flex>

          <FormProvider {...hookForm}>
            <form
              onSubmit={hookForm.handleSubmit(onSubmit)}
              className="w-full p-6 pt-0 gap-6 flex flex-col"
              id={formId}
            >
              <div className={className}>{children}</div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
