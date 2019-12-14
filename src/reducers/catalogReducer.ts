import { createReducer, createAction, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { RootState } from "reducers";

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
    status: CatalogStatus;
    error?: string;
};

const initialState = {
    items: [],
    status: CatalogStatus.Initial,
    error: undefined,
};

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
};

export const catalogReducer = createReducer<ICatalog>(initialState, builder =>
    builder
        .addCase(CatalogActions.loadCatalog, (state, action) => ({
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
);
