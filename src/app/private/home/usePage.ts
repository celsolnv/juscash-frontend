import { useEffect, useState } from "react";

import { toast } from "sonner";

import { ITask } from ".";
import {
  checkValidMove,
  convertPublicationsToTasks,
  publicationStatusTranslateEn
} from "./utils";

import * as api from "@/api/req/publication";
import { IPublication, TPublicationStatusPt } from "@/types/IPublication";

export const usePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();

  const [newPublications, setNewPublications] = useState<ITask[]>([]);
  const [readPublications, setReadPublications] = useState<ITask[]>([]);
  const [sentToLawyerPublications, setSentToLawyerPublications] = useState<
    ITask[]
  >([]);
  const [donePublications, setDonePublications] = useState<ITask[]>([]);

  const moveTask = (
    taskId: string,
    newStatus: TPublicationStatusPt,
    currentStatus: TPublicationStatusPt
  ) => {
    console.log("Movendo de :", currentStatus, "Para :", newStatus);
    const hasValidMove = checkValidMove(currentStatus, newStatus);
    if (!hasValidMove) {
      toast.error("Movimentação inválida! Verifique o fluxo.");
      return;
    }
    api.update({ status: publicationStatusTranslateEn[newStatus] }, taskId);
  };

  const clearDateFilters = () => {
    setDateFrom(undefined);
    setDateTo(undefined);
  };

  useEffect(() => {
    api.list({ status: "new" }).then((res) => {
      const items = res.items as IPublication[];
      const formattedItems = convertPublicationsToTasks(items);
      setNewPublications(formattedItems);
    });
    api.list({ status: "read" }).then((res) => {
      const items = res.items as IPublication[];
      const formattedItems = convertPublicationsToTasks(items);
      setReadPublications(formattedItems);
    });
    api.list({ status: "sent_to_lawyer" }).then((res) => {
      const items = res.items as IPublication[];
      const formattedItems = convertPublicationsToTasks(items);
      setSentToLawyerPublications(formattedItems);
    });
    api.list({ status: "done" }).then((res) => {
      const items = res.items as IPublication[];
      const formattedItems = convertPublicationsToTasks(items);
      setDonePublications(formattedItems);
    });
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    dateFrom,
    setDateFrom,
    dateTo,
    setDateTo,
    moveTask,
    clearDateFilters,
    newPublications,
    readPublications,
    sentToLawyerPublications,
    donePublications
  };
};
