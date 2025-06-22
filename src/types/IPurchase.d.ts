export interface IPurchaseCategory {
  id: string;
  name: string;
  level: number;
  parentCategoryId: string;
  createdAt: string;
  updatedAt: string;
}
export interface IPurchase {
  id: string;
  name: string;
  unitOfMeasurement: string;
  unitValue: number;
  quantity: number;
  totalValue: number;
  purchaseDate: string;
  expirationDate: string;
  restaurantId: string;
  categoryId: string;
  subcategoryId: string;
  specificityId: string;
  createdAt: string;
  updatedAt: string;
  category: IPurchaseCategory;
  subcategory: IPurchaseCategory;
  specificity: IPurchaseCategory;
}
