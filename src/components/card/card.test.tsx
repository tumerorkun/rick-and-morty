import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "./card";

test("renders Card", () => {
    render(
        <Card
            id="1"
            name="testName"
            status="unknown"
            species="testOrigin"
            image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        />
    );

    expect(screen.getByText(/testName/i)).toBeInTheDocument();
    expect(screen.getByText(/unknown/i)).toBeInTheDocument();
    expect(screen.getByText(/testOrigin/i)).toBeInTheDocument();
});
