import { finalFilter } from "./finalFilter";

export const updateBudget = (state, maxPrice) => {
	const temp = {
		...state,
		selectedMaxPrice: maxPrice,
	};

	return finalFilter(temp);
};
