import { combineReducers } from "redux";
import { financialDataReducer } from "./financialDataReducer";

export const rootReducer = combineReducers({
    financialData: financialDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;