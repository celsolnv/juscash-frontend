// store/modalStore.ts
import { create } from "zustand";

type ModalState = {
  modalType: "success" | "error" | "confirm" | null;
  isOpen: boolean;
  title: string;
  description: string;
  action: (() => void) | null;
  setModal: (
    modalType: "success" | "error" | "confirm" | null,
    title: string,
    description?: string,
    action?: () => void
  ) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  modalType: null,
  isOpen: false,
  title: "",
  description: "",
  action: null,
  setModal: (
    modalType,
    title,
    description = "",
    action = undefined,
    isOpen = true
  ) => set({ modalType, title, description, action, isOpen }),
  closeModal: () =>
    set({
      modalType: null,
      title: "",
      description: "",
      action: null,
      isOpen: false
    })
}));
