import { ITechnicalSheet } from "./ITechnicalSheets";

export interface ISupplierTechnicalSheet {
  id: string;
  supplierId: string;
  technicalSheetId: string;
  pricePerUnit: number;
  unitOfMeasure: string;
  technicalSheet?: ITechnicalSheet;
}
export interface ISupplier {
  id: string;
  name: string;
  cnpj: string;
  email: string;
  phone: string;
  deliveryTime: string;
  paymentTerms: string;
  observations: string;
  createdAt: string;
  updatedAt: string;
  supplierTechnicalSheets: ISupplierTechnicalSheet[];
}
