/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import NewPostBox from "./NewPostBox";
import EditPostBox from "./EditPostBox";
import { APost } from "../interfaces/APost";

function newCommentPassIn(prevComms: APost[], newComm: APost) {
    prevComms = [...prevComms, newComm];
}

function ADrawnPost(props) {
    const [editingPost, setEditingPost] = useState(false);
    const [listForEditedPost, setListforEditedPost] = useState([]);
    const [votes, setVotes] = useState(0);
    const [creatingComment, setCreatingComment] = useState(false);

    return (
        <div className="post-container">
            <h2>{props.drawnPost.title}</h2>
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
                        <EditPostBox
                            anon={props.anon}
                            cookies={props.cookies}
                            postsOnScreen={listForEditedPost}
                            setPostsOnScreen={setListforEditedPost}
                            editMode={true}
                            editText={props.drawnPost.body}
                            editTitle={props.drawnPost.title}
                            editClass={props.drawnPost.course}
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
            <h4>Comments</h4>
            <div id="addCommentButtonDiv">
                {!creatingComment ? (
                    <Button
                        onClick={() => {
                            setCreatingComment(true);
                        }}
                    >
                        Comment
                    </Button>
                ) : (
                    <div>
                        <NewPostBox
                            anon={props.anon}
                            cookies={props.cookies}
                            postsOnScreen={props.drawnPost.comments}
                            setPostsOnScreen={newCommentPassIn}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ADrawnPost;
