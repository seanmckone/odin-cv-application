import InputGroup from "./InputGroup.jsx";
import FormButtons from "./FormButtons.jsx";
import "../styles/EduExpForm.css";

function EducationForm({ educationDetails, onChange, cancel, remove, save }) {
  return (
    <form
      action="/submit"
      method="post"
      id="education-form"
      className="education-form"
    >
      <InputGroup
        id="school"
        placeholder="Enter school/university"
        type="text"
        labelText="School"
        onChange={onChange}
        dataKey="school"
        value={educationDetails.school}
      />
      <InputGroup
        id="degree"
        placeholder="Enter degree/field of study"
        type="text"
        labelText="Degree"
        onChange={onChange}
        dataKey="degree"
        value={educationDetails.degree}
      />
      <div className="dates">
        <InputGroup
          id="start-date"
          placeholder="Enter start date"
          type="text"
          labelText="Start Date"
          onChange={onChange}
          dataKey="startDate"
          value={educationDetails.startDate}
        />
        <InputGroup
          id="end-date"
          placeholder="Enter end date"
          type="text"
          labelText="End Date"
          onChange={onChange}
          dataKey="endDate"
          value={educationDetails.endDate}
        />
      </div>
      <InputGroup
        id="location"
        placeholder="Enter location"
        type="text"
        labelText="Location"
        onChange={onChange}
        dataKey="location"
        value={educationDetails.location}
        optional
      />
      <FormButtons cancel={cancel} remove={remove} save={save}></FormButtons>
    </form>
  );
}

export default EducationForm;
