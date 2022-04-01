import Lottie from "react-lottie";
import empty from "./empty.json";

export const EmptyPageHolder = ({ size = 250 }) => {
    return (
        <Lottie
            isClickToPauseDisabled
            options={{
                loop: true,
                autoplay: true,
                animationData: empty,
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                },
            }}
            height={size}
            width={size}
            speed={1.5}
        />
    );
};
