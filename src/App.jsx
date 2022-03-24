import Mockman from "mockman-js";
import { Routes, Route, Outlet } from "react-router-dom";
import {
    Cart,
    Home,
    Products,
    Signin,
    Signup,
    SingleProduct,
    Wishlist,
} from "./pages";
import { Navbar, Footer, PrivateRoute, Spinner } from "./components";
import { useLoader } from "./context";

function App() {
    const { isLoading } = useLoader();

    return (
        <>
            {isLoading && <Spinner />}
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Outlet />
                            <Footer />
                        </>
                    }
                >
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route
                        path="products/type/:categoryId"
                        element={<Products />}
                    />
                    <Route
                        path="products/:productId"
                        element={<SingleProduct />}
                    />

                    <Route element={<PrivateRoute switchPath={false} />}>
                        <Route path="sign-up" element={<Signup />} />
                        <Route path="sign-in" element={<Signin />} />
                    </Route>
                    <Route element={<PrivateRoute />}>
                        <Route path="wishlist" element={<Wishlist />} />
                        <Route path="cart" element={<Cart />} />
                    </Route>
                </Route>

                <Route path="mock" element={<Mockman />} />
            </Routes>
        </>
    );
}

export default App;
