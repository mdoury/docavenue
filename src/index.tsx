import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { deepOrange, teal } from "@material-ui/core/colors";

import App from "components/App";

import * as serviceWorker from "./serviceWorker";

import configureStore from "configureStore";

import "./index.scss";

const theme = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: teal[500],
        },
        secondary: {
            main: deepOrange[500],
        },
    },
});

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
