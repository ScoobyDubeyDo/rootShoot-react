import { formValidate } from "./formValidate";
import axios from "axios";

export const userSignup = async (
    e,
    name,
    email,
    password,
    setFieldErrors,
    setCurrentUser,
    navigate,
    setIsLoading,
    setToastMessage
) => {
    e.preventDefault();
    if (formValidate(email, password, setFieldErrors, name)) {
        (async () => {
            try {
                setIsLoading(true);
                const res = await axios.post("/api/auth/signup", {
                    email: email,
                    password: password,
                    name: name,
                });
                if (res.status === 201) {
                    setCurrentUser({
                        encodedToken: res.data.encodedToken,
                        ...res.data.createdUser,
                    });
                    localStorage.setItem("token", res.data.encodedToken);
                    localStorage.setItem(
                        "fullName",
                        res.data.createdUser.fullName
                    );
                    localStorage.setItem("email", res.data.createdUser.email);
                    navigate("/");
                    setToastMessage({
                        type: "blue",
                        text: "Signed up",
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
