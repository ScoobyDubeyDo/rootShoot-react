import { Link } from "react-router-dom";
import { useWishlistAndCart } from "../../../../context";

export const ItemDetails = () => {
    const { cart } = useWishlistAndCart();
    return (
        <div className="card">
            <div className="card-header text-align-center">
                <h3 className="card-title heading-5 ">
                    ITEM DETAILS
                    {` (${cart.length} ${
                        cart.length > 1 ? "products" : "product"
                    })`}
                </h3>
            </div>
            <div className="divider-dark-horizontal" />
            <div className="card-body">
                <div className="card-text text-gutterBottom">
                    <div className="heading-6 cart-price-pair">
                        <p>Name</p>
                        <p>Price</p>
                    </div>
                    {cart.map(item => (
                        <div key={item._id} className="cart-price-pair">
                            <p>
                                {item.name}
                                <span className="text-subtitle">
                                    {`×${item.qty}`}
                                </span>
                            </p>
                            <p>{`₹ ${item.price * item.qty}`}</p>
                        </div>
                    ))}
                </div>
                <div className="divider-dark-horizontal" />
                <div className="card-actions">
                    <Link
                        to="price-details"
                        className="btn-filled-green rootShoot-link-reset rootShoot-full-width text-align-center">
                        proceed to Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
};
