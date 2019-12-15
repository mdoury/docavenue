import { Action, createAction, createReducer, createSelector } from "@reduxjs/toolkit";

import { RootState } from "reducers";
import { ThunkAction } from "redux-thunk";

export enum CatalogStatus {
    Initial = "INITIAL",
    Loading = "LOADING",
    Loaded = "LOADED",
    Error = "ERROR",
}

export type ICatalogItem = {
    id: number;
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};

export type ICatalog = {
    items: ICatalogItem[];
    currentPage: number;
    itemsPerPage: number;
    status: CatalogStatus;
    error?: string;
};

const initialState = {
    items: [],
    currentPage: 1,
    itemsPerPage: 15,
    status: CatalogStatus.Initial,
    error: undefined,
};

export const getCatalog = (state: RootState) => state.catalogReducer;
export const getCatalogItems = createSelector(getCatalog, state => state.items);
export const getCurrentPage = createSelector(getCatalog, state => state.currentPage);
export const getItemsPerPage = createSelector(getCatalog, state => state.itemsPerPage);
export const getStatus = createSelector(getCatalog, state => state.status);
export const getPaginatedItems = createSelector([getCatalogItems, getCurrentPage, getItemsPerPage], (items, currentPage, itemsPerPage) =>
    items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
);

export const CatalogThunks = {
    load: function(catalogUrl: string): ThunkAction<void, RootState, null, Action<string>> {
        return async dispatch => {
            dispatch(CatalogActions.loadCatalog());
            try {
                const response = await fetch(catalogUrl);
                const items: ICatalogItem[] = await response.json();
                dispatch(CatalogActions.loadCatalogSuccess(items));
            } catch (error) {
                dispatch(CatalogActions.loadCatalogFailure(error));
            }
        };
    },
};

export const CatalogActions = {
    loadCatalog: createAction("[Catalog] Start loading catalog..."),
    loadCatalogSuccess: createAction<ICatalogItem[]>("[Catalog] Succeeded loading"),
    loadCatalogFailure: createAction<Error>("[Catalog] Failed loading"),
    goToPage: createAction<number>("[Catalog] Go to page"),
    nextPage: createAction("[Catalog] Next page"),
    previousPage: createAction("[Catalog] Previous page"),
    setItemsPerPage: createAction<number>("[Catalog] Set items per page"),
};

const catalogReducer = createReducer<ICatalog>(initialState, builder =>
    builder
        .addCase(CatalogActions.loadCatalog, state => ({
            ...state,
            status: CatalogStatus.Loading,
        }))
        .addCase(CatalogActions.loadCatalogSuccess, (state, action) => ({
            ...state,
            items: [...state.items, ...action.payload],
            status: CatalogStatus.Loaded,
        }))
        .addCase(CatalogActions.loadCatalogFailure, (state, action) => ({
            ...state,
            error: action.payload.message,
            status: CatalogStatus.Error,
        }))
        .addCase(CatalogActions.goToPage, (state, action) => ({
            ...state,
            currentPage: action.payload,
        }))
        .addCase(CatalogActions.nextPage, state => ({
            ...state,
            currentPage: (state.currentPage + 1) * state.itemsPerPage < state.items.length ? state.currentPage + 1 : state.currentPage,
        }))
        .addCase(CatalogActions.previousPage, state => ({
            ...state,
            currentPage: (state.currentPage - 1) * state.itemsPerPage > 0 ? state.currentPage - 1 : state.currentPage,
        }))
        .addCase(CatalogActions.setItemsPerPage, (state, action) => ({
            ...state,
            itemsPerPage: action.payload,
        }))
);

export default catalogReducer;
