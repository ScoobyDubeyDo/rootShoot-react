import { CardLayout, ProductCard } from "../../../components";
import { faker } from "@faker-js/faker";
import "./homeTypesSection.css";
import { useProduct } from "../../../../context";

export const HomeTypesSection = () => {
    const { categories } = useProduct();

    return (
        <section className="types">
            <h2 className="heading-4 text-align-center">Popular Types</h2>
            <CardLayout>
                {faker.random.arrayElements(categories, 4).map((type) => (
                    <ProductCard
                        cardType="types"
                        key={type.id}
                        title={type.categoryName}
                        imgUrl={type.displayImg}
                    />
                ))}
            </CardLayout>
        </section>
    );
};
