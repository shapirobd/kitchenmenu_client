import React from "react";
import { render, screen } from "@testing-library/react";
import DietList from "../DietList";
import { MemoryRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "../../../configureStore";
import { login } from "../../../actionCreators/userActionCreators";
import { ALL_DIETS } from "../../../constants";

beforeAll(async () => {
	await store.dispatch(
		login({ username: "shapirobd", password: "Pot3ntiat321!" })
	);
});

it("should render without crashing", () => {
	render(
		<Provider store={store}>
			<MemoryRouter>
				<PersistGate loading={null} persistor={persistor}>
					<DietList diets={ALL_DIETS} />
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
					<DietList diets={ALL_DIETS} />
				</PersistGate>
			</MemoryRouter>
		</Provider>
	);

	expect(asFragment()).toMatchSnapshot();
});
