import React from "react";
import { useSelector } from "react-redux";

import ShoppingCartItem from "components/ShoppingCartItem";

import {
    getShoppingCartCatalogItems, getShoppingCartQuantityMap
} from "reducers/shoppingCartReducer";

import "./ShoppingCart.scss";

type Props = {};

const ShoppingCart: React.FC<Props> = () => {
    const shoppingCartItems = useSelector(getShoppingCartCatalogItems);
    const quantityMap = useSelector(getShoppingCartQuantityMap);

    return (
        <div className="ShoppingCart">
            {shoppingCartItems.map(item => (
                <ShoppingCartItem key={`ShoppingCartItem-${item.id}`} item={item} quantity={quantityMap[item.id]} />
            ))}
        </div>
    );
};

export default React.memo(ShoppingCart);
