import { FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";

import { usePage } from "./usePage";

import { InputDefault } from "@/components/ds";
import { Card } from "@/components/ui";
import { FormButton } from "@/components/ui/form-button";

export default function PasswordRecovery() {
  const { hookForm, onSubmit } = usePage();

  return (
    <main className="flex flex-col md:flex-row items-stretch min-h-screen w-full">
      <section className="bg-muted flex min-w-60 flex-col items-center justify-center flex-1 p-4 md:p-12">
        <Card className="flex min-w-[190px] max-w-[480px] p-6 flex-col items-start gap-6 w-full">
          <div className="flex flex-col items-center gap-6">
            <img src="/logo.svg" alt="JusCash Logo" className="h-8" />
            <div className="flex flex-col items-center gap-2 w-full">
              <p className="text-muted-foreground text-sm text-center leading-5 mt-2">
                Informe seu e-mail cadastrado para receber um link de
                redefinição de senha.
              </p>
            </div>
            <FormProvider {...hookForm}>
              <form
                onSubmit={hookForm.handleSubmit(onSubmit)}
                className="w-full space-y-6"
              >
                <InputDefault
                  label="E-mail"
                  name="email"
                  type="email"
                  placeholder="exemplo@exemplo.com"
                />

                <FormButton type="submit">Enviar Redefinição</FormButton>

                <div className="flex justify-center w-full">
                  <Link
                    to="/login"
                    className="text-sm font-normal underline decoration-solid decoration-auto underline-offset-auto"
                  >
                    Voltar para o login
                  </Link>
                </div>
              </form>
            </FormProvider>
          </div>
        </Card>
      </section>
    </main>
  );
}
