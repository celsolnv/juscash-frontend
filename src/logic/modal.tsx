import Swal from "sweetalert2";

export async function success(title: string, action?: () => void) {
  return Swal.fire({
    title,
    icon: "success",
    confirmButtonText: "Voltar"
  }).then((result) => {
    if (result.isConfirmed) {
      if (action) {
        action();
      }
    }
  });
}
export async function error(title: string, action?: () => void) {
  return Swal.fire({
    title,
    icon: "error",
    confirmButtonText: "Voltar"
  }).then((result) => {
    if (result.isConfirmed) {
      if (action) {
        action();
      }
    }
  });
}

interface IConfirmParam {
  title: string;
  description?: string;
  action: () => void;
  confirmText?: string;
}
export async function confirm({
  title,
  action,
  description = "",
  confirmText = "Confirmar"
}: IConfirmParam) {
  return Swal.fire({
    title,
    text: description,
    icon: "question",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    confirmButtonText: confirmText
  }).then((result) => {
    if (result.isConfirmed) {
      action();
    }
  });
}
