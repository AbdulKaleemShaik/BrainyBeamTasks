import React, { useState } from "react";
import "./passwordValidator.css";

const PasswordValidator = () => {
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState("");

    const evaluateStrength = (value) => {
        const hasLowercase = /[a-z]/.test(value);
        const hasUppercase = /[A-Z]/.test(value);
        const hasNumber = /\d/.test(value);
        const hasSpecialChar = /[@$!%*?&]/.test(value);
        const hasMinLength = value.length >= 8;

        let strengthScore = 0;

        if (hasLowercase) strengthScore++;
        if (hasUppercase) strengthScore++;
        if (hasNumber) strengthScore++;
        if (hasSpecialChar) strengthScore++;
        if (hasMinLength) strengthScore++;

        if (strengthScore === 0) {
            setStrength("");
        } else if (strengthScore <= 2) {
            setStrength("Poor");
        } else if (strengthScore === 3) {
            setStrength("Good");
        } else if (strengthScore === 4) {
            setStrength("Very Good");
        } else if (strengthScore === 5) {
            setStrength("Excellent");
        }
    };


    const handleChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        evaluateStrength(newPassword);
    };

    return (
        <div className="password-container">
            <h2>Password Strength Checker</h2>
            <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handleChange}
                className="password-input"
            />
            {strength && <p className={`password-strength ${strength.toLowerCase()}`}>{strength}</p>}
        </div>
    );
};

export default PasswordValidator;
