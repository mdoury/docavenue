import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";

import { IconButton } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import ListIcon from "@material-ui/icons/List";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Routes } from "components/App";
import Search from "components/Search";

import useWidth from "hooks/useWidth";

import { getShoppingCartItemsCount } from "reducers/shoppingCartReducer";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            root: {
                display: "flex",
                flexDirection: "column",
                height: "100%",
                overflow: "auto",
            },
            appBar: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: theme.spacing(2),
                position: "sticky",
                top: 0,
            },
            actions: {
                display: "flex",
                "& > * + *": {
                    marginLeft: theme.spacing(2),
                },
            },
            pageTitle: {
                ...theme.typography.h5,
                margin: "auto 0",
            },
            bottomNavigation: {
                position: "absolute",
                bottom: 0,
                width: "100%",
            },
            icon: {
                color: theme.palette.primary.contrastText,
            },
        }),
    { name: "Layout" }
);

type Props = {};

const ShoppingCartIconWithBadge: React.FC<{ itemsInCart: number; iconClassName?: string }> = ({ itemsInCart, iconClassName }) => (
    <Badge badgeContent={itemsInCart} color="secondary">
        <ShoppingCartIcon className={iconClassName || ""} />
    </Badge>
);

const Layout: React.FC<Props> = ({ children }) => {
    const width = useWidth();
    const classes = useStyles();
    const history = useHistory();
    const match = useRouteMatch([Routes.CART, Routes.CATALOG]);
    const [page, setPage] = useState(match ? match.path : Routes.CATALOG);
    const itemsInCart = useSelector(getShoppingCartItemsCount);

    useEffect(() => {
        history.push(page);
    }, [page, history]);

    function goToPage(_: React.ChangeEvent<{}>, newPage: Routes) {
        setPage(newPage);
    }

    return (
        <main className={classes.root}>
            <AppBar className={classes.appBar}>
                {page === Routes.CATALOG && (
                    <>
                        <h1 className={classes.pageTitle}>Catalog</h1>
                        <div className={classes.actions}>
                            <Search />
                            {width !== "xs" && (
                                <IconButton
                                    onClick={() => {
                                        setPage(Routes.CART);
                                    }}
                                >
                                    <ShoppingCartIconWithBadge itemsInCart={itemsInCart} iconClassName={classes.icon} />
                                </IconButton>
                            )}
                        </div>
                    </>
                )}
                {page === Routes.CART && (
                    <>
                        <h1 className={classes.pageTitle}>Shopping Cart</h1>
                        <div className={classes.actions}>
                            {width !== "xs" && (
                                <IconButton
                                    onClick={() => {
                                        setPage(Routes.CATALOG);
                                    }}
                                >
                                    <CloseIcon className={classes.icon} />
                                </IconButton>
                            )}
                        </div>
                    </>
                )}
            </AppBar>
            {children}
            {width === "xs" && (
                <BottomNavigation className={classes.bottomNavigation} value={page} onChange={goToPage}>
                    <BottomNavigationAction value={Routes.CATALOG} icon={<ListIcon />} />
                    <BottomNavigationAction value={Routes.CART} icon={<ShoppingCartIconWithBadge itemsInCart={itemsInCart} />} />
                </BottomNavigation>
            )}
        </main>
    );
};

export default Layout;
