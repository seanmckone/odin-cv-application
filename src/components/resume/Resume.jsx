import "../../styles/Resume.css";
import ResumeHeader from "./ResumeHeader";
import DisplaySection from "./DisplaySection";

function Resume({ personalDetails, educations, experiences }) {
  return (
    <div className="resume">
      <ResumeHeader resumeHeaderData={personalDetails}></ResumeHeader>
      <div className="resume-details">
        <h3 className="section-title">Education</h3>
        <DisplaySection section={educations}></DisplaySection>
        <h3 className="section-title">Professional Experience</h3>
        <DisplaySection section={experiences}></DisplaySection>
      </div>
    </div>
  );
}

export default Resume;
