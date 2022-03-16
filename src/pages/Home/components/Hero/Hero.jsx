import "./hero.css";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
    const navigate = useNavigate();

    return (
        <header className="hero">
            <section className="bg-empty">
                <div></div>
            </section>
            <section className="bg-image"></section>
            <section className="bg-text">
                <div>
                    <h1 className="heading-3 text-gutterBottom">
                        Plants made easy
                    </h1>
                    <p className="heading-6 rootShoot-text-align-justify text-gutterBottom">
                        rootShoot helps you discover the best plants for your
                        space, delivers them to your door and helps you look
                        after them.
                    </p>
                    <button
                        onClick={() => navigate("/mock")}
                        className="btn-filled-green  rootShoot-margin-center"
                    >
                        Seed now !
                    </button>
                </div>
            </section>
        </header>
    );
};
