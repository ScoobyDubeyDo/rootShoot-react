import { CardLayout, ProductCard } from "../../../components";
import { useProduct } from "../../../../context";
import "./homeProdsSection.css";

export const HomeProdsSection = () => {
    const { products } = useProduct();

    return (
        <section className="gifts">
            <h2 className="heading-4 text-align-center">Most Gifted</h2>
            <CardLayout>
                {products.slice(2, 8).map((item) => (
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
