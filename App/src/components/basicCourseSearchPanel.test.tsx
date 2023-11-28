import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CourseSearchPanel from "./CourseSearchPanel";

describe("CourseSearchPanel Tests", () => {
    const mockOnCourseClick = jest.fn();

    beforeEach(() => {
        render(<CourseSearchPanel onCourseClick={mockOnCourseClick} />);
    });
    /*
    it("renders search options", () => {
        const options = screen.getAllByRole("button");
        expect(options.length).toBe(4);
    });
    //*/
    it("changes search option on button click", () => {
        const subjectButton = screen.getByText("Subject");
        fireEvent.click(subjectButton);
        expect(subjectButton).toHaveClass("btn-primary");
    });

    it("updates search term on input change", () => {
        const input = screen.getByPlaceholderText(
            "Type your search here..."
        ) as HTMLInputElement;
        fireEvent.change(input, { target: { value: "Math" } });
        expect(input.value).toBe("Math");
    });
    /*
    it("calls onCourseClick when a course result is clicked", () => {
        // Assuming the component has a course to display
        const course = screen.getByText("Course Name");
        fireEvent.click(course);
        expect(mockOnCourseClick).toHaveBeenCalledWith("Course Name");
    });
    //*/
    /*
    it("displays search results on search", () => {
        // Assuming search results are provided by the component's context
        const searchButton = screen.getByText("Search");
        fireEvent.click(searchButton);
        const results = screen.getAllByTestId("course-result");
        expect(results.length).toBeGreaterThan(0);
    });
    //*/
});
