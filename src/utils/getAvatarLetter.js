export const getAvatarLetter = (name) => {
    if (!!name) {
        if (!name.trim()) {
            return "";
        }
        let avatar = name.split(" ").filter((e) => e !== "");
        avatar = avatar[0][0] + (!!avatar[1] ? avatar[1][0] : "");
        avatar = avatar.toUpperCase();
        return avatar;
    }
};
