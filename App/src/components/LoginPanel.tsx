/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { CookiesProvider } from "react-cookie";
import { User } from "../interfaces/User.ts";
import { Button } from "react-bootstrap";
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
            <div>
                {props.cookies.user ? (
                    <div>
                        <h2>You are user {props.cookies.user.username}</h2>
                        <Button
                            data-testid="logoutButton"
                            onClick={() => handleLogout()}
                        >
                            Logout
                        </Button>
                    </div>
                ) : (
                    <div>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Username:
                                <input
                                    data-testid="usernameInputField"
                                    type="text"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </label>
                            <br />
                            <label>
                                Password:
                                <input
                                    data-testid="passwordInputField"
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </label>
                            <br />
                            <input
                                data-testid="loginSubmitButton"
                                type="submit"
                                value="Submit"
                            />
                        </form>
                    </div>
                )}
            </div>
        </CookiesProvider>
    );
}

export default LoginPanel;
