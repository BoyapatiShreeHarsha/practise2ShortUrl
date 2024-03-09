import { render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom'
import { MemoryRouter, BrowserRouter, Router } from "react-router-dom";
import App from "./App";
import { Provider } from 'react-redux'
import { store } from "./app/store"
import Home from './components/Home';
import Navbar from './components/Navbar';


jest.mock('./components/Home');

jest.mock('./components/Navbar');

describe("Test for router-dom", () => {
    test("should render home on default route", () => {
        Home.mockImplementation(() => <div data-testid="homeComponent" />);
        Navbar.mockImplementation(() => <div data-testid="navbarComponent" />);
        render(
            <Provider store={store}>
                < >
                    <>
                        <MemoryRouter>
                            <App />
                        </MemoryRouter>
                    </>
                </>
            </Provider>
        );
        const home = screen.queryByTestId("homeComponent");
        const navbar = screen.queryByTestId("navbarComponent");
        expect(home).toBeInTheDocument();
        expect(navbar).toBeInTheDocument();
    });

    test("should not render home on random route", () => {
        Home.mockImplementation(() => <div data-testid="homeComponent" />);
        Navbar.mockImplementation(() => <div data-testid="navbarComponent" />)
        render(
            <Provider store={store}>
                < >
                    <>
                        <MemoryRouter initialEntries={['/about']}>
                            <App />
                        </MemoryRouter>
                    </>
                </>
            </Provider>
        );
        const home = screen.queryByTestId("homeComponent");
        const navbar = screen.queryByTestId("navbarComponent");
        expect(home).not.toBeInTheDocument();
        expect(navbar).toBeInTheDocument();
    });

});


