type TScenario = "pessimistic" | "realistic" | "optimistic";

export interface IForecastingResult {
  futureRevenues: number[];
  revenueEstimate: number;
  revenueGrowth: number;
  profitEstimate: number;
  averageCmv: number;
  operationalExpensesAverage: number;
  cmvIdealPercentage: number;
  revenueGrowthPercentage: number;
}

export interface IForecasting {
  forecasting: IForecastingResult;
  base: number[];
}

export interface IDashboard {
  totalRevenue: number;
  cmv: number;
  cmvPercentage: number;
  profit: number;
  operationalExpenses: number;
  clientsAttended: number;
  purchases: {
    category: string;
    revenue: number;
    percentage: number;
  }[];
  purchasesTotal: number;
  lineChartData: {
    month: string;
    profit: number;
    totalRevenue: number;
  }[];
}
