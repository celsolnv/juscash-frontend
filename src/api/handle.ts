/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosRequestConfig } from "axios";
import qs from "qs";
import { toast } from "sonner";

import api from "@/api";
import { useSignOut } from "@/hooks/signout";
import { error } from "@/logic/modal";
import { removeFalsyValuesFromObject } from "@/utils/func";

export interface IGenericCustomErrorData {
  message: string;
  status: number;
}
export class CustomError extends Error {
  public data: any;

  constructor(message: string, data: any) {
    super(message);
    this.data = data;
  }
}

const methods = {
  post: api.post,
  get: api.get,
  put: api.put,
  delete: api.delete,
  patch: api.patch
};

type HandleApiRequestParams = {
  url: string;
  body?: object;
  query?: Record<string, any>;
  params?: string | number;
  successMessage?: string;
  showSuccess?: boolean;
  method: keyof typeof methods;
  config?: AxiosRequestConfig;
  hideError?: boolean;
  checkStatus?: boolean;
  formatResponse?: boolean;
};

export const handleReq = async ({
  url,
  body,
  method,
  params,
  query,
  successMessage,
  config,
  showSuccess = false,
  hideError,
  formatResponse = true,
  checkStatus = true
}: HandleApiRequestParams) => {
  const cleanQuery = removeFalsyValuesFromObject(query as any);
  const composeUrl =
    (params ? `${url}/${params}` : url) +
    (query ? `?${qs.stringify(cleanQuery)}` : "");

  if (method === "get" && body)
    throw new Error("Body is not allowed in get method");

  const response = await methods[method](composeUrl, body, config)
    .then((res) => {
      showSuccess &&
        (res.data.message || successMessage) &&
        toast.success(successMessage || res.data.message);
      if (res.status === 204) return [];
      if (!formatResponse) return res;
      const data = res?.data?.data;
      return data;
    })
    .catch((err) => {
      const res = err?.response?.data;
      const status = err?.response?.status;

      if (checkStatus && status === 401) {
        const { out } = useSignOut();
        return out();
      }

      const errorMessage = res?.message || "Ops! Ocorreu um erro de conexão";
      !hideError && error(errorMessage);
      throw new CustomError(errorMessage, res);
    });
  return response;
};
