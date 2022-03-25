import axios from "axios";

export const addToCartOrWishlist = async (
    type,
    product,
    setType,
    setIsLoading
) => {
    try {
        setIsLoading(true);
        const res = await axios.post(
            `/api/user/${type}`,
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
            setType(res.data[type]);
        }
    } catch (err) {
        console.log(err, `Error while adding the product to ${type}`);
    } finally {
        setIsLoading(false);
    }
};
