import { faker } from "@faker-js/faker";
import { useProduct } from "../../../../context";
import { CardLayout, ProductCard } from "../../../components";
import "./homeTypesSection.css";

export const HomeTypesSection = () => {
	const { categories } = useProduct();

	return (
		<section className="types">
			<h2 className="heading-4 text-align-center">Popular Types</h2>
			<CardLayout>
				{faker.random.arrayElements(categories, 4).map((item) => (
					<ProductCard
						cardType="types"
						key={item._id}
						title={item.categoryName}
						product={item}
					/>
				))}
			</CardLayout>
		</section>
	);
};
