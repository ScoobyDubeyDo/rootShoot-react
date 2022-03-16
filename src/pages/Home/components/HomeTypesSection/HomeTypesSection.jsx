import axios from "axios";
import { useEffect, useState } from "react";
import { CardLayout, ProductCard } from "../../../components";
import { faker } from "@faker-js/faker";
import "./homeTypesSection.css";

export const HomeTypesSection = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get("/api/categories");
                if (res.status === 200) {
                    setCategories(
                        faker.random.arrayElements(res.data.categories, 4)
                    );
                }
            } catch (err) {
                console.log("Error while getting categories", err);
            }
        })();
    }, []);

    return (
        <section>
            <h2 className="heading-4 text-align-center">Popular Types</h2>
            <CardLayout>
                {categories.map((type) => (
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
