import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { PopUp } from "./PopUp";


describe("PopUp test", () => {
    render(<PopUp title="test" description="lorem ispum" closePopup={jest.fn()}/>);

    test("check render", () => {
        expect(screen.getByText("test")).toBeInTheDocument();
        expect(screen.getByText("lorem ispum")).toBeInTheDocument();
    })
})