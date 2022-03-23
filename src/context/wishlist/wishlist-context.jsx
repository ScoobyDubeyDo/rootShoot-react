import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../auth/auth-context";
import { useLoader } from "../loader/loader-context";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
    const { currentUser } = useAuth();
    const { setIsLoading } = useLoader();
    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const res = await axios.get("/api/user/wishlist", {
                    headers: { authorization: localStorage.getItem("token") },
                });
                console.log("wishlist ran");
                if (res.status) {
                    setWishlist(res.data.wishlist);
                    setIsLoading(false);
                }
            } catch (err) {
                console.log(err.message, "error while getting wishlist");
            }
        })();
    }, [currentUser]);

    return (
        <WishlistContext.Provider value={{ wishlist, setWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
