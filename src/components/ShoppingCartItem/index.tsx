import React from "react";
import { useDispatch } from "react-redux";

import { createStyles, IconButton, makeStyles, TextField, Theme } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import Img from "components/Img";

import { ICatalogItem } from "reducers/catalogReducer";
import { ShoppingCartActions } from "reducers/shoppingCartReducer";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            root: {
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                padding: theme.spacing(1),
            },
            thumbnail: {
                borderRadius: "50%",
            },
            thumbnailWrapper: {
                minWidth: 48,
            },
            title: {
                display: "inline-flex",
                alignItems: "center",
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
                marginRight: "auto",
            },
        }),
    { name: "ShoppingCartItem" }
);

type Props = {
    item: ICatalogItem;
    quantity: number;
};

const ShoppingCartItem: React.FC<Props> = ({ item, quantity }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    function removeFromCart() {
        dispatch(ShoppingCartActions.remove(item.id));
    }

    function updateQuantity(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch(ShoppingCartActions.updateItemQuantity({ id: item.id, quantity: event.target.valueAsNumber }));
    }

    return (
        <div className={classes.root}>
            <Img
                src={item.thumbnailUrl}
                alt={item.title}
                aspectRatio={1}
                isCritical={true}
                className={classes.thumbnail}
                wrapperClassName={classes.thumbnailWrapper}
            />
            <span className={classes.title}>{item.title}</span>
            <TextField label="Quantity" name="quantity" type="number" value={quantity} onChange={updateQuantity} inputProps={{ min: 1 }} />
            <IconButton color="primary" onClick={removeFromCart}>
                <DeleteIcon />
            </IconButton>
        </div>
    );
};

export default ShoppingCartItem;
