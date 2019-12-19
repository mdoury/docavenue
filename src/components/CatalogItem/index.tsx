import React from "react";
import { useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import Img from "components/Img";

import { ICatalogItem } from "reducers/catalogReducer";
import { ShoppingCartActions } from "reducers/shoppingCartReducer";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            root: {
                display: "flex",
                flexDirection: "column",
                position: "relative",
            },
            clickableArea: {
                flex: "1 1 auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "unset",
            },
            title: { ...theme.typography.h5, margin: 0 },
            actions: {
                display: "flex",
            },
            addToCartBtn: {
                display: "flex",
                flex: "1 0 auto",
                padding: theme.spacing(1),
            },
            addToCartBtnIcon: {
                borderColor: theme.palette.primary.contrastText,
                borderRadius: 4,
                borderStyle: "solid",
                borderWidth: 1,
                padding: 2,
            },
            addToCartBtnLabel: {
                margin: "0 auto",
            },
        }),
    { name: "CatalogItem" }
);

type Props = {
    item: ICatalogItem;
};

const CatalogItem: React.FC<Props> = ({ item }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    function addToCart() {
        dispatch(ShoppingCartActions.addItem(item.id));
    }

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.clickableArea}>
                <CardMedia>
                    <Img src={item.url} aspectRatio={1} />
                </CardMedia>
                <CardContent>
                    <h3 className={classes.title}>{item.title}</h3>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions}>
                <Button className={classes.addToCartBtn} variant="contained" color="primary" onClick={addToCart}>
                    <AddShoppingCartIcon className={classes.addToCartBtnIcon} />
                    <span className={classes.addToCartBtnLabel}>ADD TO CART</span>
                </Button>
            </CardActions>
        </Card>
    );
};

export default CatalogItem;
