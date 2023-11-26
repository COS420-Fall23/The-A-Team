import React from "react";
import { render, screen } from "@testing-library/react";

test("Login button appears on the page", () => {
    const loginButton = screen.getByRole("button", {
        name: /Submit/i
    });
    expect(loginButton).toBeInTheDocument();
});

test("Pressing Login button logs in the user", () => {
    const loggedIn = screen.getByRole("button", {
        name: /Submit/i
    });
    loggedIn.click();
    const loggedInButton = screen.getByRole("button", {
        name: /Logout/i
    });
    expect(loggedInButton).toBeInTheDocument();
});

test("There is a create feedback button", () => {
    const feedButton = screen.getByRole("button", {
        name: /Start new post/i
    });
    expect(feedButton).toBeInTheDocument();
});
