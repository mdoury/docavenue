import React from "react";

import Catalog from "components/Catalog";
import CatalogPagination from "components/CatalogNavigation";

import "./App.scss";

const App: React.FC = () => {
    return (
        <>
            <CatalogPagination />
            <Catalog catalogUrl="https://jsonplaceholder.typicode.com/photos" />
            <CatalogPagination />
        </>
    );
};

export default App;
