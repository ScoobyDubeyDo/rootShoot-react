import "./productCard.css";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export const ProductCard = ({
    title,
    imgUrl,
    cardType,
    prodTypes,
    price,
    rating,
    id,
}) => {
    const navigate = useNavigate();

    return (
        <div
            className={`card rootShoot-${cardType}-card`}
            onClick={async () => {
                if (cardType === "types") {
                    return navigate(`/products/type/${id}`);
                }
                if (cardType === "prods") {
                    return navigate(`/products/${id}`);
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
                        <p className="card-subtitle rootShoot-full-width">{`${prodTypes}`}</p>
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
                                    Add to cart
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        console.log(
                                            "pseudo code to remind me that I have to fix this in future"
                                        );
                                    }}
                                    className="btn-outlined-green rootShoot-full-width text-align-center"
                                >
                                    Add to wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
