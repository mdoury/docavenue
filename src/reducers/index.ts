import { combineReducers } from "redux";
import { catalogReducer } from "./catalogReducer";
import { ICatalog } from "reducers/catalogReducer";

export type RootState = {
    catalogReducer: ICatalog;
};

export const rootReducer = combineReducers({
    catalogReducer,
});
