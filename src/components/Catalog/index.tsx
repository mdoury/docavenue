import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CatalogItem from "components/CatalogItem";
import Loader from "components/Loader";

import {
    CatalogStatus, CatalogThunks, getPaginatedItems, getStatus
} from "reducers/catalogReducer";

import "./Catalog.scss";

type Props = {
    catalogUrl: string;
};

const Catalog: React.FC<Props> = ({ catalogUrl }) => {
    const dispatch = useDispatch();
    const paginatedItems = useSelector(getPaginatedItems);
    const catalogStatus = useSelector(getStatus);

    useEffect(() => {
        dispatch(CatalogThunks.load(catalogUrl));
    }, [dispatch, catalogUrl]);

    if (catalogStatus === CatalogStatus.Loading) {
        return <Loader />;
    }

    return (
        <div className="Catalog">
            <div className="Catalog-items">
                {paginatedItems.map(item => (
                    <CatalogItem key={`CatalogItem-${item.id}`} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Catalog;
