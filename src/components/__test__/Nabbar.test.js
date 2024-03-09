import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom'
import { MemoryRouter, Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history';
import App from "../../App";
import { store } from "../../app/store";

describe("Test for router-dom by navbar", () => {
    test.skip("link should redirect and update the history", async () => {
        const history = createMemoryHistory();

        render(
            <Provider store={store}>

                <Router history={history}>
                    <App />
                </Router>

            </Provider>
        )

        const link = screen.getByTestId("link-0");
        fireEvent.click(link);
        await waitFor(()=>{
            expect(history.location.pathname).toEqual('/');
        });
        

    });

    test("DOM render on clicking on link",()=>{
        render(
            <Provider store={store}>
                < >
                    <>
                        <MemoryRouter >
                            <App />
                        </MemoryRouter>
                    </>
                </>
            </Provider>
        );
        const link = screen.queryByTestId("link-0");
        fireEvent.click(link);
        const formele = screen.queryByTestId("form");
        expect(formele).toBeInTheDocument();

    })
});