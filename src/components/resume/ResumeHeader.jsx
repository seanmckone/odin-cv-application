function ResumeHeader({ resumeHeaderData }) {
  return (
    <div id="resume-header">
      <h1>{resumeHeaderData.fullName}</h1>
      <div id="header-contact-info">
        <h3>{resumeHeaderData.email}</h3>
        <h3>{resumeHeaderData.phoneNumber}</h3>
        <h3>{resumeHeaderData.address}</h3>
      </div>
    </div>
  );
}

export default ResumeHeader;
