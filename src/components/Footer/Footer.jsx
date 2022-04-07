import "./footer.css";
import { imgLogo } from "../images";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";

export const Footer = () => {
    return (
        <footer className="vertical-list">
            <div className="vertical-list sub-footer">
                <span>
                    <img
                        src={imgLogo}
                        className="responsive-image"
                        alt="logo"
                    />
                </span>
                <span className="horizontal-list footer-text">
                    <span className="vertical-list">
                        <p className="heading-6">Quick Links</p>
                        <p className="text-subtitle">Contact Us</p>
                        <p className="text-subtitle">FAQs</p>
                        <p className="text-subtitle">Privacy policy</p>
                    </span>
                    <span className="vertical-list">
                        <p className="heading-6">Catalog</p>
                        <p className="text-subtitle">Cacti</p>
                        <p className="text-subtitle">Succulent</p>
                        <p className="text-subtitle">Monstera</p>
                    </span>
                </span>
                <div className="vertical-list">
                    <span className="text-align-center">Social Links</span>
                    <span className="horizontal-list media-links">
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
                    </span>
                </div>
            </div>
            <span className="copyright rootShoot-margin-center text-align-center text-subtitle">
                copyright &copy; 2021 all rights reserved by rootShoot.
            </span>
        </footer>
    );
};
