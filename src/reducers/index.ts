import { combineReducers } from "redux";

import catalogReducer, { ICatalog } from "./catalogReducer";
import shoppingCartReducer, { IShoppingCart } from "./shoppingCartReducer";

export type RootState = {
    catalogReducer: ICatalog;
    shoppingCartReducer: IShoppingCart;
};

const rootReducer = combineReducers({
    catalogReducer,
    shoppingCartReducer,
});

export default rootReducer;
