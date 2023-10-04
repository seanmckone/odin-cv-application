function Section({ sectionData }) {
  return (
    <div className="section">
      <div className="section-aux-info">
        <p>
          {sectionData.startDate} - {sectionData.endDate}
        </p>
        <p>{sectionData.location}</p>
      </div>
      <div className="section-main-info">
        <h4>
          {sectionData.company ? sectionData.company : sectionData.school}
        </h4>
        <h4>
          {sectionData.position ? sectionData.position : sectionData.degree}
        </h4>
        {sectionData.description && <h4>{sectionData.description}</h4>}
      </div>
    </div>
  );
}

export default Section;
