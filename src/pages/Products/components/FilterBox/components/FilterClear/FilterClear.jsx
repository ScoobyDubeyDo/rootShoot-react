import "./filterClear.css";

export const FilterClear = () => {
    return (
        <div className="cart-price-pair border-bottom">
            <h1 className="heading-4">Filter</h1>
            <button
                className="btn-link heading-6"
                // onClick={() => dispatch({ type: "CLEAR" })}
            >
                clear
            </button>
        </div>
    );
};
