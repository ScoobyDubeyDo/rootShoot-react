import "./navbar.css";
import { imgLogo } from "../images";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { useWishlistAndCart, useAuth } from "../../context";
import { RiMenu4Line } from "react-icons/ri";
import { useState } from "react";
import { userSignout } from "../../utils";

export const Navbar = () => {
    const { wishlist, cart } = useWishlistAndCart();
    const [drawer, setDrawer] = useState(false);
    const { setCurrentUser } = useAuth();

    return (
        <>
            <div className="appbar-fixed rootShoot-appbar">
                <div className="appbar-menu rootShoot-appbar-menu">
                    <button
                        onClick={() => setDrawer((prev) => !prev)}
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
                        <li onClick={() => setDrawer(false)}>
                            <Link
                                className="rootShoot-link-reset heading-6 text-noWrap"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li onClick={() => setDrawer(false)}>
                            <Link
                                className="rootShoot-link-reset heading-6 text-noWrap"
                                to="/products"
                            >
                                Products
                            </Link>
                        </li>
                        <li
                            className="rootShoot-hidden"
                            onClick={() => setDrawer(false)}
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
                        <li onClick={() => setDrawer(false)}>
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
                        onClick={() => setDrawer(false)}
                    >
                        <img
                            src={imgLogo}
                            alt="logo"
                            className="responsive-image"
                        />
                    </Link>
                </div>

                <input
                    type="search"
                    placeholder="Search"
                    className="rootShoot-search"
                />
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
                            onClick={() => setDrawer(false)}
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
