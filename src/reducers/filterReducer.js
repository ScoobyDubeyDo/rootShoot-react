import {
    updateBudget,
    updateRating,
    updateTypes,
    updateSortWay,
    searchProducts,
} from "../utils";

export const initialFilterState = {
    initialData: [],
    products: [],
    searchResults: [],
    selectedMaxPrice: 1599,
    selectedTypes: [],
    selectedRating: 0,
    sortStrategy: "",
    searchText: "",
};

export const filterReducer = (state, action) => {
    switch (action.type) {
        case "MAX_PRICE":
            return updateBudget(state, action.payload.maxPrice);

        case "TYPES":
            return updateTypes(
                state,
                action.payload.typeOfProd,
                action.payload.isChecked
            );
        case "STAR_RATING":
            return updateRating(state, action.payload.selectedStar);

        case "SORT_BY_PRICE":
            return updateSortWay(state, action.payload.sortWay);

        case "INITIALISE":
            return {
                ...state,
                products: action.payload.products,
                initialData: action.payload.products,
            };

        case "SEARCH_TEXT":
            return searchProducts(state, action.payload.searchText);

        case "SEARCH_PRODUCTS":
            return searchProducts(state, action.payload.searchText, true);

        case "CLEAR":
            return {
                ...initialFilterState,
                initialData: [...state.initialData],
                products: [...state.initialData],
            };
        default:
            return state;
    }
};
