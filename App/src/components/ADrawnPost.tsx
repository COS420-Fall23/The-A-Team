/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import NewPostBox from "./NewPostBox";

function ADrawnPost(props) {
    const [editingPost, setEditingPost] = useState(false);
    const [listForEditedPost, setListforEditedPost] = useState([]);
    const [votes, setVotes] = useState(0);

    return (
        <div className="post-container">
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
            <div className="post-content">
                {!editingPost ? (
                    <div>
                        <div id="aDrawnPostAuthorDiv" className="post-author">
                            {props.drawnPost.author}
                        </div>
                        <div id="aDrawnPostCourseDiv" className="post-course">
                            {props.drawnPost.course}
                        </div>
                        <div id="aDrawnPostTitleDiv" className="post-title">
                            {props.drawnPost.title}
                        </div>
                        <div id="aDrawnPostBodyDiv" className="">
                            {props.drawnPost.body}
                        </div>
                        <div>
                            <button onClick={() => setVotes(votes + 1)}>
                                Upvote
                            </button>
                            <button onClick={() => setVotes(votes - 1)}>
                                Downvote
                            </button>
                            <p>Votes: {votes}</p>
                        </div>
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
                                props.setAPost(
                                    props.postsOnScreen,
                                    props.setPostsOnScreen,
                                    listForEditedPost[0],
                                    props.index
                                );
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
