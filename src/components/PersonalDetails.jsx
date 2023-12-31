import InputGroup from "./InputGroup.jsx";
import "../styles/PersonalDetails.css";

function PersonalDetails({ personalDetails, onChange }) {
  return (
    <form
      action="/submit"
      method="post"
      id="personal-details-form"
      className="personal-details-form"
    >
      <h2 className="personal-details-title">Personal Details</h2>
      <InputGroup
        id="full-name"
        placeholder="First and last name"
        type="text"
        labelText="Full name"
        onChange={onChange}
        dataKey="fullName"
        value={personalDetails.fullName}
      />
      <InputGroup
        id="email"
        placeholder="Enter email"
        type="email"
        labelText="Email"
        onChange={onChange}
        dataKey="email"
        value={personalDetails.email}
        recommended
      />
      <InputGroup
        id="phone-number"
        placeholder="Enter phone number"
        type="tel"
        labelText="Phone number"
        onChange={onChange}
        dataKey="phoneNumber"
        value={personalDetails.phoneNumber}
        recommended
      />
      <InputGroup
        id="address"
        placeholder="City, Country"
        type="text"
        labelText="Address"
        onChange={onChange}
        dataKey="address"
        value={personalDetails.address}
        recommended
      />
    </form>
  );
}

export default PersonalDetails;
