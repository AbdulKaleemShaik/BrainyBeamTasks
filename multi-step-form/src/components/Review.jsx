import React from "react";
import "./review.css";

const Review = ({ formData, prevStep, submitForm }) => {
    return (
        <div className="div">
            <h2 className="h2">Step 3: Review & Submit</h2>
            <p className="p"><strong>First Name:</strong> {formData.firstName}</p>
            <p className="p"><strong>Last Name:</strong> {formData.lastName}</p>
            <p className="p"><strong>Email:</strong> {formData.email}</p>
            <p className="p"><strong>Phone Number:</strong> {formData.phoneNumber || "Not Provided"}</p>
            <p className="p"><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
            <p className="p"><strong>Street Address:</strong> {formData.street}</p>
            <p className="p"><strong>City:</strong> {formData.city}</p>
            <p className="p"><strong>State/Province/Region:</strong> {formData.state}</p>
            <p className="p"><strong>Postal Code:</strong> {formData.postalCode}</p>
            <p className="p"><strong>Country:</strong> {formData.country}</p>
            <div>
                <button onClick={prevStep} className="button">Back</button>
                <button onClick={submitForm} className="button">Submit</button>
            </div>


        </div>
    );
};

export default Review;
