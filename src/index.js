import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "./reducers/rootReducer";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./configureStore";

// const store = createStore(rootReducer, applyMiddleware(thunk));
// const persistor = persistReducer();

// const { store, persistor } = usePersist();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<PersistGate loading={null} persistor={persistor}>
					<App />
				</PersistGate>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
