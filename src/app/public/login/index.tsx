import { FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";

import { usePage } from "./usePage";

import { InputDefault, InputPassword } from "@/components/ds";
import { Button, Flex } from "@/components/ui";
import { Card } from "@/components/ui";
import { FormButton } from "@/components/ui/form-button";

export default function LoginPage() {
  const { hookForm, onSubmit, isLoading, handleSignUp } = usePage();

  return (
    <main className="flex min-h-screen w-full ">
      <section className="flex p-12 flex-col justify-center items-center gap-6 flex-1 bg-muted md:p-12 sm:px-6 sm:py-6">
        <Card className="flex min-w-[190px] max-w-[480px] p-6 flex-col items-start gap-6 w-full">
          <div className="flex flex-col items-center gap-6 w-full p-6">
            <img src="/logo.svg" alt="JusCash Logo" className="h-8" />

            <div className="flex flex-col items-center gap-2 w-full">
              <p className="text-muted-foreground text-sm leading-5">
                Acesse o painel administrativo da JusCash.
              </p>
            </div>
          </div>

          <FormProvider {...hookForm}>
            <form
              onSubmit={hookForm.handleSubmit(onSubmit)}
              className="flex flex-col items-start gap-4 w-full"
            >
              <Flex gap="3" width="100%">
                <InputDefault
                  placeholder="Insira seu e-mail"
                  name="email"
                  label="E-mail"
                  mask={(value) => value}
                  disabled={isLoading}
                  autoComplete="username"
                />
                <InputPassword
                  disabled={isLoading}
                  label="Senha"
                  autoComplete="current-password"
                  hasGenerate={false}
                  hasInfo={false}
                />
              </Flex>
              <div className="w-full">
                <div className="flex justify-end w-full">
                  <Link
                    to="/recuperar-senha"
                    className="text-primary  text-sm leading-5 underline cursor-pointer"
                  >
                    Esqueceu a senha?
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 w-full mt-2">
                <FormButton type="submit" className="h-10 px-4 py-2">
                  Entrar
                </FormButton>
                <Button
                  variant="ghost"
                  onClick={handleSignUp}
                  type="submit"
                  className="h-10 w-full underline px-4 py-2"
                >
                  Não possui uma conta? Cadastre-se
                </Button>
              </div>
            </form>
          </FormProvider>
        </Card>
      </section>
    </main>
  );
}
