import "./styles/App.css";
import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails.jsx";
import EducationForm from "./components/EducationForm.jsx";
import ExperienceForm from "./components/ExperienceForm.jsx";
import Resume from "./components/resume/Resume";
import exampleData from "./exampleData.js";

function App() {
  const [personalDetails, setPersonalDetails] = useState(
    exampleData.personalDetails
  );

  const [educations, setEducations] = useState(exampleData.sections.educations);

  const [experiences, setExperiences] = useState(
    exampleData.sections.experiences
  );

  function handlePersonalDetailsChange(e) {
    setPersonalDetails({
      ...personalDetails,
      [e.target.dataset.key]: e.target.value,
    });
  }

  function handleEducationsChange(e, id) {
    const newEducations = educations.map((item) => {
      if (item.id === id) {
        const updatedEducation = {
          ...item,
          [e.target.dataset.key]: e.target.value,
        };

        return updatedEducation;
      }

      return item;
    });

    setEducations(newEducations);
  }

  function handleExperiencesChange(e, id) {
    const newExperiences = experiences.map((item) => {
      if (item.id === id) {
        const updatedExperience = {
          ...item,
          [e.target.dataset.key]: e.target.value,
        };

        return updatedExperience;
      }

      return item;
    });

    setExperiences(newExperiences);
  }

  return (
    <>
      <PersonalDetails
        personalDetails={personalDetails}
        onChange={handlePersonalDetailsChange}
      ></PersonalDetails>
      {educations.map((x) => (
        <EducationForm
          key={x.id}
          educationDetails={x}
          onChange={(e) => handleEducationsChange(e, x.id)}
        ></EducationForm>
      ))}
      {experiences.map((x) => (
        <ExperienceForm
          key={x.id}
          experienceDetails={x}
          onChange={(e) => handleExperiencesChange(e, x.id)}
        ></ExperienceForm>
      ))}
      <br />
      <Resume
        personalDetails={personalDetails}
        educations={educations}
        experiences={experiences}
      ></Resume>
    </>
  );
}

export default App;

{
  /* {exampleData.sections.educations.map((x) => (
        <EducationForm
          key={x.id}
          educationDetails={x}
          onChange={handleEducationDetailsChange}
        ></EducationForm>
      ))} */
}
