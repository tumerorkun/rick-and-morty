import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "./header";
import userEvent from "@testing-library/user-event";

test("renders The Rick and Morty Characters Title", () => {
    render(<Header />);
    const title = screen.getByText(/The Rick and Morty Characters/i);
    expect(title).toBeInTheDocument();
});
test("Renders Logo", () => {
    const { container } = render(
        <Router>
            <Header backButton />
        </Router>
    );
    const logo = container.querySelector('svg[name="The Rick and Morty Logo"]');
    expect(logo).toBeInTheDocument();
});

test("Renders Back Button", () => {
    render(
        <Router>
            <Header backButton />
            <Link to="/details">detay</Link>
            <Switch>
                <Route path="/details">
                    <p>DETAILS</p>
                </Route>
                <Route path="/">
                    <p>HOME</p>
                </Route>
            </Switch>
        </Router>
    );
    // starts from home page
    expect(screen.getByText(/HOME/i)).toBeInTheDocument();
    // check back button exists
    const back = screen.getByText(/Back/i);
    expect(back).toBeInTheDocument();
    // go some other page
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/detay/i), leftClick);
    const detay = screen.getByText(/DETAILS/i);
    expect(detay).toBeInTheDocument();
    // use header button to go back
    userEvent.click(back, leftClick);
    const home = screen.getByText(/HOME/i);
    expect(home).toBeInTheDocument();
});
