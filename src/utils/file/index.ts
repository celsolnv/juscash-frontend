import Cookies from "js-cookie";
import { toast } from "sonner";

export const downloadFile = async (path: string, filename: string) => {
  const response = await fetch(path, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${Cookies.get(import.meta.env.VITE_PUBLIC_TOKEN_LOCAL)}`
    }
  });

  if (!response.ok) {
    toast.error("Erro ao baixar o arquivo");
    throw new Error("Network response was not ok");
  }

  const blob = await response.blob();
  const buttonDownload = document.createElement("a");
  const url = window.URL.createObjectURL(blob);
  buttonDownload.href = url;
  buttonDownload.download = filename;
  buttonDownload.click();
  // Limpa o objeto URL após o download
  window.URL.revokeObjectURL(url);
};
