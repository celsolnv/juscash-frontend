export const statusRadioOptions = [
  { name: "status", label: "Ativo", value: "active" },
  { name: "status", label: "Inativo", value: "inactive" }
];
export const statusValuesForValidation = ["active", "inactive"] as const;
export const yesOrNoForValidation = ["yes", "no"] as const;
export const statusFilter = [
  {
    label: "Todos",
    value: ""
  },
  {
    label: "Ativo",
    value: "active"
  },
  {
    label: "Inativo",
    value: "inactive"
  }
];
