import App from "./App";
import SignUpPage from "./user/SignUpPage";
import HomePage from "./home/HomePage";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "../configureStore";
import jwt from "jsonwebtoken";
import axios from "axios";
import "@testing-library/jest-dom/extend-expect";

const user = {
	first_name: "Brian",
	last_name: "Shapiro",
	username: "shapirobd",
	email: "briandavidshapiro@gmail.com",
	password: "testPassword!",
	weight: "165",
	weight_goal: "160",
	calorie_goal: "2000",
};

const token = jwt.sign(
	{ username: user.username },
	process.env.REACT_APP_SECRET_KEY
);

beforeAll(async () => {
	await axios.delete(`http://localhost:5000/users/${user.username}`);
});

describe("smoke test", () => {
	it("renders without crashing", async () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<PersistGate loading={null} persistor={persistor}>
						<App />
					</PersistGate>
				</MemoryRouter>
			</Provider>
		);
	});
});

describe("to register page", () => {
	it("allows user to go to register page", async () => {
		const { getByText } = render(
			<Provider store={store}>
				<MemoryRouter>
					<PersistGate loading={null} persistor={persistor}>
						<App />
					</PersistGate>
				</MemoryRouter>
			</Provider>
		);
		const registerBtn = getByText("Sign up");
		fireEvent.click(registerBtn);
		expect(getByText("First Name")).toBeInTheDocument();
		expect(getByText("Last Name")).toBeInTheDocument();
		expect(getByText("Username")).toBeInTheDocument();
		expect(getByText("Email")).toBeInTheDocument();
		expect(getByText("Password")).toBeInTheDocument();
		expect(getByText("Next")).toBeInTheDocument();
	});
});

describe("registering a user", () => {
	it("allows user to go to register page", async () => {
		const { getByText, getByRole } = render(
			<Provider store={store}>
				<MemoryRouter>
					<PersistGate loading={null} persistor={persistor}>
						<SignUpPage />
					</PersistGate>
				</MemoryRouter>
			</Provider>
		);
		const nextBtn = getByText("Next");
		getByRole("text", { name: "First Name" });
		fireEvent.change(getByRole("text", { name: "First Name" }), {
			target: { value: "Brian" },
		});
		fireEvent.change(getByRole("text", { name: "Last Name" }), {
			target: { value: "Shapiro" },
		});
		fireEvent.change(getByRole("text", { name: "Username" }), {
			target: { value: "shapirobd" },
		});
		fireEvent.change(getByRole("email", { name: "Email" }), {
			target: { value: "briandavidshapiro@gmail.com" },
		});
		fireEvent.change(getByRole("password", { name: "Password" }), {
			target: { value: "testPassword!" },
		});
		fireEvent.click(nextBtn);
		expect(getByRole("text", { name: "Weight" })).toBeInTheDocument();
		expect(getByRole("text", { name: "Weight Goal" })).toBeInTheDocument();
		expect(getByRole("text", { name: "Calorie Goal" })).toBeInTheDocument();
		fireEvent.change(getByRole("text", { name: "Weight" }), {
			target: { value: "165" },
		});
		fireEvent.change(getByRole("text", { name: "Weight Goal" }), {
			target: { value: "160" },
		});
		fireEvent.change(getByRole("text", { name: "Calorie Goal" }), {
			target: { value: "2000" },
		});
		fireEvent.click(nextBtn);
		expect(getByText("Brian")).toBeInTheDocument();
		expect(getByText("Shapiro")).toBeInTheDocument();
		expect(getByText("shapirobd")).toBeInTheDocument();
		expect(getByText("briandavidshapiro@gmail.com")).toBeInTheDocument();
		expect(getByText("165")).toBeInTheDocument();
		expect(getByText("160")).toBeInTheDocument();
		expect(getByText("2000")).toBeInTheDocument();
		const finishBtn = getByRole("button", { name: "Finish" });
		fireEvent.click(finishBtn);
		setTimeout(() => {
			expect(getByText("Logout")).toBeInTheDocument();
		}, 1000);
	});
});

describe("bookmarking a recipe", () => {
	it("allows user to add a recipe to their list of bookmarks", async () => {
		const { getByRole } = render(
			<Provider store={store}>
				<MemoryRouter>
					<PersistGate loading={null} persistor={persistor}>
						<HomePage />
					</PersistGate>
				</MemoryRouter>
			</Provider>
		);
		setTimeout(() => {
			const recipeLink = getByRole("link", { name: 716426 });
			fireEvent.click(recipeLink);
		}, 1000);
		setTimeout(() => {
			expect(getByRole("button", { name: "Bookmark" })).toBeInTheDocument();
			fireEvent.click(getByRole("button", { name: "Bookmark" }));
			expect(getByRole("button", { name: "Unbookmark" })).toBeInTheDocument();
		}, 1000);
	});
});

describe("adding a recipe as an eaten meal", () => {
	it("allows user to add a recipe to their list of bookmarks", async () => {
		const { getByRole } = render(
			<Provider store={store}>
				<MemoryRouter>
					<PersistGate loading={null} persistor={persistor}>
						<HomePage />
					</PersistGate>
				</MemoryRouter>
			</Provider>
		);
		setTimeout(() => {
			const recipeLink = getByRole("link", { name: 716426 });
			fireEvent.click(recipeLink);
		}, 1000);
		setTimeout(() => {
			expect(getByRole("button", { name: "Bookmark" })).toBeInTheDocument();
			fireEvent.click(getByRole("button", { name: "Bookmark" }));
			expect(getByRole("button", { name: "Unbookmark" })).toBeInTheDocument();
		}, 1000);
	});
});
