import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useLoader } from "../loader/loader-context";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const { setIsLoading } = useLoader();
    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const res = await axios.get("/api/products");
                if (res.status === 200) {
                    setProducts(res.data.products);
                    setIsLoading(false);
                }
            } catch (err) {
                console.log("Error while getting products", err);
            }
        })();
        (async () => {
            try {
                setIsLoading(true);
                const res = await axios.get("/api/categories");
                if (res.status === 200) {
                    setCategories(res.data.categories);
                    setIsLoading(false);
                }
            } catch (err) {
                console.log("Error while getting categories", err);
            }
        })();
    }, []);

    return (
        <ProductContext.Provider value={{ products, categories }}>
            {children}
        </ProductContext.Provider>
    );
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
