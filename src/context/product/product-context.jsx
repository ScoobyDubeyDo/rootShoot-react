import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useLoaderOrToast } from "../loader/loader-context";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const { setIsLoading, setToastMessage } = useLoaderOrToast();
    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const res = await axios.get("/api/products");
                if (res.status === 200) {
                    setProducts(res.data.products);
                }
            } catch (err) {
                setToastMessage({
                    type: "red",
                    text: err.message,
                });
            } finally {
                setIsLoading(false);
            }
        })();
        (async () => {
            try {
                setIsLoading(true);
                const res = await axios.get("/api/categories");
                if (res.status === 200) {
                    setCategories(res.data.categories);
                }
            } catch (err) {
                setToastMessage({
                    type: "red",
                    text: err.message,
                });
            } finally {
                setIsLoading(false);
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
