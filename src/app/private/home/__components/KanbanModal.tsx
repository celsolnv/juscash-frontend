import React from "react";

import moment from "moment";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { IPublication } from "@/types/IPublication";
import masks from "@/utils/masks";

interface KanbanModalProps {
  task: IPublication | null;
  isOpen: boolean;
  onClose: () => void;
}

const KanbanModal: React.FC<KanbanModalProps> = ({ task, isOpen, onClose }) => {
  if (!task) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-gray-900">
            Publicação - {task.case_number}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 p-4">
          {/* Data de publicação */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Data de publicação no DJE:
            </h3>
            <p className="text-gray-900">
              {moment(task.created_at).format("DD/MM/YYYY") || "Não informado"}
            </p>
          </div>

          {/* Autor(es) */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Autor (es):
            </h3>
            <ul className="list-disc list-inside text-gray-900">
              <li>{task.plaintiff || "Nenhum autor informado"}</li>
            </ul>
          </div>

          {/* Réu */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Réu:</h3>
            <ul className="list-disc list-inside text-gray-900">
              <li>{task.defendant}</li>
            </ul>
          </div>

          {/* Advogado(s) */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Advogado(s):
            </h3>
            <ul className="list-disc list-inside text-gray-900 space-y-1">
              <li>{task.attorney || "Nenhum advogado encontrado"}</li>
            </ul>
          </div>

          {/* Valores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Valor principal bruto/ líquido
              </h3>
              <p className="text-gray-900">
                {masks.money(task.value_principal) || "Não informado"}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Valor dos juros moratórios:
              </h3>
              <p className="text-gray-900">
                {masks.money(task.value_interest) || "Não informado"}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Valor dos honorários advocatícios:
              </h3>
              <p className="text-gray-900">
                {masks.money(task.value_attorney) || "Não informado"}
              </p>
            </div>
          </div>

          {/* Conteúdo da Publicação */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Conteúdo da Publicação:
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-900 text-sm leading-relaxed">
                {task.full_text || "Nenhum conteúdo encontrado"}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default KanbanModal;
