import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get("/api/products");
                if (res.status === 200) {
                    setProducts(res.data.products);
                }
            } catch (err) {
                console.log("Error while getting products", err);
            }
        })();
        (async () => {
            try {
                const res = await axios.get("/api/categories");
                if (res.status === 200) {
                    setCategories(res.data.categories);
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
