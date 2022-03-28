import axios from "axios";

export const cartItemQtyUpdate = async (
    action,
    productId,
    setCart,
    setIsLoading
) => {
    try {
        setIsLoading(true);
        const res = await axios.post(
            `/api/user/cart/${productId}`,
            {
                action: {
                    type: action,
                },
            },
            {
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            }
        );
        if (res.status === 200) {
            setCart(res.data.cart);
        }
    } catch (err) {
        console.log(err, `Error while adding the product to ${action}`);
    } finally {
        setIsLoading(false);
    }
};
