import { ITask } from ".";

import { IPublication } from "@/types/IPublication";

const publicationStatusTranslate = {
  new: "Nova",
  read: "Lida",
  sent_to_lawyer: "Envio Advogado",
  done: "Concluído"
};
export const convertPublicationsToTasks = (
  publications: IPublication[]
): ITask[] => {
  return publications.map((publication) => ({
    id: String(publication.id),
    title: publication.attorney || "Nenhum advogado encontrado",
    code: publication.case_number || "Nenhum número de caso encontrado",
    date: publication.created_at
      ? new Date(publication.created_at).toLocaleDateString()
      : "",
    status: publicationStatusTranslate[publication.status]
  }));
};
