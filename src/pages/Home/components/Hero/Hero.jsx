import { useNavigate } from "react-router-dom";
import "./hero.css";

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
					<h1 className="heading-4 text-gutterBottom">
						Home Is Where My Plants Are
					</h1>
					<p className="heading-6 rootShoot-text-align-justify text-gutterBottom ">
						rootShoot helps you discover the best plants for your
						space, delivers them to your door and helps you look
						after them.
					</p>
					<p className="heading-6 rootShoot-text-align-justify text-gutterBottom rootShoot-shown">
						We have hundred of plants such as decorative plant,
						until beautiful flowers, ready to refresh your interior.
					</p>

					<button
						onClick={() => navigate("/products")}
						className="btn-filled-green  rootShoot-margin-center">
						Shop Plants
					</button>
				</div>
			</section>
		</header>
	);
};
