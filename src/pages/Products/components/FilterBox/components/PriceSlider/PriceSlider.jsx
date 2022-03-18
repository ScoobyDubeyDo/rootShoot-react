import { useFilter } from "../../../../../../context";
import "./priceSlider.css";

export const PriceSlider = () => {
    const { state, dispatch } = useFilter();

    return (
        <>
            <h3 className="heading-6">Price</h3>
            <div className="cart-price-pair">
                <span className="text-body-lg">240</span>
                <span className="text-body-lg">{state.selectedMaxPrice}</span>
            </div>
            <input
                type="range"
                min="240"
                max="1599"
                value={state.selectedMaxPrice}
                onChange={(e) =>
                    dispatch({
                        type: "MAX_PRICE",
                        payload: { maxPrice: e.target.value },
                    })
                }
                className="input-range"
            />
        </>
    );
};
