import Cookies from "js-cookie";

import { IUser } from "@/types/IUser";
import { getLargeCookie, setLargeCookies } from "@/utils/largeCookie";

export const getUser = (): IUser => {
  return getLargeCookie(Cookies.get, import.meta.env.VITE_PUBLIC_TOKEN_LOCAL);
};

export const setUser = async (data: IUser) => {
  setLargeCookies(Cookies.set, import.meta.env.VITE_PUBLIC_TOKEN_LOCAL, data);
};
