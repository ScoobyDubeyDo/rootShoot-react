import { useWishlistAndCart } from "../../context";
import { CardLayout, CartWishCard } from "../components";
import Lottie from "react-lottie";
import empty from "../components/empty.json";

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
                <Lottie
                    isClickToPauseDisabled
                    options={{
                        loop: true,
                        autoplay: true,
                        animationData: empty,
                        rendererSettings: {
                            preserveAspectRatio: "xMidYMid slice",
                        },
                    }}
                    height={250}
                    width={250}
                    speed={1.5}
                />
            )}
        </>
    );
};
