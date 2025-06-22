export interface IRestaurant {
  id: string;
  name: string;
  cnpj?: string;
  openingHours?: string;
  phone?: string;
  email?: string;
  cuisineType: string;
  // Step 2
  serviceTypes?: string[];
  cuisineTypes?: string[];
  description?: string;
  seatingCapacity?: number;
  numberOfTables?: number;
  numberOfEmployees?: number;

  // Step 3
  icms?: number;
  pis?: number;
  cofins?: number;
  iss?: number;
  csll?: number;
  ir?: number;
  taxRegime?: string;

  address: {
    cep: string;
    uf: string;
    city: string;
    district: string;
    street: string;
    number: string;
  };
}
