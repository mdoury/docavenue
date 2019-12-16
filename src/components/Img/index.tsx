import React, { ImgHTMLAttributes, useState } from "react";

import Spinner from "assets/Spinner.svg";

import "./Img.scss";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
    isCritical?: boolean;
    aspectRatio: number;
    wrapperClassName?: string;
};

const Img: React.FC<Props> = ({ aspectRatio, className, wrapperClassName, isCritical, alt = "", ...imgAttributes }) => {
    const [loaded, setLoaded] = useState(false);

    function onLoad() {
        setLoaded(true);
    }

    const imgClassName = `Img ${className || ""} ${!isCritical ? "fade-in" : ""}`;
    const imgWrapperClassName = `Img-wrapper ${wrapperClassName || ""}`;
    const placeholderStyle = { paddingTop: `${aspectRatio * 100}%` };

    return (
        <div className={imgWrapperClassName}>
            <div className="Img-placeholder" style={placeholderStyle} />
            {!loaded && !isCritical && <img className="Img-spinner" src={Spinner} alt="spinner" />}
            <img className={imgClassName} alt={alt} onLoad={onLoad} {...imgAttributes} />
        </div>
    );
};

export default Img;
