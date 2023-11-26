/* eslint-disable react/prop-types */
import React from "react";
import { APost } from "../interfaces/APost";
import ADrawnPost from "./ADrawnPost";

function PostsBox(props) {
    return (
        <div>
            <strong>Posts:</strong>
            {props.postsOnScreen.map((post: APost) => (
                // eslint-disable-next-line react/jsx-key
                <ul>
                    <ADrawnPost drawnPost={post} />
                </ul>
                /*
                // eslint-disable-next-line react/jsx-key
                <ul>
                    <APost postBody={post}></APost>
                </ul>
                //*/
            ))}
        </div>
    );
}

export default PostsBox;
