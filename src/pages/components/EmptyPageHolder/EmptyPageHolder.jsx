import Lottie from "react-lottie";
import empty from "./empty.json";

export const EmptyPageHolder = () => {
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
            height={250}
            width={250}
            speed={1.5}
        />
    );
};
