import axios from "axios";
import { formValidate } from "./formValidate";

export const userSignin = async (
	e,
	email,
	password,
	setFieldErrors,
	setCurrentUser,
	navigate,
	setIsLoading,
	setToastMessage,
	location
) => {
	e.preventDefault();
	if (formValidate(email, password, setFieldErrors)) {
		(async () => {
			try {
				setIsLoading(true);
				const res = await axios.post("/api/auth/login", {
					email: email,
					password: password,
				});
				if (res.status === 200) {
					setCurrentUser({
						encodedToken: res.data.encodedToken,
						...res.data.foundUser,
					});
					localStorage.setItem("token", res.data.encodedToken);
					localStorage.setItem(
						"fullName",
						res.data.foundUser.fullName
					);
					localStorage.setItem("email", res.data.foundUser.email);
					navigate(location || "/", { replace: true });
					setToastMessage({
						type: "blue",
						text: "Signed in",
					});
				}
			} catch (err) {
				setToastMessage({
					type: "red",
					text: err.message,
				});
			} finally {
				setIsLoading(false);
			}
		})();
	}
};
