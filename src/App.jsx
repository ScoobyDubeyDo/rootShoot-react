import { Route, Routes } from "react-router-dom";
import { Footer, Navbar, PrivateRoute, Spinner, Toast } from "./components";
import { useLoaderOrToast } from "./context";
import {
	Cart,
	FourOFour,
	Home,
	Products,
	Signin,
	Signup,
	SingleProduct,
	UserProfile,
	Wishlist,
} from "./pages";
import { ItemDetails, PriceDetails } from "./pages/Cart/components";

function App() {
	const { isLoading, toastMessage } = useLoaderOrToast();

	return (
		<>
			{isLoading && <Spinner />}
			{Object.values(toastMessage).every((e) => e) && (
				<Toast text={toastMessage.text} type={toastMessage.type} />
			)}
			<Navbar />
			<Routes>
				<Route path="*" element={<FourOFour />} />
				<Route path="/" element={<Home />} />
				<Route path="home" element={<Home />} />
				<Route path="products" element={<Products />} />
				<Route
					path="products/type/:categoryId"
					element={<Products />}
				/>

				<Route path="products/:productId" element={<SingleProduct />} />
				<Route element={<PrivateRoute switchPath={false} />}>
					<Route path="sign-up" element={<Signup />} />
					<Route path="sign-in" element={<Signin />} />
				</Route>
				<Route element={<PrivateRoute />}>
					<Route path="wishlist" element={<Wishlist />} />
					<Route path="profile" element={<UserProfile />} />
					<Route path="cart" element={<Cart />}>
						<Route index element={<ItemDetails />} />
						<Route
							path="price-details"
							element={<PriceDetails />}
						/>
					</Route>
				</Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
