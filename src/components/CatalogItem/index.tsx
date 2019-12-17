import React from "react";
import { useDispatch } from "react-redux";

import Img from "components/Img";

import { ICatalogItem } from "reducers/catalogReducer";
import { ShoppingCartActions } from "reducers/shoppingCartReducer";

import "./CatalogItem.scss";

type Props = {
    item: ICatalogItem;
};

const CatalogItem: React.FC<Props> = ({ item }) => {
    const dispatch = useDispatch();

    function addToCart() {
        dispatch(ShoppingCartActions.add(item.id));
    }

    return (
        <div className="CatalogItem">
            <Img wrapperClassName="CatalogItem-thumbnail" src={item.thumbnailUrl} aspectRatio={1} />
            <span className="CatalogItem-title">{item.title}</span>
            <button className="CatalogItem-addToCart" onClick={addToCart}>
                ADD TO CART
            </button>
        </div>
    );
};

export default CatalogItem;
