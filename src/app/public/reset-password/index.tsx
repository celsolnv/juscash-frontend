import { FormProvider } from "react-hook-form";

import { usePage } from "./usePage";

import { InputDefault, InputPassword } from "@/components/ds";
import { Card } from "@/components/ui";
import { FormButton } from "@/components/ui/form-button";

export default function PasswordReset() {
  const { hookForm, onSubmit } = usePage();

  return (
    <main className="flex flex-col md:flex-row items-stretch min-h-screen w-full">
      <section className="bg-muted flex min-w-60 flex-col items-center justify-center flex-1 p-4 md:p-12 ">
        <Card className="flex min-w-[190px] max-w-[480px] p-6 flex-col items-start gap-6 w-full">
          <div className="flex flex-col items-center gap-6">
            <img src="/logo.svg" alt="JusCash Logo" className="h-8" />
            <div>
              <p className="text-muted-foreground text-sm font-normal leading-5 mt-2">
                Defina uma nova senha segura para sua conta
              </p>
            </div>
            <FormProvider {...hookForm}>
              <form
                onSubmit={hookForm.handleSubmit(onSubmit)}
                className="w-full space-y-6"
              >
                <InputDefault
                  label="Código de verificação"
                  placeholder="Insira o código de verificação"
                  name="code"
                  autoComplete="off"
                />
                <InputPassword
                  label="Senha"
                  placeholder="*******"
                  hasGenerate={false}
                  autoComplete="new-password"
                  hasInfo
                />
                <InputPassword
                  label="Confirmar senha"
                  name="confirmPassword"
                  autoComplete="new-password"
                  placeholder="*******"
                  hasGenerate={false}
                  hasInfo={false}
                />
                <FormButton type="submit">Salvar nova senha</FormButton>
                <p className="text-muted-foreground text-sm font-normal leading-5 mt-2 text-center">
                  Ao redefinir sua senha, você será redirecionado para dentro do
                  sistema.
                </p>
              </form>
            </FormProvider>
          </div>
        </Card>
      </section>
    </main>
  );
}
