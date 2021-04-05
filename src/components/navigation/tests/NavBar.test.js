import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../NavBar";
import { MemoryRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "../../../configureStore";

it("should render without crashing", () => {
	render(
		<Provider store={store}>
			<MemoryRouter>
				<PersistGate loading={null} persistor={persistor}>
					<NavBar />
				</PersistGate>
			</MemoryRouter>
		</Provider>
	);
});

it("should match screenshot", () => {
	const { asFragment } = render(
		<Provider store={store}>
			<MemoryRouter>
				<PersistGate loading={null} persistor={persistor}>
					<NavBar />
				</PersistGate>
			</MemoryRouter>
		</Provider>
	);

	expect(asFragment()).toMatchSnapshot();
});
