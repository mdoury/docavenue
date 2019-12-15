import { ICatalog } from "reducers/catalogReducer";
import { combineReducers } from "redux";

import catalogReducer from "./catalogReducer";

export type RootState = {
    catalogReducer: ICatalog;
};

const rootReducer = combineReducers({
    catalogReducer,
});

export default rootReducer;
