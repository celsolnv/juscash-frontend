import { useEffect, useState } from "react";

import { ITask } from ".";
import { initialTasks } from "./constants";
import { convertPublicationsToTasks } from "./utils";

import * as api from "@/api/req/publication";
import { IPublication } from "@/types/IPublication";

export const usePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();
  const [tasks, setTasks] = useState<ITask[]>(initialTasks);

  const [newPublications, setNewPublications] = useState<ITask[]>([]);
  const [readPublications, setReadPublications] = useState<ITask[]>([]);
  const [sentToLawyerPublications, setSentToLawyerPublications] = useState<
    ITask[]
  >([]);
  const [donePublications, setDonePublications] = useState<ITask[]>([]);

  const moveTask = (taskId: string, newStatus: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
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
