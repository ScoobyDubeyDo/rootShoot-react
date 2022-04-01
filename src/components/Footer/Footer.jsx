import "./footer.css";
import { imgLogo } from "../images";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";

export const Footer = () => {
    return (
        <footer>
            <span className="statement heading-6 rootShoot-margin-center">
                Made with
                <img src={imgLogo} className="responsive-image" alt="logo" />
                by Aman
            </span>
            <div className="media-links">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/scoobydubeydo/"
                    className="icon-btn-green"
                >
                    <AiOutlineInstagram />
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/aman-can/"
                    className="icon-btn-green"
                >
                    <VscGithub />
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/ScoobyDubeyDo"
                    className="icon-btn-green"
                >
                    <RiTwitterLine />
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/dubey-aman/"
                    className="icon-btn-green"
                >
                    <FiLinkedin />
                </a>
            </div>
            <span className="copyright rootShoot-margin-center text-subtitle">
                copyright &copy; 2021 all rights reserved by rootShoot.
            </span>
        </footer>
    );
};
