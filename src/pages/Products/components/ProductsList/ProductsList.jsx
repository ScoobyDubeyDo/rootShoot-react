import { useFilter } from "../../../../context";
import { CardLayout, ProductCard } from "../../../components";

export const ProductsList = () => {
    const { filterState } = useFilter();
    return (
        <CardLayout>
            {filterState.products.map((item) => (
                <ProductCard
                    cardType="prods"
                    key={item._id}
                    title={item.name}
                    product={item}
                />
            ))}
        </CardLayout>
    );
};
