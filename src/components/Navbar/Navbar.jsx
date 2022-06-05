import { useEffect, useState } from "react";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { HiUser } from "react-icons/hi";
import { RiMenu4Line } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFilter, useWishlistAndCart } from "../../context";
import { useDebounce, useLockBodyScroll } from "../../hooks";
import { imgLogo } from "../images";
import { SearchResults } from "./components";
import "./navbar.css";

export const Navbar = () => {
	const { wishlist, cart } = useWishlistAndCart();
	const [drawer, setDrawer] = useState(false);
	const { filterDispatch } = useFilter();
	const [bodyLock, setBodyLock] = useState(false);
	const [searchOpen, setSearchOpen] = useState(false);
	const [searchText, setSearchText] = useState("");
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (location.pathname !== "/products") {
			setSearchText("");
		}
		setSearchOpen(false);
	}, [location.pathname]);

	const debouncedInput = useDebounce(searchText);

	useEffect(() => {
		valueChangeSearch(
			searchText,
			setSearchOpen,
			filterDispatch,
			debouncedInput
		);
	}, [debouncedInput, filterDispatch, searchText]);

	useLockBodyScroll(bodyLock);
	return (
		<>
			{}
			<div className="appbar-fixed rootShoot-appbar">
				<div className="appbar-menu rootShoot-appbar-menu">
					<button
						onClick={() => {
							setDrawer((prev) => !prev);
							setBodyLock((prev) => !prev);
						}}
						className="icon-btn-green">
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
							}}>
							<Link
								className="rootShoot-link-reset heading-6 text-noWrap"
								to="/">
								Home
							</Link>
						</li>
						<li
							onClick={() => {
								setDrawer(false);
								setBodyLock(false);
							}}>
							<Link
								className="rootShoot-link-reset heading-6 text-noWrap"
								to="/products">
								Products
							</Link>
						</li>
						<li
							className="rootShoot-hidden"
							onClick={() => {
								setDrawer(false);
								setBodyLock(false);
							}}>
							<Link
								to="/profile"
								className="rootShoot-link-reset heading-6 text-noWrap">
								Profile
							</Link>
						</li>
						<li
							className="rootShoot-hidden"
							onClick={() => {
								setDrawer(false);
								setBodyLock(false);
							}}>
							<div className="badge-container">
								<Link
									className="rootShoot-link-reset heading-6 text-noWrap"
									to="/wishlist">
									wishlist
								</Link>
								{wishlist.length > 0 && (
									<span className="number-badge-yellow">
										{wishlist.length}
									</span>
								)}
							</div>
						</li>
					</ul>
					<Link
						className="rootShoot-hidden"
						to="/"
						onClick={() => {
							setDrawer(false);
							setBodyLock(false);
						}}>
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
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
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
							className="rootShoot-link-reset icon-btn-green">
							<BsFillBookmarkHeartFill size={18} />
						</Link>
						{wishlist.length > 0 && (
							<span className="number-badge-yellow">
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
							className="rootShoot-link-reset icon-btn-green">
							<FaShoppingCart size={19} />
						</Link>
						{cart.length > 0 && (
							<span className="number-badge-yellow">
								{cart.length}
							</span>
						)}
					</div>
					<div className="badge-container rootShoot-shown ">
						<Link
							to="/profile"
							className="rootShoot-link-reset icon-btn-green">
							<HiUser size={22} />
						</Link>
					</div>
				</div>
			</div>
			<div className="appbar-fixed-filler"></div>
		</>
	);
};

const valueChangeSearch = (
	searchText,
	setSearchOpen,
	filterDispatch,
	debouncedInput
) => {
	if (searchText === "" || searchText.includes(" ")) {
		setSearchOpen(false);
	} else {
		setSearchOpen(true);
		!!searchText &&
			filterDispatch({
				type: "SEARCH_TEXT",
				payload: {
					searchText: debouncedInput,
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
