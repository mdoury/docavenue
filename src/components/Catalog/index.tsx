import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createStyles, makeStyles, Theme } from "@material-ui/core";

import CatalogItem from "components/CatalogItem";
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
                padding: theme.spacing(2),
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gridGap: theme.spacing(2),
                [theme.breakpoints.down("xs")]: {
                    display: "flex",
                    flexDirection: "column",
                    "&>*+*": {
                        marginTop: theme.spacing(2),
                    },
                },
            },
        }),
    { name: "Catalog" }
);

const Catalog: React.FC<Props> = ({ catalogUrl }) => {
    const dispatch = useDispatch();
    const paginatedItems = useSelector(getPaginatedItems);
    const catalogStatus = useSelector(getStatus);
    const classes = useStyles();

    useEffect(() => {
        dispatch(CatalogThunks.load(catalogUrl));
    }, [dispatch, catalogUrl]);

    if (catalogStatus === CatalogStatus.Loading) {
        return <Loader />;
    }

    return (
        <div className={classes.root}>
            {paginatedItems.map(item => (
                <CatalogItem key={`CatalogItem-${item.id}`} item={item} />
            ))}
        </div>
    );
};

export default Catalog;
