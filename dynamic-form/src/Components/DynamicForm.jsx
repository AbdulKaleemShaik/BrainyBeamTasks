import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./dynamicForm.css";

const DynamicForm = () => {
    const [fields, setFields] = useState([]);
    const [showFields, setShowFields] = useState(false);

    const handleAddField = () => {
        setFields([...fields, { key: "", value: "" }]);
        setShowFields(true); 
    };

    const handleRemoveField = (index) => {
        const updatedFields = fields.filter((_, i) => i !== index);
        setFields(updatedFields);

        if (updatedFields.length === 0) {
            setShowFields(false); 
        }
    };

    const handleChange = (index, event, type) => {
        const updatedFields = fields.map((field, i) =>
            i === index ? { ...field, [type]: event.target.value } : field
        );
        setFields(updatedFields);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = fields.reduce((acc, field) => ({ ...acc, [field.key]: field.value }), {});

        toast.success(
            `Form Submitted Successfully! \nData: ${JSON.stringify(formData, null, 2)}`,
            {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            }
        );

        setFields([]);
        setShowFields(false);
    };

    return (
        <div className="dynamic-form-container">
            <h2>Dynamic Form</h2>
            <form onSubmit={handleSubmit}>
                {showFields && fields.map((field, index) => (
                    <div key={index} className="field-container">
                        <input
                            type="text"
                            value={field.key}
                            onChange={(e) => handleChange(index, e, "key")}
                            placeholder={`Field Name ${index + 1}`}
                            className="dynamic-input"
                        />
                        <input
                            type="text"
                            value={field.value}
                            onChange={(e) => handleChange(index, e, "value")}
                            placeholder={`Value ${index + 1}`}
                            className="dynamic-input"
                        />
                        <button
                            type="button"
                            onClick={() => handleRemoveField(index)}
                            className="remove-btn"
                        >
                            🗑️
                        </button>
                    </div>
                ))}

                <button type="button" onClick={handleAddField} className="add-btn">
                    Add Field
                </button>

                <button type="submit" className="submit-btn">
                    Submit
                </button>
            </form>

            <ToastContainer />
        </div>
    );
};

export default DynamicForm;
