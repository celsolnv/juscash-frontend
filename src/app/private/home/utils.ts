import moment from "moment/min/moment-with-locales";
moment.locale("pt-br");

import { ITask } from ".";

import {
  IPublication,
  TPublicationStatus,
  TPublicationStatusPt
} from "@/types/IPublication";

const publicationStatusTranslate = {
  new: "nova",
  read: "lida",
  sent_to_lawyer: "advogado",
  done: "concluído"
};

export const publicationStatusTranslateEn = {
  nova: "new",
  lida: "read",
  advogado: "sent_to_lawyer",
  concluído: "done"
} as Record<TPublicationStatusPt, TPublicationStatus>;

export const convertPublicationsToTasks = (
  publications?: IPublication[]
): ITask[] => {
  return (
    publications?.map((publication) => {
      const lastUpdate = publication.updated_at
        ? moment(publication.updated_at).subtract(3, "hours").fromNow()
        : "";
      return {
        id: String(publication.id),
        title: publication.attorney || "Nenhum advogado encontrado",
        code: publication.case_number || "Nenhum número de caso encontrado",
        date:
          moment(publication.published_at).format("DD/MM/YYYY") ||
          "Não informado",
        last_update: lastUpdate,
        status: publicationStatusTranslate[publication.status],
        publication
      };
    }) || []
  );
};

export function checkValidMove(
  currentStatus: TPublicationStatusPt,
  newStatus: TPublicationStatusPt
): boolean {
  if (currentStatus === "nova" && newStatus === "lida") {
    return true;
  } else if (currentStatus === "lida" && newStatus === "advogado") {
    return true;
  } else if (currentStatus === "advogado" && newStatus === "lida") {
    return true;
  } else if (currentStatus === "advogado" && newStatus === "concluído") {
    return true;
  }
  return false;
}
