import { Save } from "lucide-react";

import { FormButton } from "@/components/ui/form-button";

interface IFooterFormProps {
  onCancel: () => void;
  formId: string;
}

export function FooterForm({ onCancel, formId }: Readonly<IFooterFormProps>) {
  return (
    <div className="flex p-4 md:p-6 flex-col items-center gap-6 border-t border-border w-full">
      <div className="flex max-w-[1280px] justify-between items-center w-full">
        <div className="flex justify-between items-center flex-1">
          <FormButton
            type="button"
            variant="outline"
            fullWidth={false}
            onClick={onCancel}
            className="h-10 px-4 py-2 flex justify-center items-center gap-2 rounded-md"
          >
            Cancelar
          </FormButton>

          <FormButton
            form={formId}
            type="submit"
            fullWidth={false}
            className="h-10 px-4 py-2 flex justify-center items-center gap-2 rounded-md"
          >
            <Save className="w-4 h-4" />
            <span className="capitalize">Salvar</span>
          </FormButton>
        </div>
      </div>
    </div>
  );
}
