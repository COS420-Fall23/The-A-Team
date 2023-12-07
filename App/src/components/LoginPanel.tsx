/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { CookiesProvider } from "react-cookie";
import { User } from "../interfaces/User.ts";
import { Button } from "react-bootstrap";
import "../App.css";
import Help from "./Help.tsx";
import Profile from "./Profile.tsx";
import CourseSearchPanel from "./CourseSearchPanel.tsx";
// eslint-disable-next-line react/prop-types
function LoginPanel(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(user: User) {
        props.setCookie("user", user, { path: "/" });
    }

    function handleLogout() {
        props.removeCookie("user", { path: "/" });
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleLogin({ username, password });
    }

    return (
        <CookiesProvider>
            <div id="loginBox">
                {props.cookies.user ? (
                    <>
                        <div>
                            <h2>You are user {props.cookies.user.username}</h2>
                            <Button
                                data-testid="logoutButton"
                                onClick={() => handleLogout()}
                            >
                                Logout
                            </Button>
                        </div>
                    </>
                ) : (
                    <div>
                        <form onSubmit={handleSubmit}>
                            <h2>Sign Up</h2>
                            <label className="input-label">
                                Username:
                                <input
                                    className="input-field"
                                    data-testid="usernameInputField"
                                    type="text"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </label>
                            <br />
                            <label className="input-label">
                                Password:
                                <input
                                    className="input-field"
                                    data-testid="passwordInputField"
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </label>
                            <label className="input-label">
                                First Name:
                                <input
                                    className="input-field"
                                    data-testid="firstNameInputField"
                                    type="text"
                                ></input>
                            </label>
                            <label className="input-label">
                                Last Name:
                                <input
                                    className="input-field"
                                    data-testid="lastNameInputField"
                                    type="text"
                                ></input>
                            </label>
                            <br />
                            <input
                                id="submit-button"
                                data-testid="loginSubmitButton"
                                type="submit"
                                value="Submit"
                            />
                            <p>Sign in</p>
                        </form>
                    </div>
                )}
            </div>
        </CookiesProvider>
    );
}

export default LoginPanel;
