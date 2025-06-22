import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

import { toast } from "sonner";
import { z } from "zod";

import * as api from "@/api/req/auth";
import * as f from "@/constants/schemas";
import { useAuth } from "@/hooks/use-auth";
import { useManagerForm } from "@/logic/form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    code: f.string("Código"),
    password: f.password,
    confirmPassword: f.string("Confirmação de senha")
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não são iguais",
    path: ["confirmPassword"]
  });

type TFormData = z.infer<typeof schema>;

export const usePage = () => {
  const [search] = useSearchParams();
  const code = search.get("code");
  const email = search.get("email");
  const hookForm = useForm<TFormData>({
    resolver: zodResolver(schema),
    defaultValues: { code } as TFormData
  });
  const navigate = useNavigate();
  const setIsLoading = useManagerForm.getState().setIsLoading;
  const isLoading = useManagerForm.getState().isLoading;
  const { signIn } = useAuth();

  const onSubmit: SubmitHandler<TFormData> = (data) => {
    if (!email) {
      toast.error(
        "E-mail de recuperação não encontrado! Acesse o link enviado junto com o código para redefinir sua senha."
      );
      navigate("/login");
      return;
    }

    setIsLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...rest } = data;
    const formatter = {
      ...rest,
      email
    } as api.IResetParams;
    api
      .reset(formatter)
      .then((data) => {
        toast.success("Sua senha foi atualizada com sucesso!");
        signIn(data);
        // navigate("/login");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { hookForm, isLoading, onSubmit };
};
