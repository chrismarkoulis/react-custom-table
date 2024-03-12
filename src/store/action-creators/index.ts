import { FinancialInstrument } from "models";
import {
    fetchFinancialDataFailure,
    fetchFinancialDataRequest,
    fetchFinancialDataSuccess
} from "../actions/";
import { RootState } from "../reducers/";
import { ThunkAction } from "redux-thunk";
import { fetchFinancialData as fetchFinancialDataAPI } from "../../api/financialData";
import { FetchFinancialDataRequestAction, FetchFinancialDataSuccessAction, FetchFinancialDataFailureAction } from "../action-types";

const ERROR_MESSAGE = "Something went wrong, please try again";

// Async action creator
export const fetchFinancialData = ():
    ThunkAction<void, RootState, null,
        FetchFinancialDataRequestAction |
        FetchFinancialDataSuccessAction |
        FetchFinancialDataFailureAction> => async (dispatch) => {
            try {
                await dispatch(fetchFinancialDataRequest());
                const data: FinancialInstrument[] = await fetchFinancialDataAPI();
                dispatch(fetchFinancialDataSuccess(data));
            } catch (error) {
                dispatch(fetchFinancialDataFailure(ERROR_MESSAGE));
            }
        };