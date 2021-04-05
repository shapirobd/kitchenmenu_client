import React from "react";
import { render, screen } from "@testing-library/react";
import RecipeSteps from "../RecipeSteps";
import { MemoryRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "../../../configureStore";
import { login } from "../../../actionCreators/userActionCreators";

const steps = [
	{ number: 0, step: "This is the first step" },
	{ number: 1, step: "This is the second step" },
];

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
					<RecipeSteps steps={steps} />
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
					<RecipeSteps steps={steps} />
				</PersistGate>
			</MemoryRouter>
		</Provider>
	);

	expect(asFragment()).toMatchSnapshot();
});
