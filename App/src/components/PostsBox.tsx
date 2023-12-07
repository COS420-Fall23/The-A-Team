/* eslint-disable react/prop-types */
import React from "react";
import { APost } from "../interfaces/APost";
import ADrawnPost from "./ADrawnPost";

function PostsBox(props) {
    return (
        <div>
            <strong>Posts:</strong>
            {props.postsOnScreen.map((post: APost, index: number) => (
                // eslint-disable-next-line react/jsx-key
                <ul key={index} className="post-item">
                    <ADrawnPost
                        drawnPost={post}
                        username={props.cookies.user.username}
                        anon={props.anon}
                        cookies={props.cookies}
                        index={index}
                        setAPost={props.setAPost}
                        postsOnScreen={props.postsOnScreen}
                        setPostsOnScreen={props.setPostsOnScreen}
                    />
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
