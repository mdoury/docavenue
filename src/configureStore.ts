import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import rootReducer from "./reducers";

export default function configureAppStore(preloadedState?: any) {
    const store = configureStore({
        reducer: rootReducer,
        middleware: [...getDefaultMiddleware()],
        preloadedState,
        enhancers: [],
    });

    if (process.env.NODE_ENV !== "production" && "hot" in module) {
        (module as any).hot.accept("./reducers", () => store.replaceReducer(rootReducer));
    }

    return store;
}
