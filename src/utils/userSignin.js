import { formValidate } from "./formValidate";
import axios from "axios";

export const userSignin = async (
    e,
    emailRef,
    passwordRef,
    setFieldErrors,
    setCurrentUser,
    navigate
) => {
    e.preventDefault();
    if (formValidate(emailRef, passwordRef, setFieldErrors)) {
        (async () => {
            try {
                const res = await axios.post("/api/auth/login", {
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                });
                if (res.status === 200) {
                    setCurrentUser({
                        encodedToken: res.data.encodedToken,
                        ...res.data.foundUser,
                    });
                    // localStorage.setItem("token", res.data.encodedToken);
                    navigate("/");
                    console.log(res);
                }
            } catch (err) {
                console.log("Error while logging in", err);
            }
        })();
    }
};
