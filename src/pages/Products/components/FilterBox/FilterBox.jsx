import { useProduct } from "../../../../context";
import {
    FilterClear,
    PriceSlider,
    RatingRadio,
    SortbyRadio,
    TypesCheckbox,
} from "./components";
import "./filterBox.css";
import { stars, sortTypes } from "../../../../utils";

export const FilterBox = ({ mobileFilterShow, setMobileFilterShow }) => {
    const { categories: categoriesObjArr } = useProduct();
    const categories = categoriesObjArr.map((type) => type.categoryName);

    return (
        <div className={`filter-box ${mobileFilterShow && "filter-box-show"}`}>
            <div>
                <FilterClear />
                <PriceSlider />
                <TypesCheckbox categoriesArray={categories} />
                <RatingRadio starsArray={stars} />
                <SortbyRadio sortArray={sortTypes} />
            </div>
            <button
                onClick={() => setMobileFilterShow(false)}
                className="heading-6 rootShoot-hidden btn-filled-green rootShoot-full-width"
            >
                Apply
            </button>
        </div>
    );
};
