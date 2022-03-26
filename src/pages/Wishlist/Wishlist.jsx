import { useWishlistAndCart } from "../../context";
import { CardLayout, CartWishCard, EmptyPageHolder } from "../components";

export const Wishlist = () => {
    const { wishlist } = useWishlistAndCart();

    return (
        <>
            <h2 className="heading-3 text-align-center text-gutterBottom">
                Favorite Floras
            </h2>
            {wishlist.length > 0 ? (
                <CardLayout>
                    {wishlist.map((item) => (
                        <CartWishCard
                            cardType="wishlist"
                            key={item._id}
                            product={item}
                        />
                    ))}
                </CardLayout>
            ) : (
                <EmptyPageHolder />
            )}
        </>
    );
};
