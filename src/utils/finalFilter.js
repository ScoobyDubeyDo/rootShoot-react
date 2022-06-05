const filterProducts = (item, state) => {
	return (
		item.name.toLowerCase().includes(state.searchText.toLowerCase()) &&
		item.price <= state.selectedMaxPrice &&
		item.type.some((ele) => {
			return [...state.selectedTypes].length > 0
				? [...state.selectedTypes].includes(ele)
				: true;
		}) &&
		item.rating >= state.selectedRating
	);
};

const sortProducts = (a, b, state) => {
	if (state.sortStrategy === "low-to-high") {
		return a.price - b.price;
	}
	if (state.sortStrategy === "high-to-low") {
		return b.price - a.price;
	}
	return "";
};

export const finalFilter = (state) => {
	return {
		...state,
		products: [...state.initialData]
			.filter((item) => filterProducts(item, state))
			.sort((a, b) => sortProducts(a, b, state)),
	};
};
