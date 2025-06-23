import React from "react";

import { Calendar, Clock } from "lucide-react";

import { ITask } from "@/app/private/home";
import { Card, CardContent } from "@/components/ui/card";

interface KanbanCardProps {
  task: ITask;
  onCardClick: (task: ITask) => void;
}

const KanbanCard: React.FC<KanbanCardProps> = ({ task, onCardClick }) => {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("text/plain", `${task.id}-${task.status}`);
  };
  const handleClick = () => {
    onCardClick(task);
  };

  return (
    <Card
      draggable
      onDragStart={handleDragStart}
      onClick={handleClick}
      className={`cursor-move transition-all duration-200 hover:shadow-lg hover:-translate-y-1 border-l-4 `}
    >
      <CardContent className="p-4">
        {/* Task Code */}
        <div className="mb-2">
          <p className="text-sm font-medium text-gray-900 break-all">
            {task.code}
          </p>
        </div>

        {/* Date and Priority */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            <span>{task.last_update || "Sem data"}</span>
          </div>
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <Calendar className="w-3 h-3" />
            <span>{task.date || "Sem data"}</span>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="mt-3 pt-2 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400 uppercase tracking-wide">
              {task.status.replace("_", " ")}
            </span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default KanbanCard;
