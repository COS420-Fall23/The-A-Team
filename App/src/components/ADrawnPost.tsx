/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "react-bootstrap";

function ADrawnPost(props) {
    return (
        <div>
            <div id="aDrawnPostEditButtonDiv">
                {props.username == props.drawnPost.author ? (
                    <Button>EditPost</Button>
                ) : (
                    <div>Not Author</div>
                )}
            </div>
            <div id="aDrawnPostAuthorDiv">{props.drawnPost.author}</div>
            <div id="aDrawnPostCourseDiv">{props.drawnPost.course}</div>
            <div id="aDrawnPostTitleDiv">{props.drawnPost.title}</div>
            <div id="aDrawnPostBodyDiv">{props.drawnPost.body}</div>
        </div>
    );
}

export default ADrawnPost;
