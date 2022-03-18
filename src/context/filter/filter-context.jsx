import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import { filterReducer, initialState } from "../../reducers";
import { useProduct } from "../product/product-context";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
    const { products } = useProduct();

    const [state, dispatch] = useReducer(filterReducer, initialState);

    useEffect(() => {
        dispatch({ type: "INITIALISE", payload: { products } });
    }, [products]);

    return (
        <FilterContext.Provider value={{ state, dispatch }}>
            {children}
        </FilterContext.Provider>
    );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
