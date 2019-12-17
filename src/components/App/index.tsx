import React from "react";

import Catalog from "components/Catalog";
import CatalogPagination from "components/CatalogNavigation";
import ShoppingCart from "components/ShoppingCart";

import "./App.scss";

const App: React.FC = () => {
    return (
        <>
            <CatalogPagination />
            <Catalog catalogUrl="https://jsonplaceholder.typicode.com/photos" />
            <CatalogPagination />
            <ShoppingCart />
        </>
    );
};

export default App;
