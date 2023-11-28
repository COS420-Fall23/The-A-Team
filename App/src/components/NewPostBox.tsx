/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

function NewPostBox(props) {
    const [writingNewPost, setWritingNewPost] = useState(false);
    const [newPostText, setNewPostText] = useState("");

    function publishPost() {
        // This is where we would send to backend
        // We would use the cookie's user token and send it into the backend

        props.setPostsOnScreen([...props.postsOnScreen, newPostText]);
        setNewPostText("");
        setWritingNewPost(false);
    }

    return (
        <div>
            {!writingNewPost ? (
                <Button
                    data-testid="startNewPostButton"
                    onClick={() => setWritingNewPost(true)}
                >
                    Start new post
                </Button>
            ) : (
                <div>
                    <input
                        id="postBox"
                        data-testid="newPostTextBox"
                        type="text"
                        size={50}
                        onChange={(e) => setNewPostText(e.target.value)}
                    />
                    <Button
                        data-testid="newPostSubmitButton"
                        onClick={() => publishPost()}
                    >
                        Publish
                    </Button>
                </div>
            )}
        </div>
    );
}

export default NewPostBox;
