import axios from "axios";

export const addToWishlist = async (product, setWishlist, setIsLoading) => {
    try {
        setIsLoading(true);
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
            setIsLoading(false);
        }
    } catch (err) {
        console.log(err, "Error while adding the product to wishlist");
    }
};
