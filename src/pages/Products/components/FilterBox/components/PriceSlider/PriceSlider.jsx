import "./priceSlider.css";

export const PriceSlider = ({ selectedPrice }) => {
    return (
        <>
            <h3 className="heading-5">Price</h3>
            <div className="cart-price-pair">
                <span className="heading-6">240</span>
                <span className="heading-6">{selectedPrice}</span>
            </div>
            <input
                type="range"
                min="240"
                max="1599"
                value={selectedPrice}
                // onChange={(e) =>
                //     dispatch({
                //         type: "MAX_PRICE",
                //         payload: { maxPrice: e.target.value },
                //     })
                // }
                className="input-range"
            />
        </>
    );
};
