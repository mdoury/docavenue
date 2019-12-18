import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import Catalog from "components/Catalog";
import CatalogPagination from "components/CatalogPagination";
import ShoppingCart from "components/ShoppingCart";

const App: React.FC = () => {
    return (
        <>
            <CssBaseline />
            <CatalogPagination />
            <Catalog catalogUrl="https://jsonplaceholder.typicode.com/photos" />
            <CatalogPagination />
            <ShoppingCart />
        </>
    );
};

export default App;
