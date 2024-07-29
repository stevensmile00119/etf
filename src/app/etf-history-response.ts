export interface EtfHistoryResponse {
  status: string;
  title: string;
  data: Array<Array<string | null>>;
  fields: Array<string>;
}

export interface EtfData {
  code: string;
  name: string;
  exDividendDate: Date;
  baseDate: Date;
  paymentDate: Date;
  amount: string | null;
  standard: string;
  year: number;
}

export interface UserEtfData {
  code: string;
  name?: string;
  startDate: Date;
  endDate?: Date;
  amountOfStock: number;
}
