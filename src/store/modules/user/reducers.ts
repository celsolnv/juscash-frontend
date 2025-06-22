import * as types from "./types";

import { IUser } from "@/types/IUser";

export type UserState = IUser | null;

const initialState = null;

type ModuleAction = {
  type: string;
  payload: IUser;
};

export default function userReducer(
  state: UserState = initialState,
  action: ModuleAction
) {
  switch (action.type) {
    case types.USER_CREATE:
      return action.payload;
    case types.USER_UPDATE:
      return {
        ...state,
        ...action.payload
      };
    case types.USER_REMOVE:
      return null;
    default:
      return state;
  }
}
