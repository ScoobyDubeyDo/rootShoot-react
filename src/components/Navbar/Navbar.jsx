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
import { SearchResults } from "./components";

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
                                profile
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
                            valueChangeSearch(e, setSearchOpen, filterDispatch);
                        }}
                        onKeyUp={(e) => {
                            keyPressSearch(
                                e,
                                location,
                                navigate,
                                filterDispatch,
                                setSearchOpen
                            );
                        }}
                    />
                    <SearchResults
                        searchOpen={searchOpen}
                        setSearchOpen={setSearchOpen}
                    />
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

const valueChangeSearch = (e, setSearchOpen, filterDispatch) => {
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
};

const keyPressSearch = (
    e,
    location,
    navigate,
    filterDispatch,
    setSearchOpen
) => {
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
};
