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
                {faker.random.arrayElements(products, 6).map((item) => (
                    <ProductCard
                        cardType="prods"
                        key={item._id}
                        product={item}
                        title={item.name}
                    />
                ))}
            </CardLayout>
        </section>
    );
};
