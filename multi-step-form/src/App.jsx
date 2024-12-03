import React, { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import AddressInfo from "./components/AddressInfo";
import Review from "./components/Review";

const FormContainer = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const submitForm = () => {
    alert("Form submitted successfully!");
    setFormData(initialFormData);
    setStep(1); 
  };

  return (
    <div>
      {step === 1 && (
        <PersonalInfo
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <AddressInfo
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <Review
          formData={formData}
          prevStep={prevStep}
          submitForm={submitForm}
        />
      )}
    </div>
  );
};

export default FormContainer;
