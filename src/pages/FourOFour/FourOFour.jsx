import Lottie from "react-lottie";
import pageNotFound from "./404.json";
import "./fourOFour.css";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pageNotFound,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

export const FourOFour = () => {
    return (
        <div className="not-found">
            <div className="text-404">
                <p className="heading-1">Oh My...</p>
                <p className="heading-5">
                    Looks like this page can't be found. Maybe it was moved or
                    renamed
                </p>
            </div>
            <div>
                <Lottie
                    isClickToPauseDisabled
                    options={defaultOptions}
                    height={300}
                    width={300}
                />
            </div>
        </div>
    );
};
