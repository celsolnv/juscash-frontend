//Utils
import { handleReq } from "@/api/handle";
import { IUser } from "@/types/IUser";

const url = "/auth";

interface ILoginParams {
  email: string;
  password: string;
}
export interface ILoginResponse {
  token: string;
  user: IUser;
}

export const auth = async (body: ILoginParams): Promise<ILoginResponse> =>
  handleReq({
    method: "post",
    url: `${url}/login`,
    body,
    showSuccess: false,
    hideError: true,
    checkStatus: false
  });

export const recovery = async (body: { email: string }) =>
  handleReq({
    method: "post",
    url: `${url}/redefine/password`,
    body,
    hideError: true,
    checkStatus: false
  });

export interface IResetParams {
  resetCode: string;
  password: string;
  email: string;
}

export const reset = async (body: IResetParams) =>
  handleReq({
    method: "post",
    url: `${url}/change/password`,
    body,
    showSuccess: false,
    checkStatus: false
  });
