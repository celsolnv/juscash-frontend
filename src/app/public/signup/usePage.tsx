import { SubmitHandler, useForm } from "react-hook-form";

import { toast } from "sonner";

import { schema, TFormData } from "./constants";
import { formatRequest } from "./utils";

import * as apiAuth from "@/api/req/auth";
import * as api from "@/api/req/user";
import { useAuth } from "@/hooks/use-auth";
import { useFormDebug } from "@/hooks/use-form-debug";
import { useManagerForm } from "@/logic/form";
import { zodResolver } from "@hookform/resolvers/zod";

export const usePage = () => {
  const hookForm = useForm<TFormData>({
    resolver: zodResolver(schema)
  });
  const isLoading = useManagerForm.getState().isLoading;
  const setLoading = useManagerForm.getState().setIsLoading;
  const { signIn } = useAuth();

  const onSubmit: SubmitHandler<TFormData> = (data) => {
    const format = formatRequest(data);
    setLoading(true);
    api
      .create(format)
      .then(() => {
        toast.success("Cadastro realizado com sucesso!");
        apiAuth
          .auth({
            email: data.email,
            password: data.password
          })
          .then((dataLogin) => {
            signIn(dataLogin);
          });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useFormDebug(hookForm);
  return {
    hookForm,
    isLoading,
    onSubmit
  };
};
