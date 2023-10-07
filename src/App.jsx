import "./styles/App.css";
import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails.jsx";
import EducationForm from "./components/EducationForm.jsx";
import ExperienceForm from "./components/ExperienceForm.jsx";
import Resume from "./components/resume/Resume";
import CollapsedFormButton from "./components/CollapsedFormButton";
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

  function showExpForm(e, id) {
    const newExperiences = experiences.map((item) => {
      if (item.id === id) {
        const updatedExperience = {
          ...item,
          isCollapsed: !item.isCollapsed,
        };
        return updatedExperience;
      }
      return item;
    });
    setExperiences(newExperiences);
  }

  function showEduForm(e, id) {
    const newEducations = educations.map((item) => {
      if (item.id === id) {
        const updatedEducation = {
          ...item,
          isCollapsed: !item.isCollapsed,
        };
        return updatedEducation;
      }
      return item;
    });
    setEducations(newEducations);
  }

  function addEducation() {
    setEducations([
      ...educations,
      {
        degree: "",
        school: "",
        location: "",
        startDate: "",
        endDate: "",
        isCollapsed: false,
        isHidden: false,
        id: crypto.randomUUID(),
      },
    ]);
  }

  function addExperience() {
    setExperiences([
      ...experiences,
      {
        company: "",
        position: "",
        location: "",
        description: "",
        startDate: "",
        endDate: "",
        isCollapsed: false,
        isHidden: false,
        id: crypto.randomUUID(),
      },
    ]);
  }

  function removeEducation(id) {
    setEducations(educations.filter((item) => item.id != id));
  }

  function removeExperience(id) {
    setExperiences(experiences.filter((item) => item.id != id));
  }

  return (
    <div className="app">
      <div className="edit-side">
        <PersonalDetails
          personalDetails={personalDetails}
          onChange={handlePersonalDetailsChange}
        ></PersonalDetails>

        {educations.map((x) => {
          if (!x.isCollapsed) {
            return (
              <EducationForm
                key={x.id}
                educationDetails={x}
                onChange={(e) => handleEducationsChange(e, x.id)}
                save={(e) => showEduForm(e, x.id)}
                remove={() => removeEducation(x.id)}
              ></EducationForm>
            );
          }
          return (
            <CollapsedFormButton
              key={x.id}
              item={x}
              onChange={(e) => showEduForm(e, x.id)}
            ></CollapsedFormButton>
          );
        })}
        <button onClick={addEducation}>+edu</button>

        {experiences.map((x) => {
          if (!x.isCollapsed) {
            return (
              <ExperienceForm
                key={x.id}
                experienceDetails={x}
                onChange={(e) => handleExperiencesChange(e, x.id)}
                save={(e) => showExpForm(e, x.id)}
                remove={() => removeExperience(x.id)}
              ></ExperienceForm>
            );
          }
          return (
            <CollapsedFormButton
              key={x.id}
              item={x}
              onChange={(e) => showExpForm(e, x.id)}
            ></CollapsedFormButton>
          );
        })}
        <button onClick={addExperience}>+exp</button>
      </div>

      <div className="resume-side">
        <Resume
          personalDetails={personalDetails}
          educations={educations}
          experiences={experiences}
        ></Resume>
      </div>
    </div>
  );
}

export default App;
