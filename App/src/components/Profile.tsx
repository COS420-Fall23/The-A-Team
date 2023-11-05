import React, { useState, useEffect } from "react";

interface Props {
    name: string;
}

const Profile: React.FC<Props> = ({ name }) => {
    const [emoji, setEmoji] = useState("");
    const [color, setColor] = useState("");

    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const getRandomEmoji = () => {
        const base = 0x1f600;
        const randomEmojiCode =
            base + Math.floor(Math.random() * (0x1f64f - base + 1));
        return String.fromCodePoint(randomEmojiCode);
    };

    useEffect(() => {
        const randomEmoji = getRandomEmoji();
        const randomColor = getRandomColor();
        setEmoji(randomEmoji);
        setColor(randomColor);
    }, []);

    return (
        <div>
            <div
                style={{
                    backgroundColor: color,
                    fontSize: "2em",
                    width: "2em",
                    height: "2em",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    margin: "auto"
                }}
            >
                {emoji}
            </div>
            <h1>{name}</h1>
        </div>
    );
};

export default Profile;
