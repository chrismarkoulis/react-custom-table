import { combineReducers } from 'redux';
import { FinancialInstrument } from './types';
import {
  FETCH_FINANCIAL_DATA_REQUEST,
  FETCH_FINANCIAL_DATA_SUCCESS,
  FETCH_FINANCIAL_DATA_FAILURE,
} from './actions';

// Define action types
type ActionType =
  | { type: typeof FETCH_FINANCIAL_DATA_REQUEST }
  | { type: typeof FETCH_FINANCIAL_DATA_SUCCESS; payload: FinancialInstrument[] }
  | { type: typeof FETCH_FINANCIAL_DATA_FAILURE; payload: string };

// Define action creator types
type Action = ActionType;

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
  action: Action
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

export const rootReducer = combineReducers({
  financialData: financialDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
