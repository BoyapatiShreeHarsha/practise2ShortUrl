import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Box1 from "../Box1";
import Box4 from "../Box4";



describe("Test for box components", () => {
    test("initial stage for box1", () => {
        render(<Box1 />);
        const buttonEle = screen.getByTestId("startbtn");
        fireEvent.click(buttonEle);
    });

    test("initial stage for box3", () => {
        render(<Box4 />);
        const buttonEle = screen.getByTestId("startbtn");
        fireEvent.click(buttonEle);
    })
});
