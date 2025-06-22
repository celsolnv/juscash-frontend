import { IGenericObject } from "./Common";
import { ISupplier } from "./ISupplier";

interface ISupplierTechnicalSheet {
  id: string;
  supplierId: string;
  pricePerUnit: number;
  unitOfMeasure: string;
  supplier?: ISupplier;
}

export interface ITechnicalSheet {
  id: string;
  name: string;
  category?: string;
  validityPeriod?: number;
  listOfIngredients: string;
  portion: string;
  expirationDate: string;
  manufacturerContact: string;
  calories: number;
  protein: number;
  carbohydrate: number;
  fat: number;
  fibers: number;
  sodium: number;
  sugar: number;
  storageInstructions: string;
  storageObservations: string;
  storageTemperature: number;
  lifeAfterOpening: string;
  allergens: IGenericObject[];
  specialStorageConditions: IGenericObject[];
  supplierTechnicalSheets: ISupplierTechnicalSheet[];
}
