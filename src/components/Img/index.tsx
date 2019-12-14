import React, { ImgHTMLAttributes, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import "./Img.scss";
import Spinner from "assets/Spinner.svg";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
    isCritical?: boolean;
    aspectRatio: number;
};

const Img: React.FC<Props> = ({ aspectRatio, className, isCritical, alt = "", ...imgAttributes }) => {
    const [renderImage, setRenderImage] = useState(isCritical);
    const [loaded, setLoaded] = useState(false);

    const loadImage = (visible: boolean) => {
        if (visible) {
            setRenderImage(true);
        }
    };

    const wrapper = (
        <div className="Img-wrapper">
            <div className="Img-placeholder" style={{ paddingTop: `${aspectRatio * 100}%` }}></div>
            {!loaded && <img className="Img-spinner" src={Spinner} alt="spinner" />}
            {renderImage && <img className={`Img ${className}`} alt={alt} onLoad={() => setLoaded(true)} {...imgAttributes} />}
        </div>
    );

    if (renderImage) {
        return wrapper;
    } else {
        return (
            <VisibilitySensor active={!renderImage} onChange={loadImage} partialVisibility>
                {wrapper}
            </VisibilitySensor>
        );
    }
};

export default Img;
