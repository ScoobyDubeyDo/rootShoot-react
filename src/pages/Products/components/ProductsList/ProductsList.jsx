import { useFilter } from "../../../../context";
import { CardLayout, ProductCard } from "../../../components";

export const ProductsList = () => {
    const { state } = useFilter();
    return (
        <CardLayout>
            {state.products.map(({ name, id, price, rating, type, imgUrl }) => (
                <ProductCard
                    cardType="prods"
                    key={id}
                    title={name}
                    imgUrl={imgUrl}
                    price={price}
                    prodTypes={type}
                    rating={rating}
                />
            ))}
        </CardLayout>
    );
};
