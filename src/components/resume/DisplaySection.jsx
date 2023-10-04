import Section from "./Section";

function DisplaySection({ section }) {
  return section.map((sectionData) => (
    <Section key={sectionData.id} sectionData={sectionData}></Section>
  ));
}

export default DisplaySection;
