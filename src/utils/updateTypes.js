import { finalFilter } from "./finalFilter";

export const updateTypes = (state, ProdType, isChecked) => {
	let temp = isChecked
		? !state.selectedTypes.includes(ProdType)
			? {
					...state,
					selectedTypes: [...state.selectedTypes, ProdType],
			  }
			: state
		: {
				...state,
				selectedTypes: [...state.selectedTypes].filter(
					(type) => type !== ProdType
				),
		  };

	return finalFilter(temp);
};
