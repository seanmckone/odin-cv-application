import ResumeHeader from "./ResumeHeader";
import DisplaySection from "./DisplaySection";

function Resume({ personalDetails, educations, experiences }) {
  return (
    <div id="resume">
      <ResumeHeader resumeHeaderData={personalDetails}></ResumeHeader>
      <h3>----Education----</h3>
      <DisplaySection section={educations}></DisplaySection>
      <h3>----Professional Experience----</h3>
      <DisplaySection section={experiences}></DisplaySection>
    </div>
  );
}

export default Resume;
