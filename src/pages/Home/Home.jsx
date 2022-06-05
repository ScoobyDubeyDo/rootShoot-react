import { HomeProdsSection, HomeTypesSection } from "./components";
import { Hero } from "./components/Hero/Hero";

export const Home = () => {
	return (
		<>
			<Hero />
			<HomeTypesSection />
			<HomeProdsSection />
		</>
	);
};
