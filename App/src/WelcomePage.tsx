/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import LoginPanel from "./components/LoginPanel.tsx";
//import { User } from "./interfaces/User.js";
import NewPostBox from "./components/NewPostBox.tsx";
//import PostList from "./components/PostList.tsx";
import PostsBox from "./components/PostsBox.tsx";
import { APost } from "./interfaces/APost.ts";

function SetAPost(
    postsOnScreen: APost[],
    setPostsOnScreen,
    newPost: APost,
    index: number
) {
    const newPostArray = postsOnScreen.splice(index, 1, newPost);
    setPostsOnScreen(newPostArray);
}

function WelcomePage(props): JSX.Element {
    const [postsOnScreen, setPostsOnScreen] = useState([]);
    const [anonMode, setAnonMode] = useState(false);

    return (
        <div className="App">
            {
                <div>
                    <LoginPanel
                        anonMode={anonMode}
                        setAnonMode={setAnonMode}
                        cookies={props.cookies}
                        setCookie={props.setCookie}
                        removeCookie={props.removeCookie}
                    />
                </div>
            }
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <NewPostBox
                anon={anonMode}
                cookies={props.cookies}
                postsOnScreen={postsOnScreen}
                setPostsOnScreen={setPostsOnScreen}
            ></NewPostBox>
            {/*<PostsList postsOnScreen={postsOnScreen}></PostsList>*/}
            <PostsBox
                postsOnScreen={postsOnScreen}
                setPostsOnScreen={setPostsOnScreen}
                cookies={props.cookies}
                anon={anonMode}
                setAPost={SetAPost}
            ></PostsBox>
        </div>
    );
}

export default WelcomePage;
