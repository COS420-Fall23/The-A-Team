/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import NewPostBox from "./NewPostBox";

function ADrawnPost(props) {
    const [editingPost, setEditingPost] = useState(false);
    const [listForEditedPost, setListforEditedPost] = useState([]);

    return (
        <div>
            <div id="aDrawnPostEditButtonDiv">
                {props.username == props.drawnPost.author ? (
                    <Button
                        onClick={() => {
                            setEditingPost(true);
                        }}
                    >
                        EditPost
                    </Button>
                ) : (
                    <div>Not Author</div>
                )}
            </div>
            <div>
                {!editingPost ? (
                    <div>
                        <div id="aDrawnPostAuthorDiv">
                            {props.drawnPost.author}
                        </div>
                        <div id="aDrawnPostCourseDiv">
                            {props.drawnPost.course}
                        </div>
                        <div id="aDrawnPostTitleDiv">
                            {props.drawnPost.title}
                        </div>
                        <div id="aDrawnPostBodyDiv">{props.drawnPost.body}</div>
                    </div>
                ) : (
                    <div>
                        <NewPostBox
                            anon={props.anon}
                            cookies={props.cookies}
                            postsOnScreen={listForEditedPost}
                            setPostsOnScreen={setListforEditedPost}
                        />
                        <Button
                            onClick={() => {
                                setEditingPost(false);
                                props.drawnPost = listForEditedPost[0];
                                setListforEditedPost([]);
                            }}
                        >
                            AcceptChanges
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ADrawnPost;
