import React from "react";
import WelcomePage from "./WelcomePage.tsx";
//import LoginPage from "./LoginPage.js";
import { useCookies } from "react-cookie";
//import { User } from "./interfaces/User.ts";
//import { User } from "./interfaces/User.js";
import Navbar from "./components/Navbar.tsx";

function App() {
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    return (
        <>
            <Navbar
                cookies={cookies}
                setCookie={setCookie}
                removeCookie={removeCookie}
            />
            <WelcomePage
                cookies={cookies}
                setCookie={setCookie}
                removeCookie={removeCookie}
            ></WelcomePage>
        </>
    );
}

export default App;
