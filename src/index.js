import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { ScrollToTop } from "./components";
import {
	AuthProvider,
	FilterProvider,
	LoaderAndToastProvider,
	ProductProvider,
	WishlistAndCartProvider,
} from "./context";
import "./index.css";
import { makeServer } from "./server";

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
