import axios from "axios";

export const addToCartOrWishlist = async (
	type,
	product,
	setType,
	setIsLoading,
	setToastMessage
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
			setToastMessage({
				type: "green",
				text: `Added the plant to ${type}`,
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
