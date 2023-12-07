import React, { useState } from "react";
import "../App.css";
import Profile from "./Profile";
import { useCookies } from "react-cookie";
import Help from "./Help";
import NewPostBox from "./NewPostBox";

const Navbar: React.FC = () => {
    const [selectedComponent, setSelectedComponent] = useState("");

    const handleComponentClick = (componentName: string) => {
        setSelectedComponent(componentName);
    };

    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const [anonMode, setAnonMode] = useState(false);

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
                        <NewPostBox />
                    </div>
                )}
                {selectedComponent === "Help" && (
                    <div>
                        <Help gptApiToken="" />
                    </div>
                )}
                {selectedComponent === "Profile" && cookies.user && (
                    <div id="help">
                        <Profile
                            name={cookies.user.username}
                            anonMode={anonMode}
                            setAnonMode={setAnonMode}
                        ></Profile>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
