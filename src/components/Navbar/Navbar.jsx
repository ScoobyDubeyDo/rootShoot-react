import "./navbar.css";
import { imgLogo } from "../images";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { useWishlistAndCart, useAuth, useFilter } from "../../context";
import { RiMenu4Line } from "react-icons/ri";
import { useState, useRef, useEffect } from "react";
import { userSignout } from "../../utils";
import { useLockBodyScroll } from "../../hooks";
export const Navbar = () => {
    const { wishlist, cart } = useWishlistAndCart();
    const [drawer, setDrawer] = useState(false);
    const { setCurrentUser } = useAuth();
    const { filterState, filterDispatch } = useFilter();
    const [bodyLock, setBodyLock] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const searchRef = useRef("");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname !== "/products") {
            searchRef.current.value = "";
        }
        setSearchOpen(false);
    }, [location.pathname]);
    useEffect(() => {
        searchRef.current.value = filterState.searchText;
    }, [filterState]);

    useLockBodyScroll(bodyLock);
    return (
        <>
            <div className="appbar-fixed rootShoot-appbar">
                <div className="appbar-menu rootShoot-appbar-menu">
                    <button
                        onClick={() => {
                            setDrawer((prev) => !prev);
                            setBodyLock((prev) => !prev);
                        }}
                        className="icon-btn-green"
                    >
                        <RiMenu4Line size={20} />
                    </button>
                </div>

                <div className="appbar-hero rootShoot-shown">
                    <Link to="/">
                        <img
                            src={imgLogo}
                            alt="logo"
                            className="responsive-image"
                        />
                    </Link>
                </div>

                <div className={`drawer ${drawer ? "drawer-open" : ""}`}>
                    <ul className="vertical-list ">
                        <li
                            onClick={() => {
                                setDrawer(false);
                                setBodyLock(false);
                            }}
                        >
                            <Link
                                className="rootShoot-link-reset heading-6 text-noWrap"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li
                            onClick={() => {
                                setDrawer(false);
                                setBodyLock(false);
                            }}
                        >
                            <Link
                                className="rootShoot-link-reset heading-6 text-noWrap"
                                to="/products"
                            >
                                Products
                            </Link>
                        </li>
                        <li
                            className="rootShoot-hidden"
                            onClick={() => {
                                setDrawer(false);
                                setBodyLock(false);
                            }}
                        >
                            <div className="badge-container">
                                <Link
                                    className="rootShoot-link-reset heading-6 text-noWrap"
                                    to="/wishlist"
                                >
                                    wishlist
                                </Link>
                                {wishlist.length > 0 && (
                                    <span className="number-badge-blue">
                                        {wishlist.length}
                                    </span>
                                )}
                            </div>
                        </li>
                        <li
                            onClick={() => {
                                setDrawer(false);
                                setBodyLock(false);
                                userSignout(setCurrentUser);
                            }}
                        >
                            <Link
                                className="rootShoot-link-reset heading-6 text-noWrap"
                                to="/"
                            >
                                (signout)
                            </Link>
                        </li>
                        <li
                            onClick={() => {
                                setDrawer(false);
                                setBodyLock(false);
                            }}
                        >
                            <Link
                                className="rootShoot-link-reset heading-6 text-noWrap"
                                to="/"
                            >
                                About us
                            </Link>
                        </li>
                    </ul>
                    <Link
                        className="rootShoot-hidden"
                        to="/"
                        onClick={() => {
                            setDrawer(false);
                            setBodyLock(false);
                        }}
                    >
                        <img
                            src={imgLogo}
                            alt="logo"
                            className="responsive-image"
                        />
                    </Link>
                </div>
                <div className="search-box">
                    <input
                        type="search"
                        placeholder="Search"
                        className="rootShoot-search"
                        ref={searchRef}
                        onChange={(e) => {
                            if (e.target.value === "") {
                                setSearchOpen(false);
                            } else {
                                setSearchOpen(true);
                                e.target.value &&
                                    filterDispatch({
                                        type: "SEARCH_TEXT",
                                        payload: {
                                            searchText: e.target.value,
                                        },
                                    });
                            }
                        }}
                        onKeyUp={(e) => {
                            if (e.key === "Enter") {
                                if (location.pathname !== "/products") {
                                    navigate("/products");
                                }
                                filterDispatch({
                                    type: "SEARCH_PRODUCTS",
                                    payload: {
                                        searchText: e.target.value,
                                    },
                                });
                                setSearchOpen(false);
                            }
                        }}
                    />
                    <div
                        className={`search-results vertical-list ${
                            filterState.searchResults.length > 0 &&
                            searchOpen &&
                            "search-results-show"
                        }`}
                    >
                        {filterState.searchResults.length > 0 &&
                            filterState.searchResults.map((item) => (
                                <div
                                    key={item._id}
                                    className="card search-result"
                                    onClick={() => {
                                        setSearchOpen(false);
                                        console.log("asassa");
                                        navigate(`/products/${item._id}`);
                                    }}
                                >
                                    <div className="card-badge-green">
                                        {item.type[0]}
                                    </div>
                                    <div className="card-body-horizontal">
                                        <img
                                            src={item.imgUrl}
                                            alt={item.name}
                                            className="card-side-image search-result-img"
                                        />
                                        <div className="card-side-content">
                                            <h3 className="card-title text-noWrap">
                                                {item.name}
                                            </h3>
                                            <p className="card-text">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Ea
                                                enim eligendi eos nam esse
                                                quisquam necessitatibus dolorem
                                                odio animi doloremque, quia
                                                suscipit repellendus ipsum
                                                fugiat vel molestiae. Officiis
                                                eum illo quis facere deleniti
                                                distinctio nam praesentium
                                                asperiores iste. Cumque,
                                                impedit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="appbar-btns">
                    <div className="badge-container rootShoot-shown ">
                        <Link
                            to="/wishlist"
                            className="rootShoot-link-reset icon-btn-green"
                        >
                            <BsFillBookmarkHeartFill />
                        </Link>
                        {wishlist.length > 0 && (
                            <span className="number-badge-blue">
                                {wishlist.length}
                            </span>
                        )}
                    </div>
                    <div className="badge-container">
                        <Link
                            onClick={() => {
                                setDrawer(false);
                                setBodyLock(false);
                            }}
                            to="cart"
                            className="rootShoot-link-reset icon-btn-green"
                        >
                            <FaShoppingCart />
                        </Link>
                        {cart.length > 0 && (
                            <span className="number-badge-blue">
                                {cart.length}
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <div className="appbar-fixed-filler"></div>
        </>
    );
};
