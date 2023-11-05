import React from "react";
import { Button } from "react-bootstrap";
import "../App.css";

function Help() {
    return (
        <div>
            <h2>Help</h2>
            <p>
                This is a help page for the app. It is a work in progress.
                <br />
                <br />
                <Button
                    data-testid="helpButton"
                    onClick={() => console.log("Help button clicked")}
                >
                    Help
                </Button>
            </p>
        </div>
    );
}

export default Help;
