import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom'
import Form from "../Form";
import { Provider } from 'react-redux'
import { store } from "../../app/store"
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import axios from "axios";
// import { __esModule } from "redux-persist/lib/storage";


let persistor = persistStore(store);

jest.mock("axios");

const mockedAxios = jest.mocked(axios);

describe("testing the form,redux, and api calls", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    mockedAxios.post.mockResolvedValueOnce({
        data: {
            "result_url": "https://cleanuri.com/g09Dm3"
        },
    });
    test("initial state rendering the form", () => {
        render(
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Form />
                </PersistGate>
            </Provider>
        )

        const formEle = screen.getByTestId("form");
        const shortBtnEle = screen.getByTestId("shortbtn");

    });

    test("validation of form input", () => {
        render(
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Form />
                </PersistGate>
            </Provider>
        )

        const formEle = screen.getByTestId("form-input");
        const form = screen.getByTestId("form");
        const shortBtnEle = screen.getByTestId("shortbtn");
        fireEvent.change(formEle, { target: { value: "hello" } });
        fireEvent.click(shortBtnEle);
        expect(form).toHaveClass("error");

        fireEvent.change(formEle, { target: { value: "https://fonts.google.com/" } });
        fireEvent.click(shortBtnEle);
        expect(form).not.toHaveClass("error");
    });

 

    test("click function of button", async () => {
        // Mock the writeText method
        const originalClipboard = { ...navigator.clipboard };
        const writeTextMock = jest.fn();
        Object.assign(navigator, {
            clipboard: {
                ...originalClipboard,
                writeText: writeTextMock,
            },
        });
        render(
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Form />
                </PersistGate>
            </Provider>
        )

        const formEle = screen.getByTestId("form-input");
        const form = screen.getByTestId("form");
        const shortBtnEle = screen.getByTestId("shortbtn");

        fireEvent.change(formEle, { target: { value: "https://fonts.google.com/" } });
        fireEvent.click(shortBtnEle);
        expect(form).not.toHaveClass("error");
        let clickbtn;
        await waitFor(() => {
            clickbtn = screen.queryByTestId("button0");
            expect(clickbtn).toHaveTextContent(/copy/i);
        })
        fireEvent.click(clickbtn);
        await waitFor(() => expect(writeTextMock).toHaveBeenCalled());
        
        expect(clickbtn).toHaveTextContent(/copied!/i);


    });

    test("checking persist data", async () => {

        const {rerender} = render(
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Form />
                </PersistGate>
            </Provider>
        )

        const formEle = screen.getByTestId("form-input");
        const form = screen.getByTestId("form");
        const shortBtnEle = screen.getByTestId("shortbtn");

        fireEvent.change(formEle, { target: { value: "https://fonts.google.com/" } });
        fireEvent.click(shortBtnEle);
        expect(form).not.toHaveClass("error");
        let clickbtn;
        await waitFor(() => {
            clickbtn = screen.queryByTestId("button0");
            expect(clickbtn).toHaveTextContent(/copy/i);
        })

        rerender(
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Form />
                </PersistGate>
            </Provider>
        )

        await waitFor(() => {
            clickbtn = screen.queryByTestId("button0");
            expect(clickbtn).toHaveTextContent(/copy/i);
        })

    });



});