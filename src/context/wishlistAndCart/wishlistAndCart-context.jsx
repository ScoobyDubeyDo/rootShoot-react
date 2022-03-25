import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../auth/auth-context";
import { useLoader } from "../loader/loader-context";

const WishlistAndCartContext = createContext();

const WishlistAndCartProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);
    const { currentUser } = useAuth();
    const { setIsLoading } = useLoader();

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const res = await axios.get("/api/user/wishlist", {
                    headers: { authorization: localStorage.getItem("token") },
                });
                if (res.status) {
                    setWishlist(res.data.wishlist);
                }
            } catch (err) {
                setWishlist([]);
                console.log(err.message, "error while getting wishlist");
            } finally {
                setIsLoading(false);
            }
        })();
        (async () => {
            try {
                setIsLoading(true);
                const res = await axios.get("/api/user/cart", {
                    headers: { authorization: localStorage.getItem("token") },
                });
                if (res.status) {
                    setCart(res.data.cart);
                }
            } catch (err) {
                setCart([]);
                console.log(err.message, "error while getting cart");
            } finally {
                setIsLoading(false);
            }
        })();
    }, [currentUser]);

    return (
        <WishlistAndCartContext.Provider
            value={{ wishlist, setWishlist, cart, setCart }}
        >
            {children}
        </WishlistAndCartContext.Provider>
    );
};

const useWishlistAndCart = () => useContext(WishlistAndCartContext);

export { WishlistAndCartProvider, useWishlistAndCart };