export type TPublicationStatus = "new" | "read" | "sent_to_lawyer" | "done";
export type TPublicationStatusPt = "nova" | "lida" | "advogado" | "concluído";

export interface IPublication {
  id?: number;
  case_number?: string;
  plaintiff?: string;
  attorney?: string;
  value_principal?: string;
  value_interest?: string;
  value_attorney?: string;
  full_text?: string;
  defendant?: string;
  status: TPublicationStatus;
  created_at?: string;
  updated_at?: string;
  published_at?: string;
}
