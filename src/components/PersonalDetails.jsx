function PersonalDetails() {
  return (
    <div id="personal-details">
      <h1>Personal Details</h1>
      <form action="/submit" method="post" id="personal-details-form">
        <label htmlFor="full-name">Full name</label>
        <input type="text" placeholder="First and last name" id="full-name" />

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter email" id="email" />

        <label htmlFor="phone-number">Phone number</label>
        <input type="tel" placeholder="Enter phone number" id="phone-number" />

        <label htmlFor="address">Address</label>
        <input type="text" placeholder="City, Country" id="address" />
      </form>
    </div>
  );
}

export default PersonalDetails;
