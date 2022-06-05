import { useEffect } from "react";
import { useFilter } from "../../../../../../context";

export const TypesCheckbox = ({ categoriesArray }) => {
	const { filterState, filterDispatch } = useFilter();
	useEffect(() => {
		return () => {
			filterDispatch({ type: "CLEAR" });
		};
	}, [filterDispatch]);

	return (
		<>
			<h3 className="heading-6">Type</h3>
			<span>
				{categoriesArray.map((type) => {
					return (
						<label
							key={type}
							htmlFor={`${type.toLowerCase()}`}
							className="rootShoot-margin-center text-body-lg">
							<input
								id={`${type.toLowerCase()}`}
								className="rootShoot-radio"
								name="types"
								checked={filterState.selectedTypes.includes(
									type
								)}
								value={type}
								type="checkbox"
								onChange={(e) =>
									e.target.checked
										? filterDispatch({
												type: "TYPES",
												payload: {
													typeOfProd: e.target.value,
													isChecked: true,
												},
										  })
										: filterDispatch({
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
