import { Hero } from "./components/Hero/Hero";
import { HomeTypesSection, HomeProdsSection } from "./components";

export const Home = () => {
    return (
        <>
            <Hero />
            <HomeTypesSection />
            <HomeProdsSection />
        </>
    );
};
