import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CatalogStatus, CatalogThunks, ICatalogItem } from "reducers/catalogReducer";
import Loader from "components/Loader";
import CatalogItem from "components/CatalogItem";
import { RootState } from "reducers";
import "./Catalog.scss";

type Props = {
    catalogUrl: string;
};

const Catalog: React.FC<Props> = ({ catalogUrl }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CatalogThunks.load(catalogUrl));
    }, [dispatch, catalogUrl]);

    const catalogItems = useSelector<RootState, ICatalogItem[]>(state => state.catalogReducer.items);
    const catalogStatus = useSelector<RootState, CatalogStatus>(state => state.catalogReducer.status);

    if (catalogStatus === CatalogStatus.Loading) {
        return <Loader />;
    }

    return (
        <div className="Catalog">
            <div className="Catalog-items">
                {catalogItems.map(item => (
                    <CatalogItem key={`CatalogItem-${item.id}`} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Catalog;
