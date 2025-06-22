import { TPeriodType } from "./Pagination";

export interface IOperationalExpense {
  id: string;
  name: string;
  value: number;
}

export interface IBudgetPlanning {
  cmvAbsolute?: number;
  cmvPercentage: number;
  contributionMargin?: number;
  contributionMarginPercentage?: number;
  operationalExpensesTotal?: number;
  operationalProfit?: number;
  operationalProfitPercentage?: number;
  cmvTrend?: number[];
  operationalExpenses: IOperationalExpense[];

  id: string;
  initialStock: number;
  purchases: number;
  finalStock: number;
  totalRevenue: number;
  averageTicket: number;
  numberOfClients: number;
  createdAt: string;
  updatedAt: string;
  startPeriodDate: string;
  periodType: TPeriodType;
}
