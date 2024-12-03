import {render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from "./Header";

afterEach(() => {
    cleanup();
})

describe("Test header", () => {
    render(<Header />);
    const header = screen.getByTestId("header");
    const headerLogo = screen.getByTestId("header-logo");

    test("header Rendering", () => {
        expect(header).toBeInTheDocument();
        expect(header).toContainElement(headerLogo);
    })
})