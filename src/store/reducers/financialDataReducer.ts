import { 
    ActionType, 
    FETCH_FINANCIAL_DATA_FAILURE, 
    FETCH_FINANCIAL_DATA_REQUEST, 
    FETCH_FINANCIAL_DATA_SUCCESS 
} from "../action-types";
import { FinancialInstrument } from "models";

export interface FinancialDataState {
    data: FinancialInstrument[];
    loading: boolean;
    error: string | null;
}

export const initialFinancialDataState: FinancialDataState = {
    data: [],
    loading: false,
    error: null,
};

export const financialDataReducer = (
    state = initialFinancialDataState,
    action: ActionType
): FinancialDataState => {
    switch (action.type) {
        case FETCH_FINANCIAL_DATA_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_FINANCIAL_DATA_SUCCESS:
            return { ...state, data: action.payload, loading: false, error: null };
        case FETCH_FINANCIAL_DATA_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};