import { ThunkAction } from 'redux-thunk';
import { RootState } from './reducers';
import { fetchFinancialData as fetchFinancialDataAPI } from '../api/financialData';
import { FinancialInstrument } from './types';


// Action types
export const FETCH_FINANCIAL_DATA_REQUEST = 'FETCH_FINANCIAL_DATA_REQUEST';
export const FETCH_FINANCIAL_DATA_SUCCESS = 'FETCH_FINANCIAL_DATA_SUCCESS';
export const FETCH_FINANCIAL_DATA_FAILURE = 'FETCH_FINANCIAL_DATA_FAILURE';

// Define action interfaces
interface FetchFinancialDataRequestAction {
  type: typeof FETCH_FINANCIAL_DATA_REQUEST;
}

interface FetchFinancialDataSuccessAction {
  type: typeof FETCH_FINANCIAL_DATA_SUCCESS;
  payload: FinancialInstrument[];
}

interface FetchFinancialDataFailureAction {
  type: typeof FETCH_FINANCIAL_DATA_FAILURE;
  payload: string;
}

// Define action creators
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

// Async action creator
export const fetchFinancialData = (): ThunkAction<void, RootState, null, FetchFinancialDataRequestAction | FetchFinancialDataSuccessAction | FetchFinancialDataFailureAction> => async (dispatch) => {
  try {
    dispatch(fetchFinancialDataRequest());
    const data: FinancialInstrument[] = await fetchFinancialDataAPI();
    dispatch(fetchFinancialDataSuccess(data));
  } catch (error: any) {
    dispatch(fetchFinancialDataFailure(error.message));
  }
};
