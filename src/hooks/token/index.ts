import Cookies from "js-cookie";

export const getToken = () => {
  const local_token = Cookies.get(import.meta.env.VITE_PUBLIC_TOKEN_LOCAL);
  return local_token;
};

export const setToken = async (token: string) => {
  Cookies.set(import.meta.env.VITE_PUBLIC_TOKEN_LOCAL, token);
};
