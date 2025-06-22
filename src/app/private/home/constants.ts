import { ITask } from ".";

export const columns = [
  {
    id: "nova",
    title: "Nova Publicação",
    color: "bg-blue-100 border-blue-200",
    count: 1
  },
  {
    id: "lida",
    title: "Publicação Lida",
    color: "bg-yellow-100 border-yellow-200",
    count: 1
  },
  {
    id: "advogado",
    title: "Enviar para Advogado Responsável",
    color: "bg-orange-100 border-orange-200",
    count: 0
  },
  {
    id: "concluido",
    title: "Concluído",
    color: "bg-green-100 border-green-200",
    count: 3
  }
];

export const initialTasks: ITask[] = [
  {
    id: "1",
    title: "Nova Publicação",
    code: "5018120-21.2021.8.13.0022",
    date: "21/10/2024",
    status: "nova",
    priority: "high"
  },
  {
    id: "2",
    title: "Publicação Lida",
    code: "5018120-21.2021.8.13.0022",
    date: "21/10/2024",
    status: "lida",
    priority: "medium"
  },
  {
    id: "3",
    title: "Envio Advogado",
    code: "Nenhum card encontrado",
    date: "",
    status: "advogado",
    priority: "low"
  },
  {
    id: "4",
    title: "Concluído",
    code: "5018120-21.2021.8.13.0022",
    date: "21/12/2023",
    status: "concluido",
    priority: "medium"
  },
  {
    id: "5",
    title: "Concluído",
    code: "5018120-21.2021.8.13.0022",
    date: "21/12/2023",
    status: "concluido",
    priority: "high"
  },
  {
    id: "6",
    title: "Concluído",
    code: "5018120-21.2021.8.13.0022",
    date: "21/12/2023",
    status: "concluido",
    priority: "low"
  }
];
