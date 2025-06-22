import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { toast } from "sonner";
import { z } from "zod";

import { CustomError, IGenericCustomErrorData } from "@/api/handle";
import * as api from "@/api/req/auth";
import * as f from "@/constants/schemas";
import { useManagerForm } from "@/logic/form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: f.email("E-mail")
});

type TFormData = z.infer<typeof schema>;

export const usePage = () => {
  const hookForm = useForm<TFormData>({
    resolver: zodResolver(schema)
  });
  const navigate = useNavigate();
  const setIsLoading = useManagerForm.getState().setIsLoading;
  const isLoading = useManagerForm.getState().isLoading;

  const onSubmit: SubmitHandler<TFormData> = (data) => {
    setIsLoading(true);
    api
      .recovery(data)
      .then(() => {
        toast.success("E-mail enviado com sucesso");
        // navigate(`/redefinir-senha?email=${data.email}`);
      })
      .catch((error) => {
        if (error instanceof CustomError) {
          const data = error.data as IGenericCustomErrorData;
          hookForm.setError("email", {
            type: "manual",
            message: data.message
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { hookForm, isLoading, onSubmit };
};
