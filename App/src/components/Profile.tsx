import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Modal, Button } from "react-bootstrap";
import "../App.css";
import CourseSearchPanel from "./CourseSearchPanel";

interface Props {
    name: string;
    anonMode: boolean;
    setAnonMode: (boolean) => void;
}

const Profile: React.FC<Props> = ({ name, anonMode, setAnonMode }) => {
    const [cookies, setCookie] = useCookies(["emoji", "color"]);
    const [emoji, setEmoji] = useState("");
    const [color, setColor] = useState("");
    const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [pendingCourse, setPendingCourse] = useState("");

    const addCourse = (course) => {
        if (!selectedCourses.includes(course)) {
            setSelectedCourses([...selectedCourses, course]);
        } else {
            console.log("This course has already been selected.");
        }
    };

    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const handleCourseClick = (courseName: string) => {
        setPendingCourse(courseName);
        setShowModal(true);
    };

    const confirmAddCourse = () => {
        if (!selectedCourses.includes(pendingCourse)) {
            setSelectedCourses([...selectedCourses, pendingCourse]);
        } else {
            console.log("This course has already been selected.");
        }
        setShowModal(false);
    };

    const getRandomEmoji = () => {
        const base = 0x1f600;
        const randomEmojiCode =
            base + Math.floor(Math.random() * (0x1f64f - base + 1));
        return String.fromCodePoint(randomEmojiCode);
    };

    useEffect(() => {
        let storedEmoji = cookies.emoji;
        let storedColor = cookies.color;

        if (!storedEmoji) {
            storedEmoji = getRandomEmoji();
            setCookie("emoji", storedEmoji, { path: "/" });
        }

        if (!storedColor) {
            storedColor = getRandomColor();
            setCookie("color", storedColor, { path: "/" });
        }

        setEmoji(storedEmoji);
        setColor(storedColor);
    }, [cookies, setCookie]);

    return (
        <div id="profile">
            <CourseSearchPanel onCourseClick={handleCourseClick} />
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to add {pendingCourse}?</Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setShowModal(false)}
                    >
                        No
                    </Button>
                    <Button variant="primary" onClick={confirmAddCourse}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
            <div>
                <h2>Selected Courses:</h2>
                <div id="num-courses">{selectedCourses.length}</div>
                {selectedCourses.map((course, index) => (
                    <p key={index} className="course">
                        {course}
                    </p>
                ))}
            </div>
            <h2>{anonMode ? "You are anonymous" : "You are not anonymous"}</h2>
            <div
                style={{
                    backgroundColor: color,
                    fontSize: "2em",
                    width: "2em",
                    height: "2em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "auto",
                    borderRadius: "50%"
                }}
            >
                {emoji}
            </div>
            <h1>{name}</h1>
            <button
                onClick={() => {
                    const newEmoji = getRandomEmoji();
                    const newColor = getRandomColor();
                    setCookie("emoji", newEmoji, { path: "/" });
                    setCookie("color", newColor, { path: "/" });
                    setEmoji(newEmoji);
                    setColor(newColor);
                }}
            >
                Randomize Avatar
            </button>
            <br />
            <select name="language" id="language">
                <option value="student">Student</option>
                <option value="professor">Professor</option>
                <option value="alumni">Alumni</option>
                <option value="other">Other</option>
            </select>
            <input
                type="checkbox"
                id="anonymous"
                name="anonymous"
                onChange={() => setAnonMode(!anonMode)}
                checked={anonMode}
            />
            <label htmlFor="anonymous">Anonymous</label>
        </div>
    );
};

export default Profile;
