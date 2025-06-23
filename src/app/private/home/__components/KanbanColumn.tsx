import React from "react";

import KanbanCard from "./KanbanCard";

import { ITask } from "@/app/private/home";
import { TPublicationStatusPt } from "@/types/IPublication";

interface Column {
  id: string;
  title: string;
  color: string;
  count: number;
}

interface KanbanColumnProps {
  column: Column;
  tasks: ITask[];
  onMoveTask: (
    taskId: string,
    newStatus: TPublicationStatusPt,
    currentStatus: TPublicationStatusPt
  ) => void;
  onCardClick: (task: ITask) => void;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({
  column,
  tasks,
  onMoveTask,
  onCardClick
}) => {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const [id, status] = e.dataTransfer.getData("text/plain").split("-");
    onMoveTask(
      id,
      column.id as TPublicationStatusPt,
      status as TPublicationStatusPt
    );
  };

  const getColumnIcon = (status: string) => {
    switch (status) {
      case "nova":
        return "📄";
      case "lida":
        return "👁️";
      case "advogado":
        return "⚖️";
      case "concluido":
        return "✅";
      default:
        return "📋";
    }
  };

  return (
    <div
      className={`${column.color} rounded-lg border-2 border-dashed p-4 min-h-[70vh] min-w-[280px] transition-all duration-200 hover:shadow-md`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {/* Column Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-lg">{getColumnIcon(column.id)}</span>
          <h3 className="font-semibold text-gray-800 text-sm">
            {column.title}
          </h3>
        </div>
        <div className="flex items-center space-x-2">
          <span className="bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-600">
            {tasks.length}
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-3">
        {tasks.length === 0 ? (
          <div className="text-center py-8 text-gray-500 text-sm">
            Nenhum resultado encontrado
          </div>
        ) : (
          tasks.map((task) => (
            <KanbanCard key={task.id} task={task} onCardClick={onCardClick} />
          ))
        )}
      </div>
    </div>
  );
};

export default KanbanColumn;
