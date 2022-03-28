import { finalFilter } from "./finalFilter";

export const searchProducts = (state, searchTerm, isEnter = false) => {
    if (!isEnter) {
        return {
            ...state,
            searchText: searchTerm,
            searchResults: [...state.initialData].filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            ),
        };
    } else return finalFilter(state);
};
