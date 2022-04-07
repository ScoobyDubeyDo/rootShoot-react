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
    LoaderAndToastProvider,
    WishlistAndCartProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <LoaderAndToastProvider>
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
        </LoaderAndToastProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
