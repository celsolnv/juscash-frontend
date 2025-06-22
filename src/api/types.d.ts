import { Pagination, Query } from "@/types/Pagination";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IUseCallerProps<T, R = any> {
  filters?: Query;
  enabled?: boolean;
  id?: string | null;
  show?: boolean;
  callbacks?: {
    list?: {
      onSuccess?: (data: Pagination<T>) => void;
      onError?: () => void;
    };
    show?: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onSuccess?: (data: R) => void;
      onError?: () => void;
    };
    create?: {
      onSuccess?: (data: T) => void;
      onError?: () => void;
    };
    update?: {
      onSuccess?: (data: T) => void;
      onError?: (error?: unknown) => void;
    };
    destroy?: {
      onSuccess?: (data: Pagination<T> | T[]) => void;
      onError?: () => void;
    };
    status?: {
      onSuccess?: (data: Pagination<T> | T[]) => void;
      onError?: () => void;
    };
  };
}
