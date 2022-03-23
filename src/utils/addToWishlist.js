import axios from "axios";

export const addToWishlist = async (product, setWishlist) => {
    try {
        const res = await axios.post(
            "/api/user/wishlist",
            {
                product,
            },
            {
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            }
        );
        if (res.status === 201) {
            setWishlist(res.data.wishlist);
        }
    } catch (err) {
        console.log(err, "Error while adding the product to wishlist");
    }
};
