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
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
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
    </React.StrictMode>,
    document.getElementById("root")
);
