export type TStatusImportExport = "pending" | "completed" | "failed";

export interface IImportExport {
  id: string;
  description: string;
  type: "financial" | "purchase";
  createdAt: string;
  status: TStatusImportExport;
}

export interface IErrorRecord {
  id: string;
  line: number;
  message: string;
  createdAt: string;
  updatedAt: string;
  importExportId: string;
}

export interface IImportDetails {
  description: string;
  type: string;
  status: TStatusImportExport;
  restaurantId: string;
  fileSize: number;
  totalLines: number;
  processedLines: number;
  originalFileName: string;
  fileType: string;
  importedBy: string;
  email: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  errors?: IErrorRecord[];
}
