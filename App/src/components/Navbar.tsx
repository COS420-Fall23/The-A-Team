/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "../App.css";
import Profile from "./Profile";
//import { useCookies } from "react-cookie";
import Help from "./Help";
import NewPostBox from "./NewPostBox";
import PostsBox from "./PostsBox";
import { APost } from "../interfaces/APost";

function SetAPost(
    postsOnScreen: APost[],
    setPostsOnScreen,
    newPost: APost,
    index: number
) {
    const newPostArray = [...postsOnScreen];
    newPostArray.splice(index, 1, newPost);
    setPostsOnScreen(newPostArray);
}

function Navbar(props): JSX.Element {
    const [selectedComponent, setSelectedComponent] = useState("");

    const handleComponentClick = (componentName: string) => {
        setSelectedComponent(componentName);
    };

    const [anonMode, setAnonMode] = useState(false);
    const [postsOnScreen, setPostsOnScreen] = useState([]);

    return (
        <div>
            <div className="navbar">
                <button
                    className={`navbar-item ${
                        selectedComponent === "NewPostBox" ? "active" : ""
                    }`}
                    onClick={() => handleComponentClick("NewPostBox")}
                >
                    Post
                </button>
                <button
                    className={`navbar-item ${
                        selectedComponent === "Help" ? "active" : ""
                    }`}
                    onClick={() => handleComponentClick("Help")}
                >
                    Help
                </button>
                <button
                    className={`navbar-item ${
                        selectedComponent === "Profile" ? "active" : ""
                    }`}
                    onClick={() => handleComponentClick("Profile")}
                >
                    Profile
                </button>
            </div>
            <div>
                {selectedComponent === "NewPostBox" && (
                    <div>
                        <NewPostBox
                            anon={anonMode}
                            cookies={props.cookies}
                            postsOnScreen={postsOnScreen}
                            setPostsOnScreen={setPostsOnScreen}
                        />
                        <PostsBox
                            postsOnScreen={postsOnScreen}
                            setPostsOnScreen={setPostsOnScreen}
                            cookies={props.cookies}
                            anon={anonMode}
                            setAPost={SetAPost}
                        />
                    </div>
                )}
                {selectedComponent === "Help" && (
                    <div>
                        <Help gptApiToken="" />
                    </div>
                )}
                {selectedComponent === "Profile" && props.cookies.user && (
                    <div id="help">
                        <Profile
                            name={props.cookies.user.username}
                            anonMode={anonMode}
                            setAnonMode={setAnonMode}
                        ></Profile>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
