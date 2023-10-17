import React from "react";
import WelcomePage from "./WelcomePage.tsx";
import LoginPage from "./LoginPage.js";
import { CookiesProvider, useCookies } from "react-cookie";
//import { User } from "./interfaces/User.js";

function App() {
    const [cookies, setCookie] = useCookies(["user"]);

    function handleLogin({ user }) {
        setCookie("user", user, { path: "/" });
    }

    return (
        <CookiesProvider>
            <div>
                {cookies.user ? (
                    <WelcomePage user={cookies.user} />
                ) : (
                    <LoginPage onLogin={handleLogin} />
                )}
            </div>
        </CookiesProvider>
    );
}

export default App;
