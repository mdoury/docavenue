import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { deepOrange, teal } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import App from "components/App";

import * as serviceWorker from "./serviceWorker";

import configureStore from "configureStore";

import "./index.css";

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
            <BrowserRouter>
                <CssBaseline />
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
