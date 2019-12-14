import React from "react";
import Catalog from "components/Catalog";
import "./App.scss";

const App: React.FC = () => {
    return <Catalog catalogUrl="https://jsonplaceholder.typicode.com/photos" />;
};

export default App;
