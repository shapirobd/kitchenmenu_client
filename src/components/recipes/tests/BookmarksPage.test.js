import React from "react";
import { render, screen } from "@testing-library/react";
import BookmarksPage from "../BookmarksPage";
import { MemoryRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "../../../configureStore";
import { login, register } from "../../../actionCreators/userActionCreators";

const user = {
	first_name: "Test",
	last_name: "User",
	username: "testuser123",
	email: "testuser123@gmail.com",
	password: "testPassword!",
	weight: "165",
	weight_goal: "160",
	calorie_goal: "2000",
};

beforeAll(async () => {
	await store.dispatch(register(user));
	await store.dispatch(
		login({ username: user.username, password: user.password })
	);
});

describe("smoke test", () => {
	it("should render without crashing", () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<PersistGate loading={null} persistor={persistor}>
						<BookmarksPage />
					</PersistGate>
				</MemoryRouter>
			</Provider>
		);
	});
});

describe("snapshot test", () => {
	it("should match screenshot", () => {
		const { asFragment } = render(
			<Provider store={store}>
				<MemoryRouter>
					<PersistGate loading={null} persistor={persistor}>
						<BookmarksPage />
					</PersistGate>
				</MemoryRouter>
			</Provider>
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
