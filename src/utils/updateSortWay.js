import { finalFilter } from "./finalFilter";

export const updateSortWay = (state, way) => {
    const temp = {
        ...state,
        sortStrategy: way,
    };

    return finalFilter(temp);
};
