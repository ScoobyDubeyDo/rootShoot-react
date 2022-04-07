import { formValidate } from "./formValidate";
import axios from "axios";

export const userSignin = async (
    e,
    email,
    password,
    setFieldErrors,
    setCurrentUser,
    navigate,
    setIsLoading,
    setToastMessage
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
                    navigate("/");
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
