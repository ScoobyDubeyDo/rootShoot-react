import { addToCartOrWishlist } from "./addToCartOrWishlist";
import { cartItemQtyUpdate } from "./cartItemQtyUpdate";
import { deleteFromCartOrWishlist } from "./deleteFromCartOrWishlist";
import { displayRazorpay } from "./paymentGateway";

export const buyNow = (
	cart,
	productDetails,
	setCart,
	setIsLoading,
	setToastMessage,
	navigate,
	currentUser
) => {
	if (cart.some((ele) => ele._id === productDetails._id)) {
		cartItemQtyUpdate(
			"increment",
			productDetails._id,
			setCart,
			setIsLoading,
			setToastMessage
		);
	} else {
		addToCartOrWishlist(
			"cart",
			productDetails,
			setCart,
			setIsLoading,
			setToastMessage
		);
	}
	navigate("/cart/price-details");
	displayRazorpay(
		currentUser,
		productDetails.price,
		navigate,
		() => {
			deleteFromCartOrWishlist(
				"cart",
				productDetails,
				setCart,
				setIsLoading,
				setToastMessage
			);
		},
		() => {},
		setToastMessage
	);
};
