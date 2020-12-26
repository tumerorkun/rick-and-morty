import React from "react";
import { render, screen } from "@testing-library/react";
import { HomePage } from "./home";
// eslint-disable-next-line jest/no-mocks-import
import "../../__mocks__/intersectionObserverMock";

test("renders The Rick and Morty Characters header", () => {
    render(<HomePage />);
    const linkElement = screen.getByText(/The Rick and Morty Characters/i);
    expect(linkElement).toBeInTheDocument();
});
