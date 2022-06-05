import axios from "axios";

export const deleteFromCartOrWishlist = async (
	type,
	product,
	setType,
	setIsLoading,
	setToastMessage
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
			setToastMessage({
				type: "green",
				text: `Product removed from ${type}`,
			});
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
