import { FinancialInstrument } from "models";
import { FETCH_FINANCIAL_DATA_FAILURE, FETCH_FINANCIAL_DATA_REQUEST, FETCH_FINANCIAL_DATA_SUCCESS } from "../action-types/";
import { 
    FetchFinancialDataFailureAction, 
    FetchFinancialDataSuccessAction,
    FetchFinancialDataRequestAction
} from "../actions/";
import { RootState } from "../reducers/";
import { ThunkAction } from "redux-thunk";
import { fetchFinancialData as fetchFinancialDataAPI } from "../../api/financialData";

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
    } catch (error) {
      dispatch(fetchFinancialDataFailure((error as Error).message));
    }
  };