import { CardLayout, ProductCard } from "../../../components";
import { useProduct } from "../../../../context";
import { faker } from "@faker-js/faker";
import "./homeProdsSection.css";

export const HomeProdsSection = () => {
    const { products } = useProduct();

    return (
        <section className="gifts">
            <h2 className="heading-4 text-align-center">Most Gifted</h2>
            <CardLayout>
                {faker.random
                    .arrayElements(products, 6)
                    .map(({ name, _id, price, rating, type, imgUrl }) => (
                        <ProductCard
                            cardType="prods"
                            key={_id}
                            title={name}
                            imgUrl={imgUrl}
                            price={price}
                            prodTypes={type}
                            rating={rating}
                            id={_id}
                        />
                    ))}
            </CardLayout>
        </section>
    );
};
