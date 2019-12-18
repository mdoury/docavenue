import React, { ImgHTMLAttributes, useState } from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core";

import Spinner from "assets/Spinner.svg";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            root: {
                position: "relative",
                overflow: "hidden",
            },
            spinner: {
                position: "absolute",
                top: "25%",
                left: "25%",
                height: "50%",
                width: "50%",
            },
            image: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                "&.fade-in": {
                    animation: "fade-in 0.5s ease-in",
                },
            },
        }),
    { name: "Img" }
);

type Props = ImgHTMLAttributes<HTMLImageElement> & {
    isCritical?: boolean;
    aspectRatio: number;
    wrapperClassName?: string;
};

const Img: React.FC<Props> = ({ aspectRatio, className, wrapperClassName, isCritical, alt = "", ...imgAttributes }) => {
    const [loaded, setLoaded] = useState(false);
    const classes = useStyles();

    function onLoad() {
        setLoaded(true);
    }

    const imgClassName = `${classes.image} ${className || ""} ${!isCritical ? "fade-in" : ""}`;
    const imgWrapperClassName = `${classes.root} ${wrapperClassName || ""}`;
    const placeholderStyle = { paddingTop: `${aspectRatio * 100}%` };

    return (
        <div className={imgWrapperClassName}>
            <div style={placeholderStyle} />
            {!loaded && !isCritical && <img className={classes.spinner} src={Spinner} alt="spinner" />}
            <img className={imgClassName} alt={alt} onLoad={onLoad} {...imgAttributes} />
        </div>
    );
};

export default Img;
