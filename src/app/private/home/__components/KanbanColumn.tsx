import React from "react";

import { Plus } from "lucide-react";

import KanbanCard from "./KanbanCard";

import { ITask } from "@/app/private/home";
import { Button } from "@/components/ui/button";

interface Column {
  id: string;
  title: string;
  color: string;
  count: number;
}

interface KanbanColumnProps {
  column: Column;
  tasks: ITask[];
  onMoveTask: (taskId: string, newStatus: string) => void;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({
  column,
  tasks,
  onMoveTask
}) => {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
    onMoveTask(taskId, column.id);
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
      className={`${column.color} rounded-lg border-2 border-dashed p-4 min-h-[400px] transition-all duration-200 hover:shadow-md`}
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
          <Button size="sm" variant="ghost" className="w-6 h-6 p-0">
            <Plus className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-3">
        {tasks.length === 0 ? (
          <div className="text-center py-8 text-gray-500 text-sm">
            {column.id === "advogado"
              ? "Nenhum card encontrado"
              : "Nenhuma tarefa"}
          </div>
        ) : (
          tasks.map((task) => <KanbanCard key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
};

export default KanbanColumn;
