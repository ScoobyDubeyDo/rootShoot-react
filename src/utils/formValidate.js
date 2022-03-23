export const formValidate = (email, password, setErrors, name) => {
    let temp = {};
    temp.email = email
        ? /^.+@.+.\.+.+./.test(email)
            ? ""
            : "Email is not valid"
        : "Provide a Email id";

    temp.password = password
        ? /.{8,}$/.test(password)
            ? ""
            : "Password must has atleast 8 characters"
        : "Provide a password";

    name && (temp.name = name ? "" : "Provide your Name");

    setErrors({
        ...temp,
    });

    return Object.values(temp).every((x) => x === "");
};
