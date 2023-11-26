/* eslint-disable react/prop-types */
import React from "react";

function ADrawnPost(props) {
    return (
        <div>
            <div id="aDrawnPostAuthorDiv">{props.drawnPost.author}</div>
            <div id="aDrawnPostCourseDiv">{props.drawnPost.course}</div>
            <div id="aDrawnPostTitleDiv">{props.drawnPost.title}</div>
            <div id="aDrawnPostBodyDiv">{props.drawnPost.body}</div>
        </div>
    );
}

export default ADrawnPost;
