import { useState, useEffect } from "react";

function Boxes() {
    const [isBig, setIsBig] = useState(true);

    useEffect(() => {
        createBoxes();
    }, []);

    const createBoxes = () => {
        const boxesContainer = document.getElementById("boxes");
        boxesContainer.innerHTML = ""; // Clear existing boxes

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                const box = document.createElement("div");
                box.classList.add("box");
                box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
                boxesContainer.appendChild(box);
            }
        }
    };

    return (
        <div>
            <button id="btn" className="magic" onClick={() => setIsBig(!isBig)}>
                Magic
            </button>
            <div id="boxes" className={`boxes ${isBig ? "big" : ""}`}></div>
        </div>
    );
}

export default Boxes;
