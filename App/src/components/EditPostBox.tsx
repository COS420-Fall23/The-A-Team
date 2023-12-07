/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { APost } from "../interfaces/APost";

function EditPostBox(props) {
    const [writingNewPost, setWritingNewPost] = useState(true);
    const [newPostText, setNewPostText] = useState(props.editText);
    const [newPostTitle, setNewPostTitle] = useState(props.editTitle);
    const [newPostClass, setNewPostClass] = useState(props.editClass);

    function publishPost() {
        // This is where we would send to backend
        // We would use the cookie's user token and send it into the backend

        const newPost: APost = {
            author: props.anon ? "BananaMan" : props.cookies.user.username,
            course: newPostClass,
            title: newPostTitle,
            body: newPostText //,
            //comments: []
        };

        props.setPostsOnScreen([...props.postsOnScreen, newPost]);
        setNewPostText("");
        setNewPostClass("Class102");
        setNewPostTitle("HelloAgain");
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
                    <div>
                        Post Title
                        <input
                            data-testid="newPostTitleBox"
                            type="text"
                            size={50}
                            onChange={(e) => setNewPostTitle(e.target.value)}
                            value={newPostTitle}
                        />
                    </div>
                    <div>
                        Post Course Box
                        <input
                            data-testid="newPostClassTextBox"
                            type="text"
                            size={50}
                            onChange={(e) => setNewPostClass(e.target.value)}
                            value={newPostClass}
                        />
                    </div>
                    <div>
                        Post Text Box
                        <input
                            data-testid="newPostTextBox"
                            type="text"
                            size={50}
                            onChange={(e) => setNewPostText(e.target.value)}
                            value={newPostText}
                        />
                    </div>
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

export default EditPostBox;
