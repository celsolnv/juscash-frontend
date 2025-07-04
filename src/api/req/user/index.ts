import { handleReq } from "@/api/handle";

const url = "/users";

export interface ICreate {
  name?: string;
  email?: string;
  password?: string;
}

export type IUpdate = ICreate;

export const create = async (body: ICreate) =>
  handleReq({
    method: "post",
    url,
    body
  });

export const update = async (body: IUpdate, id: string) =>
  handleReq({
    method: "put",
    url: `${url}/${id}`,
    body,
    showSuccess: true,
    successMessage: "Usuário atualizado com sucesso"
  });

export const show = async (id: string) =>
  handleReq({
    method: "get",
    url: `${url}/${id}`,
    showSuccess: false
  });
