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
    add: createAction<number>("[ShoppingCart] Add item"),
    remove: createAction<number>("[ShoppingCart] Remove item"),
};

const shoppingCartReducer = createReducer<IShoppingCart>(initialState, builder =>
    builder
        .addCase(ShoppingCartActions.add, (state, action) => {
            const { catalogItemIds, quantityMap } = state;
            if (catalogItemIds.includes(action.payload)) {
                return {
                    catalogItemIds,
                    quantityMap: { ...quantityMap, [action.payload]: quantityMap[action.payload] + 1 },
                };
            }
            return {
                catalogItemIds: [action.payload, ...catalogItemIds],
                quantityMap: { ...quantityMap, [action.payload]: 1 },
            };
        })
        .addCase(ShoppingCartActions.remove, (state, action) => {
            const { catalogItemIds, quantityMap } = state;
            const quantityMapCopy = { ...quantityMap };
            delete quantityMapCopy[action.payload];
            return {
                catalogItemIds: catalogItemIds.filter(catalogItemId => catalogItemId !== action.payload),
                quantityMap: quantityMapCopy,
            };
        })
);

export default shoppingCartReducer;
