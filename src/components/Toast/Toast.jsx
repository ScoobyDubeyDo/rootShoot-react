import { useLoaderOrToast } from "../../context";
import "./toast.css";

export const Toast = ({ type, text }) => {
	const { setToastMessage } = useLoaderOrToast();
	setTimeout(() => {
		setToastMessage({
			text: "",
			type: "",
		});
	}, 2500);
	return (
		<div className={`toast-center-${type}`}>
			<p className="toast-text">{text}</p>
		</div>
	);
};
