import * as types from "./types";

import { IUser } from "@/types/IUser";

export const create = (params: IUser) => {
  return {
    type: types.USER_CREATE,
    payload: params
  };
};

export const update = (params: Partial<IUser>) => {
  return {
    type: types.USER_UPDATE,
    payload: params
  };
};

export const destroy = () => {
  return {
    type: types.USER_REMOVE
  };
};
