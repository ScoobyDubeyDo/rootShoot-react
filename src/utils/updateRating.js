import { finalFilter } from "./finalFilter";

export const updateRating = (state, rating) => {
    const temp = {
        ...state,
        selectedRating: rating,
    };

    return finalFilter(temp);
};
