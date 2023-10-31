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
            <header className="App-header">
                Welcome to the something something WebApp
            </header>
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
            <div>
                <p>Here, take this cool Windows wallpaper</p>
                <img
                    id="windowsWallpaper"
                    src={require("./assets/images/LockScreen_533edc733b885d0e1188f320562b68b577c84658b6bcd3b33b729493209ae815.jpg")}
                    alt="A Windows Wallpaper of waterside houses that looks nice. attempt 15"
                />
            </div>
        </div>
    );
}

export default WelcomePage;
