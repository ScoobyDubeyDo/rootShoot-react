import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { ProductProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <ProductProvider>
            <Router>
                <App />
            </Router>
        </ProductProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
