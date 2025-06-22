import { IRestaurant } from "./IRestaurant";

export interface IUser {
  id: string;
  email: string;
  document: string;
  document_type: "cpf" | "cnpj";
  name: string;
  position: string;
  phone: string;
  isActive: boolean;
  has2fa?: boolean;
  wantsSystemNotifications?: boolean;
  wantsEmailNotifications?: boolean;
  finishedOnboarding: boolean;
  createdAt: string;
  updatedAt: string;
  picture: string;
  role: {
    id: string;
    name: string;
    notes: string;
  };
  restaurant: IRestaurant;
}
export interface IUserFindResponse extends IUser {
  restaurant: {
    id: string;
    name: string;
  };
}
