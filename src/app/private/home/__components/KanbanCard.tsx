import React from "react";

import { Calendar, Clock, AlertCircle } from "lucide-react";

import { ITask } from "@/app/private/home";
import { Card, CardContent } from "@/components/ui/card";

interface KanbanCardProps {
  task: ITask;
}

const KanbanCard: React.FC<KanbanCardProps> = ({ task }) => {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("text/plain", task.id);
  };

  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case "high":
        return "border-l-red-500 bg-red-50";
      case "medium":
        return "border-l-yellow-500 bg-yellow-50";
      case "low":
        return "border-l-green-500 bg-green-50";
      default:
        return "border-l-gray-300 bg-white";
    }
  };

  const getPriorityIcon = (priority?: string) => {
    switch (priority) {
      case "high":
        return <AlertCircle className="w-3 h-3 text-red-500" />;
      case "medium":
        return <Clock className="w-3 h-3 text-yellow-500" />;
      case "low":
        return <Calendar className="w-3 h-3 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <Card
      draggable
      onDragStart={handleDragStart}
      className={`cursor-move transition-all duration-200 hover:shadow-lg hover:-translate-y-1 border-l-4 ${getPriorityColor(task.priority)}`}
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
            <Calendar className="w-3 h-3" />
            <span>{task.date || "Sem data"}</span>
          </div>

          {task.priority && (
            <div className="flex items-center space-x-1">
              {getPriorityIcon(task.priority)}
            </div>
          )}
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
