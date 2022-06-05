import { Outlet } from "react-router-dom";
import { useWishlistAndCart } from "../../context";
import { CardLayout, CartWishCard, EmptyPageHolder } from "../components";
import "./cart.css";

export const Cart = () => {
	const { cart } = useWishlistAndCart();

	return (
		<>
			<h2 className="heading-3 text-align-center text-gutterBottom">
				My barrow
			</h2>
			{cart.length > 0 ? (
				<div className="cart">
					<CardLayout>
						{cart.map((item) => (
							<CartWishCard
								cardType="cart"
								key={item._id}
								product={item}
							/>
						))}
					</CardLayout>

					<section className="cart-bill text-align-center">
						<Outlet />
					</section>
				</div>
			) : (
				<EmptyPageHolder />
			)}
		</>
	);
};
