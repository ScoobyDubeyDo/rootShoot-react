import { CardLayout, CartWishCard } from "../components";
import { useProduct } from "../../context";
import faker from "@faker-js/faker";

export const Wishlist = () => {
    const { products } = useProduct();

    return (
        <>
            <h2 className="heading-3 text-align-center text-gutterBottom">
                Favorite Floras
            </h2>
            <CardLayout>
                {faker.random.arrayElements(products, 5).map((product) => (
                    <CartWishCard
                        title={product.name}
                        cardType="wishlist"
                        imgUrl={product.imgUrl}
                        price={product.price}
                        prodTypes={product.type}
                        id={product._id}
                        key={product._id}
                    />
                ))}
            </CardLayout>
        </>
    );
};
