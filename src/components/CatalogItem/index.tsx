import React from "react";

import Img from "components/Img";

import { ICatalogItem } from "reducers/catalogReducer";

import "./CatalogItem.scss";

type Props = {
    item: ICatalogItem;
};

const CatalogItem: React.FC<Props> = ({ item }) => {
    return (
        <div className="CatalogItem">
            <Img className="CatalogItem-thumbnail" src={item.thumbnailUrl} aspectRatio={1} />
            <span className="CatalogItem-title">{item.title}</span>
        </div>
    );
};

export default CatalogItem;
