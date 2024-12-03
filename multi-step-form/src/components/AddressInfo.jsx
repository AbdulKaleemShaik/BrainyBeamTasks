
import "./addressinfo.css";
const AddressInfo = ({ formData, handleChange, nextStep, prevStep }) => {
  const handleNext = () => {
    const { street, city, postalCode, country } = formData;

    // Postal Code validation
    if (!/^\d{6}$/.test(postalCode)) {
      alert("Please enter a valid 6-digit postal code.");
      return;
    }

    if (!street || !city || !country) {
      alert("Please fill out all required fields.");
      return;
    }

    nextStep();
  };

  return (
    <div className="address-div">
      <h2 className="address-h2">Step 2: Address Information</h2>
      <input
        type="text"
        name="street"
        placeholder="Street Address"
        value={formData.street}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="state"
        placeholder="State/Province/Region"
        value={formData.state}
        onChange={handleChange}
      />
      <input
        type="text"
        name="postalCode"
        placeholder="Postal Code (6 digits)"
        value={formData.postalCode}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={formData.country}
        onChange={handleChange}
        required
      />
      <div>
        <button onClick={prevStep}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>

    </div>
  );
};
export default AddressInfo;