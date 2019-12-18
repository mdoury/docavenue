import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";

import { RootState } from "reducers";

import { getCatalogItems } from "./catalogReducer";

export enum ShoppingCartStatus {
    Initial = "INITIAL",
    Loading = "LOADING",
    Loaded = "LOADED",
    Error = "ERROR",
}

export type IShoppingCart = {
    catalogItemIds: number[];
    quantityMap: { [id: number]: number };
};

const initialState: IShoppingCart = {
    catalogItemIds: [],
    quantityMap: {},
};

export const getShoppingCart = (state: RootState) => state.shoppingCartReducer;
export const getShoppingCartCatalogItemIds = createSelector(getShoppingCart, state => state.catalogItemIds);
export const getShoppingCartQuantityMap = createSelector(getShoppingCart, state => state.quantityMap);
export const getShoppingCartCatalogItems = createSelector(
    [getShoppingCartCatalogItemIds, getCatalogItems],
    (catalogItemIds, catalogItems) => catalogItemIds.map(catalogItemId => catalogItems.find(item => item.id === catalogItemId)!)
);

export const ShoppingCartActions = {
    addItem: createAction<number>("[ShoppingCart] Add item"),
    remove: createAction<number>("[ShoppingCart] Remove item"),
    updateItemQuantity: createAction<{ id: number; quantity: number }>("[ShoppingCart] Update item quantity"),
};

const shoppingCartReducer = createReducer<IShoppingCart>(initialState, builder =>
    builder
        .addCase(ShoppingCartActions.addItem, (state, action) => {
            const { catalogItemIds, quantityMap } = state;
            if (catalogItemIds.includes(action.payload)) {
                quantityMap[action.payload] = quantityMap[action.payload] + 1;
            } else {
                catalogItemIds.unshift(action.payload);
                quantityMap[action.payload] = 1;
            }
        })
        .addCase(ShoppingCartActions.remove, (state, action) => {
            const { catalogItemIds, quantityMap } = state;
            const index = catalogItemIds.findIndex(catalogItemId => catalogItemId === action.payload);
            delete catalogItemIds[index];
            delete quantityMap[action.payload];
        })
        .addCase(ShoppingCartActions.updateItemQuantity, (state, action) => {
            const { id, quantity } = action.payload;
            state.quantityMap[id] = quantity;
        })
);

export default shoppingCartReducer;
