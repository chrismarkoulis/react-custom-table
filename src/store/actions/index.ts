import { FinancialInstrument } from "models";
import { 
    FETCH_FINANCIAL_DATA_FAILURE, 
    FETCH_FINANCIAL_DATA_REQUEST, 
    FETCH_FINANCIAL_DATA_SUCCESS, 
    FetchFinancialDataFailureAction,
    FetchFinancialDataRequestAction,
    FetchFinancialDataSuccessAction
} from "../action-types";


export const fetchFinancialDataRequest = (): FetchFinancialDataRequestAction => ({
    type: FETCH_FINANCIAL_DATA_REQUEST,
});

export const fetchFinancialDataSuccess = (data: FinancialInstrument[]): FetchFinancialDataSuccessAction => ({
    type: FETCH_FINANCIAL_DATA_SUCCESS,
    payload: data,
});

export const fetchFinancialDataFailure = (error: string): FetchFinancialDataFailureAction => ({
    type: FETCH_FINANCIAL_DATA_FAILURE,
    payload: error,
});

