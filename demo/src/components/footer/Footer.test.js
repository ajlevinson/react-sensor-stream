import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from "./Footer";

afterEach(() => {
    cleanup();
})

describe("footer Component", () => {
    render(<Footer />);
    const footer = screen.getByTestId("footer");
    const footerText = screen.getByTestId("footer-text");
    const currentYear = new Date().getFullYear();

    test("footer Rendering", () => {
        expect(footer).toBeInTheDocument();
        expect(footerText).toBeInTheDocument();
    })
})