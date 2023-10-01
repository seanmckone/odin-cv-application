import "./styles/App.css";
import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails.jsx";
import EducationForm from "./components/EducationForm.jsx";
import ExperienceForm from "./components/ExperienceForm.jsx";

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

  const [experienceDetails, setExperienceDetails] = useState({
    company: "Cool Company",
    position: "SWE I",
    startDate: "May 2021",
    endDate: "May 2023",
    location: "Raleigh, NC",
    description: "Did some work on giant codebase. Very fun.",
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

  function handleExperienceDetailsChange(e) {
    setExperienceDetails({
      ...experienceDetails,
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
      <ExperienceForm
        experienceDetails={experienceDetails}
        onChange={handleExperienceDetailsChange}
      ></ExperienceForm>
    </>
  );
}

export default App;
