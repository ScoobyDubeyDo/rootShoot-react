import "./productCard.css";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { addToWishlist } from "../../../utils";
import { useWishlist, useAuth, useLoader } from "../../../context";
export const ProductCard = ({ cardType, product, title }) => {
    const navigate = useNavigate();
    const { wishlist, setWishlist } = useWishlist();
    const { currentUser } = useAuth();
    const { setIsLoading } = useLoader();
    const { _id, rating, imgUrl, price, type } = product;

    return (
        <div
            className={`card rootShoot-${cardType}-card`}
            onClick={async () => {
                if (cardType === "types") {
                    return navigate(`/products/type/${_id}`);
                }
                if (cardType === "prods") {
                    return navigate(`/products/${_id}`);
                }
            }}
        >
            <div
                className={`card-body${
                    cardType === "prods" ? "-horizontal" : ""
                }`}
            >
                <div
                    className={`card-badge-${
                        cardType === "types"
                            ? "green rootShoot-types-card-badge"
                            : "yellow"
                    }`}
                >
                    {cardType === "types" ? (
                        `${
                            title.charAt(0).toUpperCase() + title.slice(1)
                        } Plants`
                    ) : (
                        <>
                            {rating}&nbsp;
                            <FaStar />
                        </>
                    )}
                </div>
                <img
                    src={imgUrl}
                    alt={title}
                    className={`card-${
                        cardType === "prods" ? "side" : "top"
                    }-image rootShoot-${cardType}-card-img`}
                />
                {cardType === "prods" && (
                    <div className="card-side-content">
                        <h2 className="card-title text-noWrap">
                            {`${
                                title.charAt(0).toUpperCase() + title.slice(1)
                            }`}
                        </h2>
                        <p className="card-subtitle rootShoot-full-width">{`${type}`}</p>
                        <p className="card-title heading-6 rootShoot-full-width">{`₹${price}`}</p>
                        <div className="card-actions">
                            <div className="card-btns">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        console.log(
                                            "pseudo code to remind me that I have to fix this in future"
                                        );
                                    }}
                                    className="btn-filled-green rootShoot-full-width text-align-center"
                                >
                                    {!wishlist.some((item) => item._id === _id)
                                        ? "Add to cart"
                                        : "buy now"}
                                </button>
                                <button
                                    onClick={async (e) => {
                                        e.stopPropagation();
                                        if (currentUser?.encodedToken) {
                                            !wishlist.some(
                                                (item) => item._id === _id
                                            )
                                                ? addToWishlist(
                                                      product,
                                                      setWishlist,
                                                      setIsLoading
                                                  )
                                                : navigate("/wishlist");
                                        } else navigate("/sign-in");
                                    }}
                                    className="btn-outlined-green rootShoot-full-width text-align-center"
                                >
                                    {!wishlist.some((item) => item._id === _id)
                                        ? "Add to wishlist"
                                        : "go to wishlist"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
