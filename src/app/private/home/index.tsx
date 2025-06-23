import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Search, Calendar, Filter, Scale } from "lucide-react";

import { Header } from "./__components/Header";
import KanbanColumn from "./__components/KanbanColumn";
import { columns } from "./constants";
import { usePage } from "./usePage";

import { Calendar as CalendarComponent, Button, Input } from "@/components/ui";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { useSignOut } from "@/hooks/signout";
import { cn } from "@/lib/utils";

export interface ITask {
  id: string;
  title: string;
  code: string;
  date: string;
  status: string;
  priority?: "high" | "medium" | "low";
}
const Index = () => {
  const {
    clearDateFilters,
    dateFrom,
    dateTo,
    moveTask,
    searchTerm,
    setDateFrom,
    setDateTo,
    setSearchTerm,
    newPublications,
    donePublications,
    readPublications,
    sentToLawyerPublications
  } = usePage();
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Scale className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Publicações</h2>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Digite o nome do processo ou forma que quer ser derivado..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Date From Filter */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-[200px] justify-start text-left font-normal",
                    !dateFrom && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {dateFrom
                    ? format(dateFrom, "dd/MM/yyyy", { locale: ptBR })
                    : "Data início"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={dateFrom}
                  onSelect={setDateFrom}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>

            {/* Date To Filter */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-[200px] justify-start text-left font-normal",
                    !dateTo && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {dateTo
                    ? format(dateTo, "dd/MM/yyyy", { locale: ptBR })
                    : "Data fim"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={dateTo}
                  onSelect={setDateTo}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>

            {/* Clear Filters Button */}
            {(dateFrom || dateTo) && (
              <Button variant="ghost" size="sm" onClick={clearDateFilters}>
                Limpar Filtros
              </Button>
            )}
          </div>

          {/* Active Filters Display */}
          {(dateFrom || dateTo) && (
            <div className="mb-4 p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2 text-sm text-green-700">
                <Filter className="w-4 h-4" />
                <span>Filtros ativos:</span>
                {dateFrom && (
                  <span className="bg-green-100 px-2 py-1 rounded">
                    De: {format(dateFrom, "dd/MM/yyyy", { locale: ptBR })}
                  </span>
                )}
                {dateTo && (
                  <span className="bg-green-100 px-2 py-1 rounded">
                    Até: {format(dateTo, "dd/MM/yyyy", { locale: ptBR })}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KanbanColumn
            column={columns.new}
            tasks={newPublications}
            onMoveTask={moveTask}
          />
          <KanbanColumn
            column={columns.read}
            tasks={readPublications}
            onMoveTask={moveTask}
          />
          <KanbanColumn
            column={columns.sentToLawyer}
            tasks={sentToLawyerPublications}
            onMoveTask={moveTask}
          />
          <KanbanColumn
            column={columns.done}
            tasks={donePublications}
            onMoveTask={moveTask}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
