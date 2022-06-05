import { createContext, useContext, useEffect, useReducer } from "react";
import { filterReducer, initialFilterState } from "../../reducers";
import { useProduct } from "../product/product-context";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
	const { products } = useProduct();

	const [filterState, filterDispatch] = useReducer(
		filterReducer,
		initialFilterState
	);

	useEffect(() => {
		filterDispatch({ type: "INITIALISE", payload: { products } });
	}, [products]);

	return (
		<FilterContext.Provider value={{ filterState, filterDispatch }}>
			{children}
		</FilterContext.Provider>
	);
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
