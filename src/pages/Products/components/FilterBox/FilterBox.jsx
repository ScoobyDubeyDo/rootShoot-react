import { useFilter, useProduct } from "../../../../context";
import { sortTypes, stars } from "../../../../utils";
import {
	FilterClear,
	PriceSlider,
	RatingRadio,
	SortbyRadio,
	TypesCheckbox,
} from "./components";
import "./filterBox.css";

export const FilterBox = ({ mobileFilterShow, setMobileFilterShow }) => {
	const { categories: categoriesObjArr } = useProduct();
	const categories = categoriesObjArr.map((type) => type.categoryName);
	const { filterState } = useFilter();

	return (
		<div className={`filter-box ${mobileFilterShow && "filter-box-show"}`}>
			<div>
				<p className="heading-6">
					Products showing: {filterState.products.length}
				</p>
				<div className="divider-dark-horizontal" />
				<FilterClear />
				<PriceSlider />
				<TypesCheckbox categoriesArray={categories} />
				<RatingRadio starsArray={stars} />
				<SortbyRadio sortArray={sortTypes} />
			</div>
			<div className="rootShoot-full-width filter-close">
				<button
					onClick={() => setMobileFilterShow(false)}
					className="heading-6 rootShoot-hidden btn-outlined-green ">
					close
				</button>
				<button
					onClick={() => setMobileFilterShow(false)}
					className="heading-6 rootShoot-hidden btn-filled-green ">
					apply
				</button>
			</div>
		</div>
	);
};
