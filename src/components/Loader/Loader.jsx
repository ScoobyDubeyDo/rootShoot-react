import loader from "./loader.json";
import Lottie from "react-lottie";
import "./loader.css";
import { useLockBodyScroll } from "../../hooks";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

export const Loader = () => {
    useLockBodyScroll();

    return (
        <div className="loader">
            <Lottie
                isClickToPauseDisabled
                options={defaultOptions}
                height={250}
                width={250}
                speed={2.5}
            />
        </div>
    );
};
