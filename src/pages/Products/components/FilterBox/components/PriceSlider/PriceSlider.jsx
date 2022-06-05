import { useFilter } from "../../../../../../context";
import "./priceSlider.css";

export const PriceSlider = () => {
	const { filterState, filterDispatch } = useFilter();

	return (
		<>
			<h3 className="heading-6">Price</h3>
			<div className="cart-price-pair">
				<span className="text-body-lg">240</span>
				<span className="text-body-lg">
					{filterState.selectedMaxPrice}
				</span>
			</div>
			<input
				type="range"
				min="240"
				max="1599"
				value={filterState.selectedMaxPrice}
				onChange={(e) =>
					filterDispatch({
						type: "MAX_PRICE",
						payload: { maxPrice: e.target.value },
					})
				}
				className="input-range"
			/>
		</>
	);
};
