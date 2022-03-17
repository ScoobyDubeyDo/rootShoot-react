export const TypesCheckbox = ({ categoriesArray }) => {
    return (
        <>
            <h3 className="heading-5">Type</h3>
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
                                // checked={state.selectedTypes.includes(
                                //     type.charAt(0).toUpperCase() + type.slice(1)
                                // )}
                                value={
                                    type.charAt(0).toUpperCase() + type.slice(1)
                                }
                                type="checkbox"
                                // onChange={(e) =>
                                //     e.target.checked
                                //         ? dispatch({
                                //               type: "TYPES",
                                //               payload: {
                                //                   typeOfProd: e.target.value,
                                //                   isChecked: true,
                                //               },
                                //           })
                                //         : dispatch({
                                //               type: "TYPES",
                                //               payload: {
                                //                   typeOfProd: e.target.value,
                                //                   isChecked: false,
                                //               },
                                //           })
                                // }
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
