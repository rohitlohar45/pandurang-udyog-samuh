import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import CustomToast from "./utils/customToast";
import firebaseApp from "./firebase/initialise";
import { ChakraProvider } from "@chakra-ui/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ChakraProvider>
			<Provider store={store}>
				<App />
				<CustomToast />
			</Provider>
		</ChakraProvider>
	</React.StrictMode>
);
