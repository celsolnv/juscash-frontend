// utils/modalUtils.ts

import { useModalStore } from "@/store/modal-store";

export const showSuccess = (title: string, action?: () => void) => {
  const setModal = useModalStore.getState().setModal;
  setModal("success", title, "", action);
};

interface IShowError {
  title: string;
  action?: () => void;
}
export const showError = ({ title, action }: IShowError) => {
  const setModal = useModalStore.getState().setModal;
  setModal("error", title, "", action);
};

interface IShowConfirm {
  title: string;
  description: string;
  action: () => void;
}
export const showConfirm = ({ title, description, action }: IShowConfirm) => {
  const setModal = useModalStore.getState().setModal;
  setModal("confirm", title, description, action);
};
