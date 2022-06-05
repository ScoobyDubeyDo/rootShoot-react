export const userSignout = callBack => {
    if (localStorage.getItem("token")) {
        localStorage.clear();
        callBack({});
    }
};
