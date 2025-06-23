import { Search, Scale } from "lucide-react";

import { Header } from "./__components/Header";
import KanbanColumn from "./__components/KanbanColumn";
import KanbanModal from "./__components/KanbanModal";
import { columns } from "./constants";
import { usePage } from "./usePage";

import { Button, Input } from "@/components/ui";
import { IPublication } from "@/types/IPublication";

export interface ITask {
  id: string;
  title: string;
  code: string;
  date: string;
  last_update: string;
  status: string;
  priority?: "high" | "medium" | "low";
  publication?: IPublication;
}
const Index = () => {
  const {
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
    sentToLawyerPublications,
    selectedTask,
    isModalOpen,
    handleCardClick,
    handleCloseModal,
    handleSearchDate
  } = usePage();
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8 flex justify-between lg:flex-row flex-col">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Scale className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Publicações</h2>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col items-start gap-2 space-x-4 mb-6">
            <div className="flex flex-col gap-2 w-full max-w-[500px]">
              <h2 className="font-semibold">Pesquisar</h2>
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Digite o nome do processo ou forma que quer ser derivado..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold">Data do diário</h2>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">De:</span>
                <Input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  className="w-40"
                />
                <span className="text-gray-500">Até:</span>
                <Input
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  className="w-40"
                />
                {/* Botao de pesqusiar */}
                <Button size="icon" onClick={handleSearchDate}>
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="flex overflow-x-auto gap-6">
          <KanbanColumn
            column={columns.new}
            tasks={newPublications}
            onMoveTask={moveTask}
            onCardClick={handleCardClick}
          />
          <KanbanColumn
            column={columns.read}
            tasks={readPublications}
            onMoveTask={moveTask}
            onCardClick={handleCardClick}
          />
          <KanbanColumn
            column={columns.sentToLawyer}
            tasks={sentToLawyerPublications}
            onMoveTask={moveTask}
            onCardClick={handleCardClick}
          />
          <KanbanColumn
            column={columns.done}
            tasks={donePublications}
            onMoveTask={moveTask}
            onCardClick={handleCardClick}
          />
        </div>
      </div>
      <KanbanModal
        task={selectedTask}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
