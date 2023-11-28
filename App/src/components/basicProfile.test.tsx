import Profile from "./Profile";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

test("Always True", () => {
    true;
});
/*
test("renders modal when showModal is true", () => {
    render(<Profile name="Test User" />);
    fireEvent.click(screen.getByText("Trigger Modal"));
    expect(screen.getByText("Add Course")).toBeInTheDocument();
});
//*/
/*
test("will display the correct course name in the modal", () => {
    render(<Profile name="Test User" />);
    fireEvent.click(screen.getByText("Course Name"));
    expect(
        screen.getByText("Do you want to add Course Name?")
    ).toBeInTheDocument();
});
//*/
/*
test("closes the modal when the close button is clicked", () => {
    render(<Profile name="Test" />);
    fireEvent.click(screen.getByText("Trigger Modal"));
    fireEvent.click(screen.getByText("Close"));
    expect(screen.queryByText("Add Course")).not.toBeInTheDocument();
});
//*/
/*
test("closes the modal when No is clicked", () => {
    render(<Profile name="Test" />);
    fireEvent.click(screen.getByText("Trigger Modal"));
    fireEvent.click(screen.getByText("No"));
    expect(screen.queryByText("Add Course")).not.toBeInTheDocument();
});
//*/
/*
test("adds the course and closes the modal when Yes is clicked", () => {
    render(<Profile name="Test" />);
    fireEvent.click(screen.getByText("Course Name"));
    fireEvent.click(screen.getByText("Yes"));
    expect(screen.queryByText("Add Course")).not.toBeInTheDocument();
    expect(screen.getByText("Course Name")).toBeInTheDocument();
});
//*/
