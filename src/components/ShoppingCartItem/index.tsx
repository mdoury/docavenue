import React from "react";
import { useDispatch } from "react-redux";

import Img from "components/Img";

import { ICatalogItem } from "reducers/catalogReducer";
import { ShoppingCartActions } from "reducers/shoppingCartReducer";

import "./ShoppingCartItem.scss";

type Props = {
    item: ICatalogItem;
    quantity: number;
};

const ShoppingCartItem: React.FC<Props> = ({ item, quantity }) => {
    const dispatch = useDispatch();

    function removeFromCart() {
        dispatch(ShoppingCartActions.remove(item.id));
    }

    return (
        <div className="ShoppingCartItem">
            <Img src={item.thumbnailUrl} alt={item.title} aspectRatio={1} isCritical={true} wrapperClassName="ShoppingCartItem-thumbnail" />
            <span>{item.title}</span>
            <span>{quantity}</span>
            <button onClick={removeFromCart}>REMOVE FROM CART</button>
        </div>
    );
};

export default ShoppingCartItem;
