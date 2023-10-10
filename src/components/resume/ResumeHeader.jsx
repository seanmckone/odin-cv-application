import "../../styles/ResumeHeader.css";

function ResumeHeader({ resumeHeaderData }) {
  return (
    <div className="resume-header">
      <h1 className="resume-name">{resumeHeaderData.fullName}</h1>
      <div className="header-contact-info">
        <h3>{resumeHeaderData.email}</h3>
        <h3>{resumeHeaderData.phoneNumber}</h3>
        <h3>{resumeHeaderData.address}</h3>
      </div>
    </div>
  );
}

export default ResumeHeader;
