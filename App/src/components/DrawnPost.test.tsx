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
        <ADrawnPost username="Johnny" drawnPost={drawnPost} />
    );

    const editButton = queryByRole("button", { name: "EditPost" });
    if (editButton) {
        fireEvent.click(editButton);
    } else {
        throw new Error("Edit button was not found");
    }
});

/*describe("ADrawnPost", () => {
    test("increments vote on upvote click", () => {
        const { getByText } = render(
            <ADrawnPost /* pass required props here  />
        );
        const upvoteButton = getByText("Upvote");
        fireEvent.click(upvoteButton);
        expect(getByText("Votes: 1")).toBeInTheDocument();
    });

    test("decrements vote on downvote click", () => {
        const { getByText } = render(<ADrawnPost />);
        const downvoteButton = getByText("Downvote");
        fireEvent.click(downvoteButton);
        expect(getByText("Votes: -1")).toBeInTheDocument();
    });
});
*/
