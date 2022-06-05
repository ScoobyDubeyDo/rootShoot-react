import Lottie from "react-lottie";
import { useLockBodyScroll } from "../../hooks";
import loader from "./loader.json";
import "./spinner.css";

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: loader,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

export const Spinner = () => {
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
