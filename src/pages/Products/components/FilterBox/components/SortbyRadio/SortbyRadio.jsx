import { useFilter } from "../../../../../../context";

export const SortbyRadio = ({ sortArray }) => {
    const { state, dispatch } = useFilter();
    return (
        <>
            <h3 className="heading-6">Sort By</h3>
            <span>
                {sortArray.map((sort) => (
                    <label
                        key={sort}
                        htmlFor={sort}
                        className="rootShoot-margin-center text-body-lg"
                    >
                        <input
                            name="sort"
                            id={sort}
                            type="radio"
                            value={sort}
                            checked={state.sortStrategy === sort}
                            onChange={(e) =>
                                dispatch({
                                    type: "SORT_BY_PRICE",
                                    payload: { sortWay: e.target.value },
                                })
                            }
                        />
                        {` Price - 
              ${sort
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}`}
                    </label>
                ))}
            </span>
        </>
    );
};
