import React from "react";
import { Route, Switch } from "react-router-dom";

import Catalog from "components/Catalog";
import Layout from "components/Layout";
import ShoppingCart from "components/ShoppingCart";

export enum Routes {
    CATALOG = "",
    CART = "/cart",
}

const App: React.FC = () => {
    return (
        <Layout>
            <Switch>
                <Route path={Routes.CART} component={() => <ShoppingCart />} />
                <Route path={Routes.CATALOG} component={() => <Catalog catalogUrl="https://jsonplaceholder.typicode.com/photos" />} />
            </Switch>
        </Layout>
    );
};

export default App;
