import "./filterClear.css";
import { useFilter } from "../../../../../../context";

export const FilterClear = () => {
    const { filterDispatch } = useFilter();

    return (
        <div className="clear-pair border-bottom">
            <h1 className="heading-5">Filter</h1>
            <button
                className="btn-link text-body-lg"
                onClick={() => filterDispatch({ type: "CLEAR" })}
            >
                clear
            </button>
        </div>
    );
};
