export const userSignout = (callBack) => {
    if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
        callBack({});
    }
};
