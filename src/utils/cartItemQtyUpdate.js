import axios from "axios";

export const cartItemQtyUpdate = async (
	action,
	productId,
	setCart,
	setIsLoading,
	setToastMessage
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
		setToastMessage({
			type: "red",
			text: err.message,
		});
	} finally {
		setIsLoading(false);
	}
};
