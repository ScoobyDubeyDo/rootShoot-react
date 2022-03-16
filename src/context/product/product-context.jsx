import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get("/api/products");
                if (res.status === 200) {
                    setProducts(res.data.products);
                }
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
