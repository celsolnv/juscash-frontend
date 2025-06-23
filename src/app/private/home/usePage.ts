import { useCallback, useEffect, useState } from "react";

import moment from "moment";
import { toast } from "sonner";

import { ITask } from ".";
import {
  checkValidMove,
  convertPublicationsToTasks,
  publicationStatusTranslateEn
} from "./utils";

import * as api from "@/api/req/publication";
import { IPublication, TPublicationStatusPt } from "@/types/IPublication";
import { debounce } from "@/utils/func";
import { sanitize } from "@/utils/text";

export const usePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFrom, setDateFrom] = useState<string>("");
  const [dateTo, setDateTo] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newPublications, setNewPublications] = useState<ITask[]>([]);
  const [readPublications, setReadPublications] = useState<ITask[]>([]);
  const [sentToLawyerPublications, setSentToLawyerPublications] = useState<
    ITask[]
  >([]);
  const [donePublications, setDonePublications] = useState<ITask[]>([]);
  const [count, setCount] = useState(0);
  const [selectedTask, setSelectedTask] = useState<IPublication | null>(null);

  const moveTask = (
    taskId: string,
    newStatus: TPublicationStatusPt,
    currentStatus: TPublicationStatusPt
  ) => {
    const hasValidMove = checkValidMove(currentStatus, newStatus);
    if (!hasValidMove) {
      toast.error("Movimentação inválida! Verifique o fluxo.");
      return;
    }
    api
      .update({ status: publicationStatusTranslateEn[newStatus] }, taskId)
      .then(() => {
        setCount((prevCount) => prevCount + 1);
      });
  };

  const handleSearch = useCallback(
    debounce((param: string) => {
      const query = sanitize(param);
      setSearchTerm(query);
    }, 300),
    []
  );
  const handleSearchDate = () => {
    if (dateFrom || dateTo) {
      const from = dateFrom ? moment(dateFrom).toISOString() : undefined;
      const to = dateTo ? moment(dateTo).toISOString() : undefined;
      if (from && to && new Date(from) > new Date(to)) {
        toast.error("A data de início não pode ser maior que a data de fim.");
        return;
      }
    }
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const filters = {
      search: searchTerm,
      startDate: dateFrom,
      endDate: dateTo
    };
    api.list({ ...filters, status: "new" }).then((res) => {
      const items = res.items as IPublication[];
      const formattedItems = convertPublicationsToTasks(items);
      setNewPublications(formattedItems);
    });
    api.list({ ...filters, status: "read" }).then((res) => {
      const items = res.items as IPublication[];
      const formattedItems = convertPublicationsToTasks(items);
      setReadPublications(formattedItems);
    });
    api.list({ ...filters, status: "sent_to_lawyer" }).then((res) => {
      const items = res.items as IPublication[];
      const formattedItems = convertPublicationsToTasks(items);
      setSentToLawyerPublications(formattedItems);
    });
    api.list({ ...filters, status: "done" }).then((res) => {
      const items = res.items as IPublication[];
      const formattedItems = convertPublicationsToTasks(items);
      setDonePublications(formattedItems);
    });
  }, [count, searchTerm]);

  const handleCardClick = (task: ITask) => {
    if (!task.publication) {
      toast.error("Tarefa sem publicação associada.");
      return;
    }
    setSelectedTask(task.publication);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  return {
    searchTerm,
    setSearchTerm,
    dateFrom,
    setDateFrom,
    dateTo,
    setDateTo,
    moveTask,
    newPublications,
    readPublications,
    sentToLawyerPublications,
    donePublications,
    isModalOpen,
    selectedTask,
    handleCloseModal,
    handleCardClick,
    handleSearch,
    handleSearchDate
  };
};
