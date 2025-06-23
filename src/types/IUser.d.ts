export interface IUser {
  id: string;
  email: string;
  name: string;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}
