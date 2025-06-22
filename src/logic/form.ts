import { create } from "zustand";

interface IUseManagerFormProps {
  isLoading: boolean;
  canEdit: boolean;
  setIsLoading: (isLoading: boolean) => void;
  setCanEdit: (canEdit: boolean) => void;
}
export const useManagerForm = create<IUseManagerFormProps>((set) => ({
  isLoading: false,
  canEdit: true,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setCanEdit: (canEdit: boolean) => set({ canEdit })
}));
