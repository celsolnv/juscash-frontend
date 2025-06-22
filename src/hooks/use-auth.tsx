import { useNavigate, useSearchParams } from "react-router-dom";

import { useAppDispatch } from "./redux";
import { setToken } from "./token";
import { setUser } from "./user";

import { ILoginResponse } from "@/api/req/auth";
import { create } from "@/store/modules/user/actions";

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const signIn = (data: ILoginResponse) => {
    dispatch(create(data.user));
    setUser(data.user);
    if (data.token) {
      setToken(data.token);
      const callback = searchParams.get("callbackUrl");
      navigate(callback || "/");
      return;
    }
    navigate("/verificar-2fa");
  };

  return {
    signIn
  };
};
