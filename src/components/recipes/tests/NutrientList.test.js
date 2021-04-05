import React from "react";
import { render, screen } from "@testing-library/react";
import NutrientList from "../NutrientList";
import { MemoryRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "../../../configureStore";
import { login } from "../../../actionCreators/userActionCreators";

const recipe = {
	image: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
	title: "This is a title",
	author: "Brian Shapiro",
};

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
					<NutrientList
						title="Macronutrients"
						data={{
							fat: {
								name: "Fat",
								amount: 10,
								subNutrients: {
									saturatedFat: {
										name: "Saturated Fat",
										amount: "5",
									},
								},
							},
						}}
					/>
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
					<NutrientList
						title="Macronutrients"
						data={{
							fat: {
								name: "Fat",
								amount: 10,
								subNutrients: {
									saturatedFat: {
										name: "Saturated Fat",
										amount: "5",
									},
								},
							},
						}}
					/>
				</PersistGate>
			</MemoryRouter>
		</Provider>
	);

	expect(asFragment()).toMatchSnapshot();
});
