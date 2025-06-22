import { z } from "zod";

import * as f from "@/constants/schemas";

export const schema = z
  .object({
    name: f.string("Nome completo"),
    email: f.email("E-mail"),
    password: f.password,
    confirmPassword: f.password
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não são iguais",
    path: ["confirmPassword"]
  });

export type TFormData = z.infer<typeof schema>;
