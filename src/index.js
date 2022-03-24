import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import {
    ProductProvider,
    FilterProvider,
    AuthProvider,
    WishlistProvider,
    LoaderProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <LoaderProvider>
            <ProductProvider>
                <FilterProvider>
                    <AuthProvider>
                        <WishlistProvider>
                            <Router>
                                <App />
                            </Router>
                        </WishlistProvider>
                    </AuthProvider>
                </FilterProvider>
            </ProductProvider>
        </LoaderProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
