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
            <hr />
            <div className="card-body">
                <div className="card-text text-gutterBottom">
                    <div className="heading-6 cart-price-pair">
                        <p>Name</p>
                        <p>Price</p>
                    </div>
                    {cart.map((item) => (
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
                <hr />
                <div className="card-actions">
                    <Link
                        to="price-details"
                        className="btn-filled-green rootShoot-link-reset rootShoot-full-width text-align-center"
                    >
                        proceed to Check Out
                    </Link>
                    <hr />
                    <button className="btn-outlined-green rootShoot-link-reset rootShoot-full-width text-align-center">
                        share your cart
                    </button>
                </div>
            </div>
        </div>
    );
};
