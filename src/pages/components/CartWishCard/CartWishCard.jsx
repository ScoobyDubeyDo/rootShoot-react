import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth, useWishlist, useLoader } from "../../../context";
import { deleteFromWishlist } from "../../../utils";
export const CartWishCard = ({ product, cardType }) => {
    const { name, imgUrl, type, price, _id } = product;
    const { setWishlist } = useWishlist();
    const { currentUser } = useAuth();
    const { setIsLoading } = useLoader();
    const navigate = useNavigate();

    return (
        <div
            className="card rootShoot-prods-card"
            onClick={() => {
                navigate(`/products/${_id}`);
            }}
        >
            <div
                className="card-badge-green"
                onClick={async (e) => {
                    e.stopPropagation();
                    if (currentUser?.encodedToken) {
                        deleteFromWishlist(product, setWishlist, setIsLoading);
                    }
                }}
            >
                <MdDeleteForever size={24} />
            </div>
            <div className="card-body-horizontal">
                <img
                    src={imgUrl}
                    alt={name}
                    className="card-side-image rootShoot-prods-card-img"
                />
                <div className="card-side-content">
                    <h2 className="card-title text-noWrap">{name}</h2>
                    <p className="card-subtitle rootShoot-full-width">
                        {type.toLocaleString()}
                    </p>
                    <p className="card-title heading-6 rootShoot-full-width">
                        {`₹ ${price}`}
                    </p>
                    <div className="card-actions">
                        {cardType === "cart" && (
                            <label htmlFor={_id}>
                                Quantity:
                                <select name="qty" id={_id}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </label>
                        )}
                        <div className="card-btns">
                            <button className="btn-filled-green rootShoot-full-width text-align-center">
                                move to
                                {cardType !== "cart" ? " cart" : " wishlist"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
