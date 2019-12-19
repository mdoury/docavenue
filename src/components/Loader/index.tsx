import React from "react";

import Spinner from "assets/Spinner.svg";

type Props = {
    className?: string;
};

const Loader: React.FC<Props> = ({ className }) => <img className={className || ""} src={Spinner} alt="loading..." />;

export default Loader;
