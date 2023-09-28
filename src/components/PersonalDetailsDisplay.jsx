function PersonalDetailsDisplay({ personalDetails }) {
  return (
    <>
      <p>Full name: {personalDetails.fullName}</p>
      <p>Email: {personalDetails.email}</p>
      <p>Phone Number: {personalDetails.phoneNumber}</p>
      <p>Address: {personalDetails.address}</p>
    </>
  );
}

export default PersonalDetailsDisplay;
