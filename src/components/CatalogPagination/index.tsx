import React from "react";
import { useDispatch, useSelector } from "react-redux";

import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

import {
    CatalogActions, getCurrentPage, getItemsPerPage, getPageCount, getPaginationText
} from "reducers/catalogReducer";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            root: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: theme.spacing(2),
                [theme.breakpoints.down("xs")]: {
                    flexDirection: "column",
                },
            },
            info: {
                display: "flex",
                flexDirection: "row",
            },
            text: {
                display: "flex",
                alignItems: "center",
            },
            select: {
                marginLeft: theme.spacing(1),
                marginRight: theme.spacing(1),
            },
            actions: {
                display: "flex",
                flexDirection: "row",
                [theme.breakpoints.down("xs")]: {
                    marginLeft: "auto",
                },
            },
        }),
    { name: "CatalogPagination" }
);

type Props = {};

const CatalogPagination: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(getCurrentPage);
    const itemsPerPage = useSelector(getItemsPerPage);
    const pageCount = useSelector(getPageCount);
    const paginationText = useSelector(getPaginationText);
    const classes = useStyles();

    function setItemsPerPage(event: React.ChangeEvent<{ name?: string; value: unknown }>) {
        const itemsPerPage = event.target.value as number;
        if (itemsPerPage > 0) {
            dispatch(CatalogActions.setItemsPerPage(itemsPerPage));
            dispatch(CatalogActions.firstPage());
        }
    }

    function goToFirstPage() {
        dispatch(CatalogActions.firstPage());
    }

    function goToPreviousPage() {
        dispatch(CatalogActions.previousPage());
    }

    function goToNextPage() {
        dispatch(CatalogActions.nextPage());
    }

    function goToLastPage() {
        dispatch(CatalogActions.lastPage());
    }

    return (
        <div className={classes.root}>
            <div className={classes.info}>
                <InputLabel className={classes.text} id="catalog-pagination-select-label">
                    Items per page
                </InputLabel>
                <Select
                    className={classes.select}
                    native
                    labelId="catalog-pagination-select-label"
                    value={itemsPerPage}
                    onChange={setItemsPerPage}
                >
                    <option value={5}>5</option>
                    <option value={15}>15</option>
                    <option value={50}>50</option>
                </Select>
                <div className={classes.text}>{paginationText}</div>
            </div>
            <div className={classes.actions}>
                <IconButton onClick={goToFirstPage} disabled={currentPage <= 1} aria-label="first page">
                    <FirstPageIcon />
                </IconButton>
                <IconButton onClick={goToPreviousPage} disabled={currentPage <= 1} aria-label="previous page">
                    <KeyboardArrowLeft />
                </IconButton>
                <IconButton onClick={goToNextPage} disabled={currentPage >= pageCount - 1} aria-label="next page">
                    <KeyboardArrowRight />
                </IconButton>
                <IconButton onClick={goToLastPage} disabled={currentPage >= pageCount - 1} aria-label="last page">
                    <LastPageIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default CatalogPagination;
