import Section from "./Section";

function DisplaySection({ section, sectionTitle }) {
  return (
    <>
      {section.length > 0 && <h3 className="section-title">{sectionTitle}</h3>}
      {section.map((sectionData) => {
        if (!sectionData.isHidden) {
          return (
            <Section key={sectionData.id} sectionData={sectionData}></Section>
          );
        }
      })}
    </>
  );
}

export default DisplaySection;
