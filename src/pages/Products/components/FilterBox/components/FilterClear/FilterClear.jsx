import "./filterClear.css";
import { useFilter } from "../../../../../../context";

export const FilterClear = () => {
    const { dispatch } = useFilter();

    return (
        <div className="cart-price-pair border-bottom">
            <h1 className="heading-5">Filter</h1>
            <button
                className="btn-link text-body-lg"
                onClick={() => dispatch({ type: "CLEAR" })}
            >
                clear
            </button>
        </div>
    );
};
