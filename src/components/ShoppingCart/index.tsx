import React from "react";
import { useSelector } from "react-redux";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import ShoppingCartItem from "components/ShoppingCartItem";

import {
    getShoppingCartCatalogItems, getShoppingCartQuantityMap
} from "reducers/shoppingCartReducer";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            root: {
                display: "flex",
                flexDirection: "column",
                padding: theme.spacing(2),
                width: "100%",
                "& > * + *": {
                    marginTop: theme.spacing(2),
                },
            },
        }),
    { name: "ShoppingCart" }
);

type Props = {};

const ShoppingCart: React.FC<Props> = () => {
    const shoppingCartItems = useSelector(getShoppingCartCatalogItems);
    const quantityMap = useSelector(getShoppingCartQuantityMap);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {shoppingCartItems.map(item => (
                <ShoppingCartItem key={`ShoppingCartItem-${item.id}`} item={item} quantity={quantityMap[item.id]} />
            ))}
        </div>
    );
};

export default React.memo(ShoppingCart);
