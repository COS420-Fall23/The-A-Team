import React, { useState } from "react";
import "../App.css";
import courses from "../data/courses.json";
import stockImg from "../assets/images/pexels-christina-morillo-1181675.jpg";

interface Course {
    name: string;
    subject: string;
    number: string;
    professor: string;
}

interface CourseSearchPanelProps {
    defaultSearchBy?: "name" | "subject" | "number" | "professor";
    onCourseClick?: (courseName: string) => void;
}

const CourseSearchPanel: React.FC<CourseSearchPanelProps> = ({
    defaultSearchBy = "name",
    onCourseClick = (courseName) => {
        console.log(`Course ${courseName} was clicked.`);
    }
}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchOption, setSearchOption] = useState(defaultSearchBy);
    const [searchResults, setSearchResults] = useState<Course[]>([]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        const results = courses.filter((course: Course) =>
            course[searchOption]
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    };

    return (
        <div className="course-search-panel">
            <div className="btn-group" role="group" aria-label="Search options">
                {["name", "subject", "number", "professor"].map((option) => (
                    <button
                        key={option}
                        type="button"
                        className={`btn ${
                            searchOption === option
                                ? "btn-primary"
                                : "btn-secondary"
                        }`}
                        onClick={() =>
                            setSearchOption(
                                option as
                                    | "name"
                                    | "subject"
                                    | "number"
                                    | "professor"
                            )
                        }
                    >
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                    </button>
                ))}
            </div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Type your search here..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="search-results">
                {searchResults.map((course, index) => (
                    <div
                        key={index}
                        className="course-result"
                        onClick={() => onCourseClick(course.name)}
                    >
                        <h2>
                            {course.number} - {course.name}
                        </h2>
                        <p id="p1">{course.professor}</p>
                        <p id="p2">{course.subject}</p>
                        <div className="image-wrapper">
                            <img src={stockImg} alt="stock" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseSearchPanel;
