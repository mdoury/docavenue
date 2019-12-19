import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

import debounce from "lodash.debounce";
import { CatalogActions } from "reducers/catalogReducer";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            root: {
                color: theme.palette.primary.contrastText,
                height: 48,
                [theme.breakpoints.down("xs")]: {
                    height: 32,
                },
            },
            icon: {
                color: theme.palette.primary.contrastText,
            },
        }),
    { name: "Search" }
);

type Props = {};

const Search: React.FC<Props> = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(
        debounce(() => {
            dispatch(CatalogActions.search(search));
        }, 500),
        [dispatch, search]
    );

    function updateSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value);
    }

    return (
        <OutlinedInput
            className={classes.root}
            // disableUnderline={true}
            placeholder="Search"
            value={search}
            onChange={updateSearch}
            labelWidth={0}
            endAdornment={
                <InputAdornment position="end">
                    <SearchIcon className={classes.icon} />
                </InputAdornment>
            }
        />
    );
};

export default Search;
