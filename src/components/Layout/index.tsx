import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ListIcon from "@material-ui/icons/List";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Routes } from "components/App";

import useWidth from "hooks/useWidth";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            root: {
                display: "flex",
                flexDirection: "column",
                height: "100%",
                overflow: "auto",
            },
            bottomNavigation: {
                position: "absolute",
                bottom: 0,
                width: "100%",
            },
        }),
    { name: "Layout" }
);

type Props = {};

const Layout: React.FC<Props> = ({ children }) => {
    const width = useWidth();
    const classes = useStyles();
    const history = useHistory();
    const match = useRouteMatch([Routes.CART, Routes.CATALOG]);
    const [page, setPage] = useState(match ? match.path : Routes.CATALOG);

    useEffect(() => {
        history.push(page);
    }, [page, history]);

    function goToPage(_: React.ChangeEvent<{}>, newPage: Routes) {
        setPage(newPage);
    }

    return (
        <main className={classes.root}>
            {children}
            {width === "xs" && (
                <BottomNavigation className={classes.bottomNavigation} value={page} onChange={goToPage}>
                    <BottomNavigationAction value={Routes.CATALOG} icon={<ListIcon />} />
                    <BottomNavigationAction value={Routes.CART} icon={<ShoppingCartIcon />} />
                </BottomNavigation>
            )}
        </main>
    );
};

export default Layout;
