import { useFilter } from "../../../../context";
import { CardLayout, ProductCard } from "../../../components";

export const ProductsList = () => {
    const { filterState } = useFilter();
    return (
        <CardLayout>
            {filterState.products.map(
                ({ name, _id, price, rating, type, imgUrl }) => (
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
                )
            )}
        </CardLayout>
    );
};
