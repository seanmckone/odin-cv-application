import "../../styles/Resume.css";
import ResumeHeader from "./ResumeHeader";
import DisplaySection from "./DisplaySection";

function Resume({ personalDetails, educations, experiences }) {
  return (
    <div className="resume">
      <ResumeHeader resumeHeaderData={personalDetails}></ResumeHeader>
      <div className="resume-details">
        <DisplaySection
          section={educations}
          sectionTitle={"Education"}
        ></DisplaySection>
        <DisplaySection
          section={experiences}
          sectionTitle={"Experiences"}
        ></DisplaySection>
      </div>
    </div>
  );
}

export default Resume;
