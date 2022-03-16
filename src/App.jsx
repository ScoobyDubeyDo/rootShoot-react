import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Cart, Home } from "./pages";
import { Navbar, Footer } from "./components";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cart" element={<Cart />} />
                <Route path="mock" element={<Mockman />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
