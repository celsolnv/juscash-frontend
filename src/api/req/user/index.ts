import { handleReq } from "@/api/handle";
import { Query } from "@/types/Pagination";

const url = "/users";

export interface ICreate {
  name?: string;
  email?: string;
  password?: string;
}

export type IUpdate = ICreate;

export const list = async (query?: Query) =>
  handleReq({
    method: "get",
    url,
    query,
    showSuccess: false
  });

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const uploadPicture = async (formData: any, id: string) =>
  handleReq({
    method: "post",
    url: `${url}/${id}/picture`,
    body: formData,
    showSuccess: true,
    successMessage: "Foto atualizada com sucesso!"
  });

export const removePicture = async (id: string) =>
  handleReq({
    method: "delete",
    url: `${url}/${id}/picture`,
    showSuccess: true,
    successMessage: "Foto removida com sucesso!"
  });

export const show = async (id: string) =>
  handleReq({
    method: "get",
    url: `${url}/${id}`,
    showSuccess: false
  });

export const destroy = async (id: string) =>
  handleReq({
    method: "delete",
    url: `${url}/${id}`,
    showSuccess: true
  });

export const status = async (id: string, isActive: boolean) =>
  handleReq({
    method: "patch",
    url: `${url}/${id}`,
    body: { isActive },
    showSuccess: false
  });
export const onboarding = async () =>
  handleReq({
    method: "patch",
    url: `${url}/onboarding`,
    showSuccess: false
  });
export interface ICreatePublic {
  user: {
    name: string;
    document: string;
    email: string;
    isActive: boolean;
  };
  restaurant: {
    name: string;
    cuisineType: string;
    businessName?: string;
    taxRegime?: string;
    taxRate?: number;
    averageTicket: number;
    averageRevenue: number;
    dailyCustomers: number;
  };
  restaurantAddress: {
    cep: string;
    uf: string;
    city: string;
    district: string;
    street: string;
    number?: string;
  };
}

export const createPublic = async (body: ICreatePublic) =>
  handleReq({
    method: "post",
    url: `${url}/public`,
    body,
    showSuccess: false,
    hideError: false,
    checkStatus: false
  });

export const checkEmail = async (email: string) =>
  handleReq({
    method: "patch",
    url: `${url}/check/email`,
    body: { email },
    showSuccess: false
  });
