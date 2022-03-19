import { MdDeleteForever } from "react-icons/md";
export const CartWishCard = ({
    title,
    imgUrl,
    cardType,
    prodTypes,
    price,
    id,
}) => {
    prodTypes = prodTypes.toLocaleString();
    return (
        <div className="card rootShoot-prods-card">
            <div className="card-badge-green">
                <MdDeleteForever size={24} />
            </div>
            <div className="card-body-horizontal">
                <img
                    src={imgUrl}
                    alt={title}
                    className="card-side-image rootShoot-prods-card-img"
                />
                <div className="card-side-content">
                    <h2 className="card-title text-noWrap">{title}</h2>
                    <p className="card-subtitle rootShoot-full-width">
                        {prodTypes}
                    </p>
                    <p className="card-title heading-6 rootShoot-full-width">
                        {price}
                    </p>
                    <div className="card-actions">
                        {cardType === "cart" && (
                            <label htmlFor={id}>
                                Quantity:
                                <select name="qty" id={id}>
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
