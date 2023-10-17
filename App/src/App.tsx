import React from "react";
import WelcomePage from "./WelcomePage.tsx";
import LoginPage from "./LoginPage.js";
import { Cookies, CookiesProvider, useCookies } from "react-cookie";
import { User } from "./interfaces/User.ts";
//import { User } from "./interfaces/User.js";

function App() {
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    function handleLogin(user: User) {
        setCookie("user", user, { path: "/" });
    }

    function handleLogout() {
        removeCookie("user", { path: "/" });
    }

    return (
        <CookiesProvider>
            <div>
                {cookies.user ? (
                    <WelcomePage user={cookies.user} onLogout={handleLogout} />
                ) : (
                    <LoginPage onLogin={handleLogin} />
                )}
            </div>
        </CookiesProvider>
    );
}

export default App;
