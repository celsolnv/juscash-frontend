import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { z } from "zod";

import { CustomError } from "@/api/handle";
import * as api from "@/api/req/auth";
import * as f from "@/constants/schemas";
import { useAuth } from "@/hooks/use-auth";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: f.email("E-mail").nonempty(),
  password: f.string("Senha"),
  remember: f.boolean("Lembrar de mim").default(true)
});

type TFormData = z.infer<typeof schema>;
export const usePage = () => {
  const hookForm = useForm<TFormData>({
    resolver: zodResolver(schema)
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const onSubmit: SubmitHandler<TFormData> = (data) => {
    setIsLoading(true);
    api
      .auth(data)
      .then((data) => {
        signIn(data);
      })
      .catch((error) => {
        if (error instanceof CustomError) {
          const data = error.data as { message: string; status: number };
          if (data.status === 401 || data.status === 409) {
            hookForm.setError("password", {
              type: "manual",
              message: data.message
            });
          }
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSignUp = () => {
    navigate("/cadastro");
  };

  return { hookForm, isLoading, onSubmit, handleSignUp };
};
