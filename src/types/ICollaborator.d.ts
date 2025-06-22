import { IUser } from "./IUser";

export type ICollaborator = Omit<IUser, "restaurant">;
