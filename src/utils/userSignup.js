import { formValidate } from "./formValidate";
import axios from "axios";

export const userSignup = async (
    e,
    nameRef,
    emailRef,
    passwordRef,
    setFieldErrors,
    setCurrentUser,
    navigate
) => {
    e.preventDefault();
    if (formValidate(emailRef, passwordRef, setFieldErrors, nameRef)) {
        (async () => {
            try {
                const res = await axios.post("/api/auth/signup", {
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                    name: nameRef.current.value,
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
            }
        })();
    }
};
