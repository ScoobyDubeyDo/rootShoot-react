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
    setIsLoading
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
                    navigate("/");
                }
            } catch (err) {
                console.log("Error while signing up", err);
            } finally {
                setIsLoading(false);
            }
        })();
    }
};
