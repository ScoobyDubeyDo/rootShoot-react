import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "./components";
import "./index.css";
import {
    ProductProvider,
    FilterProvider,
    AuthProvider,
    LoaderProvider,
    WishlistAndCartProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <LoaderProvider>
            <ProductProvider>
                <FilterProvider>
                    <AuthProvider>
                        <WishlistAndCartProvider>
                            <Router>
                                <ScrollToTop>
                                    <App />
                                </ScrollToTop>
                            </Router>
                        </WishlistAndCartProvider>
                    </AuthProvider>
                </FilterProvider>
            </ProductProvider>
        </LoaderProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
