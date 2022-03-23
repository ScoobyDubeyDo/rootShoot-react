import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../auth/auth-context";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
    const { currentUser } = useAuth();
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get("/api/user/wishlist", {
                    headers: { authorization: localStorage.getItem("token") },
                });
                setWishlist(res.data.wishlist);
            } catch (err) {
                console.log(err.message, "error while getting wishlist");
            }
        })();
        console.log(currentUser, "user");
    }, [currentUser]);

    return (
        <WishlistContext.Provider value={{ wishlist, setWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
