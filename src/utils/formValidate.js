export const formValidate = (emailRef, passwordRef, setErrors, nameRef) => {
    let temp = {};
    temp.email = emailRef.current.value
        ? /^.+@.+.\.+.+./.test(emailRef.current.value)
            ? ""
            : "Email is not valid"
        : "Provide a Email id";

    temp.password = passwordRef.current.value
        ? /.{8,}$/.test(passwordRef.current.value)
            ? ""
            : "Password must has atleast 8 characters"
        : "Provide a password";

    nameRef && (temp.name = nameRef.current.value ? "" : "Provide your Name");

    setErrors({
        ...temp,
    });

    return Object.values(temp).every((x) => x === "");
};
