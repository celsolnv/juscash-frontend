export type TPublicationStatus = "new" | "read" | "sent_to_lawyer" | "done";

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
  // TODO: data que foi publicada
}
