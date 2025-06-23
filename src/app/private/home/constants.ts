import { TPublicationStatusPt } from "@/types/IPublication";

export const columns = {
  new: {
    id: "nova",
    title: "Nova Publicação",
    color: "bg-blue-100 border-blue-200",
    count: 1
  },
  read: {
    id: "lida",
    title: "Publicação Lida",
    color: "bg-yellow-100 border-yellow-200",
    count: 1
  },
  sentToLawyer: {
    id: "advogado",
    title: "Enviar para Advogado Responsável",
    color: "bg-orange-100 border-orange-200",
    count: 0
  },
  done: {
    id: "concluído",
    title: "Concluído",
    color: "bg-green-100 border-green-200",
    count: 3
  }
} as Record<
  string,
  {
    id: TPublicationStatusPt;
    title: string;
    color: string;
    count: number;
  }
>;
