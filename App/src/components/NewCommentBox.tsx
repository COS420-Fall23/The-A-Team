/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button, ButtonGroupProps } from "react-bootstrap";
import { AComment } from "../interfaces/AComment";

function NewCommentBox(props) {
    const [newCommentText, setNewCommentText] = useState("");

    function publishComment() {
        const newComm: AComment = {
            body: newCommentText
        };
        props.addComment(newComm);
        props.setAddingComment(false);
    }

    return (
        <div>
            <div>
                Post Text Box
                <input
                    data-testid="newPostTextBox"
                    type="text"
                    size={50}
                    onChange={(e) => setNewCommentText(e.target.value)}
                />
            </div>
            <Button
                data-testid="newPostSubmitButton"
                onClick={() => publishComment()}
            >
                Publish
            </Button>
        </div>
    );
}

export default NewCommentBox;
