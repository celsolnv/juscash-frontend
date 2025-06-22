import { TFormData } from "./constants";

import * as api from "@/api/req/user";

export function formatRequest(data: TFormData) {
  return {
    name: data.name,
    email: data.email,
    password: data.password
  } as api.ICreate;
}
