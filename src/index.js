import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { ProductProvider, FilterProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <ProductProvider>
            <FilterProvider>
                <Router>
                    <App />
                </Router>
            </FilterProvider>
        </ProductProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
