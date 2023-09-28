function PersonalDetails({ personalDetails, onChange }) {
  return (
    <div id="personal-details">
      <h2>Personal Details</h2>
      <form action="/submit" method="post" id="personal-details-form">
        <label htmlFor="full-name">Full name</label>
        <input
          type="text"
          placeholder="First and last name"
          id="full-name"
          onChange={onChange}
          data-key="fullName"
          value={personalDetails.fullName}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter email"
          id="email"
          onChange={onChange}
          data-key="email"
          value={personalDetails.email}
        />

        <label htmlFor="phone-number">Phone number</label>
        <input
          type="tel"
          placeholder="Enter phone number"
          id="phone-number"
          onChange={onChange}
          data-key="phoneNumber"
          value={personalDetails.phoneNumber}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          placeholder="City, Country"
          id="address"
          onChange={onChange}
          data-key="address"
          value={personalDetails.address}
        />
      </form>
    </div>
  );
}

export default PersonalDetails;
