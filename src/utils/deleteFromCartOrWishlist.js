import axios from "axios";

export const deleteFromCartOrWishlist = async (
    type,
    product,
    setType,
    setIsLoading
) => {
    try {
        setIsLoading(true);
        const res = await axios.delete(`/api/user/${type}/${product._id}`, {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        });
        if (res.status === 200) {
            setType(res.data[type]);
        }
    } catch (err) {
        console.log(err, `Error while deleting the product from ${type}`);
    } finally {
        setIsLoading(false);
    }
};
