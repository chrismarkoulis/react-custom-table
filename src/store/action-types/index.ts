import { FinancialInstrument } from "models";

export const FETCH_FINANCIAL_DATA_REQUEST = 'FETCH_FINANCIAL_DATA_REQUEST';
export const FETCH_FINANCIAL_DATA_SUCCESS = 'FETCH_FINANCIAL_DATA_SUCCESS';
export const FETCH_FINANCIAL_DATA_FAILURE = 'FETCH_FINANCIAL_DATA_FAILURE';

export type ActionType =
  | { type: typeof FETCH_FINANCIAL_DATA_REQUEST }
  | { type: typeof FETCH_FINANCIAL_DATA_SUCCESS; payload: FinancialInstrument[] }
  | { type: typeof FETCH_FINANCIAL_DATA_FAILURE; payload: string };