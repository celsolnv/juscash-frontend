import { useState } from "react";

import { ITask } from ".";
import { initialTasks } from "./constants";

export const usePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();

  const [tasks, setTasks] = useState<ITask[]>(initialTasks);

  const moveTask = (taskId: string, newStatus: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const parseDate = (dateStr: string) => {
    if (!dateStr) return null;
    const [day, month, year] = dateStr.split("/");
    return new Date(Number(year), Number(month) - 1, Number(day));
  };

  const isDateInRange = (taskDate: string) => {
    if (!dateFrom && !dateTo) return true;

    const parsedTaskDate = parseDate(taskDate);
    if (!parsedTaskDate) return true;

    if (dateFrom && parsedTaskDate < dateFrom) return false;
    if (dateTo && parsedTaskDate > dateTo) return false;

    return true;
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.code.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDateRange = isDateInRange(task.date);

    return matchesSearch && matchesDateRange;
  });

  const clearDateFilters = () => {
    setDateFrom(undefined);
    setDateTo(undefined);
  };

  return {
    searchTerm,
    setSearchTerm,
    dateFrom,
    setDateFrom,
    dateTo,
    setDateTo,
    tasks: filteredTasks,
    moveTask,
    clearDateFilters,
    filteredTasks
  };
};
