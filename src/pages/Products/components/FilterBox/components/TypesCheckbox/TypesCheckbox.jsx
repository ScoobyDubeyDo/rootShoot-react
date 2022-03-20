import { useFilter } from "../../../../../../context";
import { useEffect } from "react";
export const TypesCheckbox = ({ categoriesArray }) => {
    const { state, dispatch } = useFilter();
    useEffect(() => {
        return () => {
            dispatch({ type: "CLEAR" });
        };
    }, []);

    return (
        <>
            <h3 className="heading-6">Type</h3>
            <span>
                {categoriesArray.map((type) => {
                    return (
                        <label
                            key={type}
                            htmlFor={`${type.toLowerCase()}`}
                            className="rootShoot-margin-center text-body-lg"
                        >
                            <input
                                id={`${type.toLowerCase()}`}
                                name="types"
                                checked={state.selectedTypes.includes(type)}
                                value={type}
                                type="checkbox"
                                onChange={(e) =>
                                    e.target.checked
                                        ? dispatch({
                                              type: "TYPES",
                                              payload: {
                                                  typeOfProd: e.target.value,
                                                  isChecked: true,
                                              },
                                          })
                                        : dispatch({
                                              type: "TYPES",
                                              payload: {
                                                  typeOfProd: e.target.value,
                                                  isChecked: false,
                                              },
                                          })
                                }
                            />
                            {`  ${
                                type.charAt(0).toUpperCase() + type.slice(1)
                            }`}
                        </label>
                    );
                })}
            </span>
        </>
    );
};
