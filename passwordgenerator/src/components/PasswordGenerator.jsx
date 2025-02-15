import React, { useState } from "react";

const getRandomLower = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
const getRandomUpper = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);
const getRandomNumber = () => String.fromCharCode(Math.floor(Math.random() * 10) + 48);
const getRandomSymbol = () => {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

const PasswordGenerator = () => {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(20);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);

    const generatePassword = () => {
        let generatedPassword = "";
        const typesCount = includeLowercase + includeUppercase + includeNumbers + includeSymbols;
        const typesArr = [
            { lower: includeLowercase },
            { upper: includeUppercase },
            { number: includeNumbers },
            { symbol: includeSymbols },
        ].filter(item => Object.values(item)[0]);

        if (typesCount === 0) return;

        for (let i = 0; i < length; i += typesCount) {
            typesArr.forEach(type => {
                const funcName = Object.keys(type)[0];
                generatedPassword += randomFunc[funcName]();
            });
        }
        setPassword(generatedPassword.slice(0, length));
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
    };

    return (
        <div className="container">
            <h2>Password Generator</h2>
            <div className="result-container">
                <span id="result">{password}</span>
                <button className="btn" onClick={copyToClipboard}>
                    <i className="far fa-clipboard"></i>
                </button>
            </div>
            <div className="settings">
                <div className="setting">
                    <label>Password Length</label>
                    <input
                        type="number"
                        min="1"
                        max="20"
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                    />
                </div>
                <div className="setting">
                    <label>Including uppercase letters</label>
                    <input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} />
                </div>
                <div className="setting">
                    <label>Including lowercase letters</label>
                    <input type="checkbox" checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} />
                </div>
                <div className="setting">
                    <label>Including Numbers</label>
                    <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} />
                </div>
                <div className="setting">
                    <label>Including symbols</label>
                    <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} />
                </div>
            </div>
            <button className="btn btn-large" onClick={generatePassword}>Generate Password</button>
        </div>
    );
};

export default PasswordGenerator;
