import React from "react";
import "./personalInfo.css"; 

const PersonalInfo = ({ formData, handleChange, nextStep }) => {
    const handleNext = () => {
        const { email, phoneNumber, dateOfBirth } = formData;

        // Email validation
        if (!email.includes("@")) {
            alert("Please enter a valid email address containing '@'.");
            return;
        }

        // Phone number validation
        if (phoneNumber && !/^\d{10}$/.test(phoneNumber)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        // Date of Birth validation
        const today = new Date();
        const dob = new Date(dateOfBirth);
        if (!dateOfBirth || dob >= today) {
            alert("Please enter a valid date of birth.");
            return;
        }

        nextStep();
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Step 1: Personal Information</h2>
            <form className="form">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                />
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number (10 digits)"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="form-input"
                />
                <input
                    type="date"
                    name="dateOfBirth"
                    placeholder="Date of Birth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="form-input"
                    required
                />
                <button type="button" onClick={handleNext} className="form-button">
                    Next
                </button>
            </form>
        </div>
    );
};

export default PersonalInfo;
