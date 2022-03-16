import "./footer.css";
import { imgLogo } from "../images";

import {
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
    FaLinkedin,
} from "react-icons/fa";

export const Footer = () => {
    return (
        <footer>
            <span className="statement heading-6 rootShoot-margin-center">
                Made with
                <img src={imgLogo} className="responsive-image" alt="logo" />
                by Aman
            </span>
            <div className="media-links">
                <button className="icon-btn-green">
                    <FaInstagramSquare />
                </button>
                <button className="icon-btn-green">
                    <FaGithubSquare />
                </button>
                <button className="icon-btn-green">
                    <FaTwitterSquare />
                </button>
                <button className="icon-btn-green">
                    <FaLinkedin />
                </button>
            </div>
            <span className="copyright rootShoot-margin-center text-subtitle">
                copyright &copy; 2021 all rights reserved by rootShoot.
            </span>
        </footer>
    );
};
