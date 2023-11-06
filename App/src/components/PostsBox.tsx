/* eslint-disable react/prop-types */
import React from "react";
import APost from "./APost";

function PostsBox(props) {
    return (
        <div>
            <strong>Posts:</strong>
            {props.postsOnScreen.map((post: string) => (
                // eslint-disable-next-line react/jsx-key
                <ul>{post}</ul>
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
