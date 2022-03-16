import "./navbar.css";
import imgLogo from "../images/img-logo.png";
import textLogo from "../images/text-logo.png";
import { Link } from "react-router-dom";
import { FaSignOutAlt, FaShoppingCart } from "react-icons/fa";
import { BsFillBookmarkHeartFill } from "react-icons/bs";

export const Navbar = () => {
    return (
        <>
            <div className="appbar-standard rootShoot-appbar">
                <div className="appbar-hero">
                    <Link to="/">
                        <img
                            src={imgLogo}
                            alt="logo"
                            className="responsive-image"
                        />
                    </Link>
                </div>
                <img
                    id="textLogo"
                    className="responsive-image"
                    src={textLogo}
                />
                <input
                    type="search"
                    placeholder="Search"
                    className="rootShoot-search"
                />
                <div className="appbar-btns">
                    <Link
                        to="/sign-in"
                        className="rootShoot-link-reset icon-btn-green"
                    >
                        <FaSignOutAlt />
                    </Link>
                    <div className="badge-container">
                        <Link
                            to="/wishlist"
                            className="rootShoot-link-reset icon-btn-green"
                        >
                            <BsFillBookmarkHeartFill />
                        </Link>
                        <span className="number-badge-blue">13</span>
                    </div>
                    <div className="badge-container">
                        <Link
                            to="cart"
                            className="rootShoot-link-reset icon-btn-green"
                        >
                            <FaShoppingCart />
                        </Link>
                        <span className="number-badge-blue">5</span>
                    </div>
                </div>
            </div>
            <div className="appbar-fixed-filler"></div>
        </>
    );
};
