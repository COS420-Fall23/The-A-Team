import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import { CookiesProvider } from "react-cookie";

test(" will render Navbar component", () => {
    const { getByText } = render(
        <CookiesProvider>
            <Navbar />
        </CookiesProvider>
    );

    expect(getByText("Post")).toBeInTheDocument();
    expect(getByText("Help")).toBeInTheDocument();
    expect(getByText("Profile")).toBeInTheDocument();
});

test("clicking on the navbar item updates the selected component", () => {
    const { getByText } = render(
        <CookiesProvider>
            <Navbar />
        </CookiesProvider>
    );

    const postButton = getByText("Post");
    fireEvent.click(postButton);
});

test(" active class applied to clicked navbar item", () => {
    const { getByText } = render(
        <CookiesProvider>
            <Navbar />
        </CookiesProvider>
    );

    const postButton = getByText("Post");
    fireEvent.click(postButton);

    expect(postButton).toHaveClass("active");
});

//All are good
