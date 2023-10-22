import React from "react";
import WelcomePage from "./WelcomePage.tsx";
//import LoginPage from "./LoginPage.js";
import { /*Cookies,*/ useCookies } from "react-cookie";
//import { User } from "./interfaces/User.ts";
//import { User } from "./interfaces/User.js";

function App() {
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    return (
        <WelcomePage
            cookies={cookies}
            setCookie={setCookie}
            removeCookie={removeCookie}
        />
    );
}

export default App;
