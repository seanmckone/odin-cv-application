import "../../styles/Section.css";

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
        <p>
          {sectionData.position ? sectionData.position : sectionData.degree}
        </p>
        {sectionData.description && <p>{sectionData.description}</p>}
      </div>
    </div>
  );
}

export default Section;
