import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../auth/auth-context";
import { useLoaderOrToast } from "../loader/loader-context";

const WishlistAndCartContext = createContext();

const WishlistAndCartProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);
    const { currentUser } = useAuth();
    const { setIsLoading, setToastMessage } = useLoaderOrToast();

    useEffect(() => {
        if (currentUser?.encodedToken) {
            (async () => {
                try {
                    setIsLoading(true);
                    const res = await axios.get("/api/user/wishlist", {
                        headers: {
                            authorization: localStorage.getItem("token"),
                        },
                    });
                    if (res.status) {
                        setWishlist(res.data.wishlist);
                    }
                } catch (err) {
                    setWishlist([]);
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
                    const res = await axios.get("/api/user/cart", {
                        headers: {
                            authorization: localStorage.getItem("token"),
                        },
                    });
                    if (res.status) {
                        setCart(res.data.cart);
                    }
                } catch (err) {
                    setCart([]);
                    setToastMessage({
                        type: "red",
                        text: err.message,
                    });
                } finally {
                    setIsLoading(false);
                }
            })();
        }
    }, [currentUser, setToastMessage, setIsLoading]);

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
