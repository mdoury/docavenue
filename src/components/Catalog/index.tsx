import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import CatalogItem from "components/CatalogItem";
import CatalogPagination from "components/CatalogPagination";
import Loader from "components/Loader";

import {
    CatalogStatus, CatalogThunks, getPaginatedItems, getStatus
} from "reducers/catalogReducer";

type Props = {
    catalogUrl: string;
};

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            root: {
                display: "flex",
                flexDirection: "column",
                flex: "1 0 auto",
            },
            wrapper: {
                padding: theme.spacing(2),
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gridGap: theme.spacing(2),
                [theme.breakpoints.down("xs")]: {
                    display: "flex",
                    flexDirection: "column",
                    "& > * + *": {
                        marginTop: theme.spacing(2),
                    },
                },
            },
            loader: {
                margin: "auto",
            },
        }),
    { name: "Catalog" }
);

const Catalog: React.FC<Props> = ({ catalogUrl }) => {
    const dispatch = useDispatch();
    const items = useSelector(getPaginatedItems);
    const catalogStatus = useSelector(getStatus);
    const classes = useStyles();

    useEffect(() => {
        if (catalogStatus !== CatalogStatus.Loading && catalogStatus !== CatalogStatus.Loaded) {
            dispatch(CatalogThunks.load(catalogUrl));
        }
    }, [dispatch, catalogUrl, catalogStatus]);

    if (catalogStatus !== CatalogStatus.Loaded) {
        return <Loader className={classes.loader} />;
    }

    return (
        <div className={classes.root}>
            <CatalogPagination />
            <div className={classes.wrapper}>
                {items.map(item => (
                    <CatalogItem key={`CatalogItem-${item.id}`} item={item} />
                ))}
            </div>
            <CatalogPagination />
        </div>
    );
};

export default Catalog;
