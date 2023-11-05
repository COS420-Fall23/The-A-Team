/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import LoginPanel from "./components/LoginPanel.tsx";
//import { User } from "./interfaces/User.js";
import NewPostBox from "./components/NewPostBox.tsx";
//import PostList from "./components/PostList.tsx";

function WelcomePage(props): JSX.Element {
    const [postsOnScreen, setPostsOnScreen] = useState([]);

    return (
        <div className="App">
            {
                <div>
                    <LoginPanel
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
                postsOnScreen={postsOnScreen}
                setPostsOnScreen={setPostsOnScreen}
            ></NewPostBox>
            {/*<PostsList postsOnScreen={postsOnScreen}></PostsList>*/}
        </div>
    );
}

export default WelcomePage;
