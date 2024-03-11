import { FinancialInstrument } from "models";
import { 
    FETCH_FINANCIAL_DATA_FAILURE, 
    FETCH_FINANCIAL_DATA_REQUEST, 
    FETCH_FINANCIAL_DATA_SUCCESS } from "store/action-types";


export interface FetchFinancialDataRequestAction {
    type: typeof FETCH_FINANCIAL_DATA_REQUEST;
}

export interface FetchFinancialDataSuccessAction {
    type: typeof FETCH_FINANCIAL_DATA_SUCCESS;
    payload: FinancialInstrument[];
}

export interface FetchFinancialDataFailureAction {
    type: typeof FETCH_FINANCIAL_DATA_FAILURE;
    payload: string;
}

