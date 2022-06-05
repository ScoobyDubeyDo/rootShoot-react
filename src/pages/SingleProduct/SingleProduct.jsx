import { useEffect, useState } from "react";
import { BsBookmarkHeart, BsFillBookmarkHeartFill } from "react-icons/bs";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useAuth, useLoaderOrToast, useWishlistAndCart } from "../../context";
import {
	addToCartOrWishlist,
	buyNow,
	deleteFromCartOrWishlist,
} from "../../utils";
import "./singleProduct.css";

export const SingleProduct = () => {
	const { productId } = useParams();
	const { setIsLoading, setToastMessage } = useLoaderOrToast();
	const { currentUser } = useAuth();
	const navigate = useNavigate();
	const { wishlist, setWishlist, cart, setCart } = useWishlistAndCart();
	const location = useLocation();
	const [productDetails, setProductDetails] = useState({
		imgUrl: "",
		name: "",
		price: "",
		rating: "",
		type: [],
		prodDesc: [],
	});

	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				const res = await axios.get(`/api/products/${productId}`);
				if (res.status === 200) {
					setProductDetails(res.data.product);
				}
			} catch (err) {
				setToastMessage({
					type: "red",
					text: err.message,
				});
			} finally {
				setIsLoading(false);
			}
		})();
	}, [location.pathname, setIsLoading, setToastMessage, productId]);
	return (
		<div className="single-product">
			<img
				src={productDetails.imgUrl}
				alt={productDetails.name}
				className="responsive-image"
			/>
			<div>
				<h2 className="heading-4">{productDetails.name}</h2>
				<p className="text-body-sm rootShoot-full-width">
					{productDetails.type.toLocaleString()}
				</p>
				<div>
					<p className="heading-5">{`₹ ${productDetails.price}`}</p>
					{!wishlist.some((item) => item._id === productId) ? (
						<button
							className="icon-btn-green"
							onClick={() =>
								!currentUser?.encodedToken
									? navigate("/sign-in", {
											state: {
												from: location.pathname,
											},
									  })
									: addToCartOrWishlist(
											"wishlist",
											productDetails,
											setWishlist,
											setIsLoading,
											setToastMessage
									  )
							}>
							<BsBookmarkHeart />
						</button>
					) : (
						<button
							className="icon-btn-green"
							onClick={() =>
								deleteFromCartOrWishlist(
									"wishlist",
									productDetails,
									setWishlist,
									setIsLoading,
									setToastMessage
								)
							}>
							<BsFillBookmarkHeartFill />
						</button>
					)}
				</div>
				<div className="prod-desc">
					{productDetails.prodDesc.map((text) => (
						<p
							key={text}
							className="text-body-lg rootShoot-text-align-justify text-gutterBottom">
							{text}
						</p>
					))}
				</div>
				<button
					onClick={() => {
						buyNow(
							cart,
							productDetails,
							setCart,
							setIsLoading,
							setToastMessage,
							navigate,
							currentUser
						);
					}}
					className="btn-filled-green rootShoot-full-width text-gutterBottom">
					buy now
				</button>
				<button
					onClick={async (e) => {
						e.stopPropagation();
						if (currentUser?.encodedToken) {
							!cart.some((item) => item._id === productId)
								? addToCartOrWishlist(
										"cart",
										productDetails,
										setCart,
										setIsLoading,
										setToastMessage
								  )
								: navigate("/cart");
						} else
							navigate("/sign-in", {
								state: {
									from: location.pathname,
								},
							});
					}}
					className="btn-outlined-green rootShoot-full-width text-gutterBottom">
					{!cart.some((item) => item._id === productId)
						? "Add to cart"
						: "go to cart"}
				</button>
			</div>
		</div>
	);
};
