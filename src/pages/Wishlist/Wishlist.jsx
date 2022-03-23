import { useWishlist } from "../../context";
import { CardLayout, CartWishCard } from "../components";

export const Wishlist = () => {
    const { wishlist } = useWishlist();

    return (
        <>
            <h2 className="heading-3 text-align-center text-gutterBottom">
                Favorite Floras
            </h2>
            <CardLayout>
                {wishlist.map((item) => (
                    <CartWishCard
                        cardType="wishlist"
                        key={item._id}
                        product={item}
                    />
                ))}
            </CardLayout>
        </>
    );
};
