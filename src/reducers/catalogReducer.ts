import { Action, createAction, createReducer, createSelector } from "@reduxjs/toolkit";

import Fuse from "fuse.js";
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
    search: string;
    status: CatalogStatus;
    error: string | null;
};

const initialState: ICatalog = {
    items: [],
    currentPage: 1,
    itemsPerPage: 15,
    search: "",
    status: CatalogStatus.Initial,
    error: null,
};

export const getCatalog = (state: RootState) => state.catalogReducer;
export const getCatalogItems = createSelector(getCatalog, state => state.items);
export const getCurrentPage = createSelector(getCatalog, state => state.currentPage);
export const getItemsPerPage = createSelector(getCatalog, state => state.itemsPerPage);
export const getItemsCount = createSelector(getCatalogItems, items => items.length);
export const getPageCount = createSelector([getItemsCount, getItemsPerPage], (count, itemsPerPage) => Math.ceil(count / itemsPerPage));
export const getStatus = createSelector(getCatalog, state => state.status);

export const getSearch = createSelector(getCatalog, state => state.search);
export const getFuseSearchInstance = createSelector(getCatalogItems, items => new Fuse(items, { keys: ["title"] }));
export const getSearchResults = createSelector([getFuseSearchInstance, getSearch], (fuse, search) => fuse.search(search));

export const getDisplayItems = createSelector([getSearch, getSearchResults, getCatalogItems], (search, results, items) =>
    search && search.length ? results : items
);
export const getDisplayItemsCount = createSelector(getDisplayItems, items => items.length);

export const getPaginatedItems = createSelector([getDisplayItems, getCurrentPage, getItemsPerPage], (items, currentPage, itemsPerPage) =>
    items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
);

export const getCurrentPageFirstItem = createSelector(
    [getCurrentPage, getItemsPerPage],
    (currentPage, itemsPerPage) => (currentPage - 1) * itemsPerPage + 1
);
export const getCurrentPageLastItem = createSelector(
    [getCurrentPage, getItemsPerPage, getDisplayItemsCount],
    (currentPage, itemsPerPage, itemsCount) => Math.min(currentPage * itemsPerPage, itemsCount)
);
export const getPaginationText = createSelector(
    [getCurrentPageFirstItem, getCurrentPageLastItem, getDisplayItemsCount],
    (firstItem, lastItem, itemsCount) => `${firstItem}\u2011${lastItem}\u00A0of\u00A0${itemsCount}`
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
                dispatch(CatalogActions.loadCatalogFailure(error.message));
            }
        };
    },
};

export const CatalogActions = {
    loadCatalog: createAction("[Catalog] Start loading catalog..."),
    loadCatalogSuccess: createAction<ICatalogItem[]>("[Catalog] Succeeded loading"),
    loadCatalogFailure: createAction<string>("[Catalog] Failed loading"),
    firstPage: createAction("[Catalog] First page"),
    previousPage: createAction("[Catalog] Previous page"),
    goToPage: createAction<number>("[Catalog] Go to page"),
    nextPage: createAction("[Catalog] Next page"),
    lastPage: createAction("[Catalog] Last page"),
    setItemsPerPage: createAction<number>("[Catalog] Set items per page"),
    search: createAction<string>("[Catalog] Search"),
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
            error: action.payload,
            status: CatalogStatus.Error,
        }))
        .addCase(CatalogActions.firstPage, state => ({
            ...state,
            currentPage: 1,
        }))
        .addCase(CatalogActions.previousPage, state => ({
            ...state,
            currentPage: (state.currentPage - 1) * state.itemsPerPage > 0 ? state.currentPage - 1 : state.currentPage,
        }))
        .addCase(CatalogActions.goToPage, (state, action) => ({
            ...state,
            currentPage: action.payload,
        }))
        .addCase(CatalogActions.nextPage, state => ({
            ...state,
            currentPage: (state.currentPage + 1) * state.itemsPerPage < state.items.length ? state.currentPage + 1 : state.currentPage,
        }))
        .addCase(CatalogActions.lastPage, state => ({
            ...state,
            currentPage: Math.ceil(state.items.length / state.itemsPerPage),
        }))
        .addCase(CatalogActions.setItemsPerPage, (state, action) => ({
            ...state,
            currentPage: 1,
            itemsPerPage: action.payload,
        }))
        .addCase(CatalogActions.search, (state, action) => ({
            ...state,
            search: action.payload,
            currentPage: 1,
        }))
);

export default catalogReducer;
