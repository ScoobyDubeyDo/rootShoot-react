import { useWishlistAndCart } from "../../../../context";
import { IoPricetagsSharp } from "react-icons/io5";
export const PriceDetails = () => {
    const { cart } = useWishlistAndCart();

    const totalPrice = cart.reduce(
        (acc, curr) => acc + curr.price * curr.qty,
        0
    );
    const discount = 99;
    const deliveryCharge = 199;
    const totalMRP = totalPrice - discount + deliveryCharge;

    return (
        <div className="card">
            <div className="card-header text-align-center">
                <h3 className="card-title heading-5">
                    PRICE DETAILS
                    {` (${cart.length} ${
                        cart.length > 1 ? "products" : "product"
                    })`}
                </h3>
            </div>
            <label>
                <IoPricetagsSharp />
                <input type="text" placeholder="Coupon Code" />
            </label>

            <hr />
            <div className="card-body">
                <div className="card-text text-gutterBottom">
                    <div className="cart-price-pair">
                        <p>Total MRP</p>
                        <p>{`₹ ${totalPrice}`}</p>
                    </div>
                    <div className="cart-price-pair">
                        <p>Discount</p>
                        <p>{`₹ ${discount}`}</p>
                    </div>
                    <div className="cart-price-pair">
                        <p>Delivery Charge</p>
                        <p>₹ 199</p>
                    </div>
                    <div className="heading-6 cart-price-pair">
                        <p>Total Price</p>
                        <p>{`₹ ${totalMRP}`}</p>
                    </div>
                </div>
                <hr />
                <div className="card-actions">
                    <button className="btn-filled-green rootShoot-full-width text-align-center">
                        make payment
                    </button>
                </div>
            </div>
        </div>
    );
};
