import "./styles/App.css";
import PersonalDetails from "./components/PersonalDetails.jsx";
import { useState } from "react";
import EducationForm from "./components/EducationForm";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "Sean McKone",
    email: "seandmckone@gmail.com",
    phoneNumber: "910-813-6037",
    address: "Raleigh, NC",
  });

  const [educationDetails, setEducationDetails] = useState({
    school: "NCSU",
    degree: "Computer Science",
    startDate: "May 2021",
    endDate: "May 2023",
    location: "Raleigh, NC",
  });

  function handlePersonalDetailsChange(e) {
    setPersonalDetails({
      ...personalDetails,
      [e.target.dataset.key]: e.target.value,
    });
  }

  function handleEducationDetailsChange(e) {
    setEducationDetails({
      ...educationDetails,
      [e.target.dataset.key]: e.target.value,
    });
  }

  return (
    <>
      <PersonalDetails
        personalDetails={personalDetails}
        onChange={handlePersonalDetailsChange}
      ></PersonalDetails>
      <EducationForm
        educationDetails={educationDetails}
        onChange={handleEducationDetailsChange}
      ></EducationForm>
    </>
  );
}

export default App;
