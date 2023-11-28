import React, { useState } from "react";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
import "../App.css";

interface HelpPanelProps {
    gptApiToken: string;
}

//will need to add TOKEN

const HelpPanel: React.FC<HelpPanelProps> = ({ gptApiToken }) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleQuestionChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setQuestion(event.target.value);
    };

    const fetchAnswer = async () => {
        const response = await fetch(
            "https://jamsapi.hackclub.dev/openai/models",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${gptApiToken}`
                },
                body: JSON.stringify({
                    prompt: question,
                    max_tokens: 150
                })
            }
        );

        const data = await response.json();
        setAnswer(data.choices[0].text.trim());
    };

    return (
        <div>
            <h2>Need Help?</h2>
            <h3>Frequently Asked Questions</h3>

            <div className="faq">
                <h4>How do I change my password?</h4>
                <p>
                    You can change your password on the profile page by going to
                    User Information and selecting the Change Password button.
                </p>
            </div>

            <div className="faq">
                <h4>How do I change my email?</h4>
                <p>
                    To change your email, navigate to the profile page, click on
                    User Information, and select the Change Email button.
                </p>
            </div>

            <div className="faq">
                <h4>How can I toggle anonymity?</h4>
                <p>
                    To toggle anonymity, press the Anonymous checkbox under the
                    Classes Info section on the profile page.
                </p>
            </div>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Ask your question here..."
                    onChange={handleQuestionChange}
                />
                <Button variant="outline-secondary" onClick={fetchAnswer}>
                    Ask
                </Button>
            </InputGroup>
            <p>{answer}</p>
        </div>
    );
};

export default HelpPanel;

//PROMPT:
/*Change your password on the profile page by going to “User Information” and selecting the “Change Password?” button.
Change your email on the profile page by going to “User Information” and selecting the “Change Email?” button.
To toggle anonymity, press the Anonymous checkbox under classes info on the profile page.
See recent replies by checking the homepage and clicking on them to respond. 
View current and previous classes on the homepage.
To view your servers, press the notepad icon on the side, and it will show you your classes then select a class and one of the categories or create a new one. Once you have pressed that, you can write a comment. You can also search the chat by pressing the button on the top right and typing in what you are looking for.
To view recent notifications, press the notifications icon. You can sort by date, activity, and professor priority.
To access the help page, press the question page icon in the button's left corner.
To search for a course, press the magnifying glass icon on the right and enter the course name you are looking for. Then, you can click the class if you are in it (press confirm to confirm you want to add it), and it will be added to your profile page.
*/
