import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { CatalogActions, getCurrentPage } from "reducers/catalogReducer";

type Props = {};

const CatalogPagination: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(getCurrentPage);

    function onNext() {
        dispatch(CatalogActions.nextPage());
    }

    function onPrevious() {
        dispatch(CatalogActions.previousPage());
    }

    return (
        <div className="CatalogPagination">
            <button onClick={onPrevious}>Previous</button>
            {currentPage}
            <button onClick={onNext}>Next</button>
        </div>
    );
};

export default CatalogPagination;
