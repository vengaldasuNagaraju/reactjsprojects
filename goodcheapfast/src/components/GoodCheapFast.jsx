import React, { useState } from "react";

const GoodCheapFast = () => {
    const [options, setOptions] = useState({
        good: false,
        cheap: false,
        fast: false,
    });

    const handleToggle = (option) => {
        const newOptions = { ...options, [option]: !options[option] };

        // Logic: If all are selected, turn off one based on the last clicked one
        if (newOptions.good && newOptions.cheap && newOptions.fast) {
            if (option === "good") newOptions.fast = false;
            if (option === "cheap") newOptions.good = false;
            if (option === "fast") newOptions.cheap = false;
        }

        setOptions(newOptions);
    };

    return (
        <div className="container">
            <h2>How do you want your project to be?</h2>

            {["good", "cheap", "fast"].map((option) => (
                <div key={option} className="toggle-container">
                    <input
                        type="checkbox"
                        id={option}
                        className="toggle"
                        checked={options[option]}
                        onChange={() => handleToggle(option)}
                    />
                    <label htmlFor={option} className="label">
                        <div className="ball"></div>
                    </label>
                    <span>{option.charAt(0).toUpperCase() + option.slice(1)}</span>
                </div>
            ))}
        </div>
    );
};

export default GoodCheapFast;
