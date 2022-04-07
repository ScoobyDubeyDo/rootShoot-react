import { IoMdClose } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
    useAuth,
    useWishlistAndCart,
    useLoaderOrToast,
} from "../../../context";
import {
    deleteFromCartOrWishlist,
    cartItemQtyUpdate,
    addToCartOrWishlist,
} from "../../../utils";
export const CartWishCard = ({ product, cardType }) => {
    const { name, imgUrl, type, price, _id, qty } = product;
    const { setWishlist, setCart, wishlist, cart } = useWishlistAndCart();
    const { currentUser } = useAuth();
    const { setIsLoading, setToastMessage } = useLoaderOrToast();
    const navigate = useNavigate();

    return (
        <div
            className="card-hover rootShoot-prods-card"
            onClick={() => {
                navigate(`/products/${_id}`);
            }}
        >
            <div
                className="card-top-btn icon-btn-ghost-sm"
                onClick={(e) => {
                    e.stopPropagation();
                    if (cardType === "cart") {
                        if (currentUser?.encodedToken) {
                            return deleteFromCartOrWishlist(
                                "cart",
                                product,
                                setCart,
                                setIsLoading,
                                setToastMessage
                            );
                        }
                    }
                    if (cardType === "wishlist") {
                        if (currentUser?.encodedToken) {
                            return deleteFromCartOrWishlist(
                                "wishlist",
                                product,
                                setWishlist,
                                setIsLoading,
                                setToastMessage
                            );
                        }
                    }
                }}
            >
                {cardType === "cart" ? (
                    <IoMdClose />
                ) : (
                    <MdOutlineDelete size={20} />
                )}
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
                    <div className="card-actions">
                        <p className="card-title heading-6 ">{`₹ ${price}`}</p>
                        {cardType === "cart" && (
                            <div className="rootShoot-product-qty">
                                <button
                                    className="icon-btn-green-sm"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        qty <= 1
                                            ? deleteFromCartOrWishlist(
                                                  "cart",
                                                  product,
                                                  setCart,
                                                  setIsLoading,
                                                  setToastMessage
                                              )
                                            : cartItemQtyUpdate(
                                                  "decrement",
                                                  _id,
                                                  setCart,
                                                  setIsLoading,
                                                  setToastMessage
                                              );
                                    }}
                                >
                                    -
                                </button>
                                <span>{qty}</span>
                                <button
                                    className="icon-btn-green-sm"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        cartItemQtyUpdate(
                                            "increment",
                                            _id,
                                            setCart,
                                            setIsLoading,
                                            setToastMessage
                                        );
                                    }}
                                >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="card-actions">
                        <div className="card-btns">
                            <button
                                className="btn-filled-green rootShoot-full-width text-align-center"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    moveToWishlistOrCart(
                                        cardType,
                                        product,
                                        setCart,
                                        setWishlist,
                                        setIsLoading,
                                        cart,
                                        wishlist,
                                        _id,
                                        setToastMessage
                                    );
                                }}
                            >
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
function moveToWishlistOrCart(
    cardType,
    product,
    setCart,
    setWishlist,
    setIsLoading,
    cart,
    wishlist,
    _id,
    setToastMessage
) {
    deleteFromCartOrWishlist(
        cardType === "cart" ? "cart" : "wishlist",
        product,
        cardType === "cart" ? setCart : setWishlist,
        setIsLoading,
        setToastMessage
    );
    if (cardType === "cart" && !wishlist.some((item) => item._id === _id)) {
        addToCartOrWishlist(
            "wishlist",
            product,
            setWishlist,
            setIsLoading,
            setToastMessage
        );
    }

    if (cardType === "wishlist") {
        !cart.some((item) => item._id === _id)
            ? addToCartOrWishlist(
                  "cart",
                  product,
                  setCart,
                  setIsLoading,
                  setToastMessage,
                  setToastMessage
              )
            : cartItemQtyUpdate(
                  "increment",
                  _id,
                  setCart,
                  setIsLoading,
                  setToastMessage,
                  setToastMessage
              );
    }
}
