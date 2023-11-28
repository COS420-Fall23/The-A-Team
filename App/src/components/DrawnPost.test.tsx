import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ADrawnPost from "./ADrawnPost";

test("renders correctly for non-author", () => {
    const drawnPost = {
        author: "JohnDoe",
        course: "Math101",
        title: "Algebra Basics",
        body: "Algebra Introduction"
    };
    const { queryByText, queryByRole } = render(
        <ADrawnPost username="JaneDoe" drawnPost={drawnPost} />
    );

    expect(queryByText("Not Author")).toBeInTheDocument();
    expect(queryByRole("button", { name: "EditPost" })).not.toBeInTheDocument();
});

test("renders edit button for author", () => {
    const drawnPost = {
        author: "JohnDoe",
        course: "Math101",
        title: "Algebra Basics",
        body: "Algebra Introduction"
    };
    const { queryByRole } = render(
        <ADrawnPost username="JohnDoe" drawnPost={drawnPost} />
    );

    expect(queryByRole("button", { name: "EditPost" })).toBeInTheDocument();
});

test("edit button click sets editing state", () => {
    const drawnPost = {
        author: "Johnny",
        course: "COS123",
        title: "Python Class",
        body: "Cant print hello world"
    };
    const { queryByRole, getByTestId } = render(
        <ADrawnPost username="JohnDoe" drawnPost={drawnPost} />
    );

    const editButton = queryByRole("button", { name: "EditPost" });
    if (editButton) {
        fireEvent.click(editButton);
    } else {
        throw new Error("Edit button was not found");
    }
});

test("accept changes button functionality", () => {
    const mockSetAPost = jest.fn();
    const drawnPost = {
        author: "Johnny",
        course: "COS123",
        title: "Python Class",
        body: "Cant print hello world"
    };
    const { queryByRole } = render(
        <ADrawnPost
            username="JohnDoe"
            drawnPost={drawnPost}
            setAPost={mockSetAPost}
            postsOnScreen={[]}
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            setPostsOnScreen={() => {}}
        />
    );
    //pretend (simulated)
    const editButton = queryByRole("button", { name: "EditPost" });
    if (editButton) {
        fireEvent.click(editButton);
    } else {
        throw new Error("Edit button not found");
    }

    const acceptChangesButton = queryByRole("button", {
        name: "AcceptChanges"
    });
    if (acceptChangesButton) {
        fireEvent.click(acceptChangesButton);
    } else {
        throw new Error("Accept changes button not found");
    }
    expect(mockSetAPost).toHaveBeenCalled();
});
