import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";

export type RootState = {
    counterReducer: number;
};

export const rootReducer = combineReducers({
    counterReducer,
});
