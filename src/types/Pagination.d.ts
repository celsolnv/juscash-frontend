import { TPublicationStatus } from "./IPublication";

export interface IPaginationManager {
  totalItems?: number;
  currentPage?: number;
  nextPage?: number | null;
  prevPage?: number | null;
  lastPage?: number;
}
export interface Pagination<T> {
  items: T[];
  pagination: IPaginationManager;
}

export interface PaginationParams {
  search?: string;
  limit?: number;
  page?: number;
  orderValue?: "asc" | "desc";
  orderKey?: string;
}

export type TPeriodType = "weekly" | "monthly" | "yearly";

export interface Query {
  page?: number;
  limit?: number;
  query?: string;
  initial_date?: string;
  final_date?: string;

  status?: TPublicationStatus;
}

export interface IManyAction {
  params: {
    id?: string | string[];
  };
  query?: {
    status?: boolean;
  };
}
