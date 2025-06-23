import { handleReq } from "@/api/handle";
import { TPublicationStatus } from "@/types/IPublication";
import { Query } from "@/types/Pagination";

const url = "/publications";

export type IUpdate = {
  status?: TPublicationStatus;
};

export const list = async (query?: Query) =>
  handleReq({
    method: "get",
    url,
    query,
    showSuccess: false
  });

export const update = async (body: IUpdate, id: string) =>
  handleReq({
    method: "put",
    url: `${url}/${id}`,
    body,
    showSuccess: true,
    successMessage: "Publicação atualizada com sucesso"
  });

export const show = async (id: string) =>
  handleReq({
    method: "get",
    url: `${url}/${id}`,
    showSuccess: false
  });
