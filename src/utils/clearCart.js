import axios from "axios";

export const clearCart = (productsInCart, setCart, setToastMessage) => {
    productsInCart.forEach(async (product) => {
        try {
            const res = await axios.delete(`/api/user/cart/${product._id}`, {
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            });
            if (res.status === 200) {
                setCart(res.data.cart);
            }
        } catch (err) {
            setToastMessage({
                type: "red",
                text: err.message,
            });
        }
    });
};
