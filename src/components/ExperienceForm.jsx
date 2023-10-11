import InputGroup from "./InputGroup.jsx";
import FormButtons from "./FormButtons.jsx";
import "../styles/EduExpForm.css";

function ExperienceForm({ experienceDetails, onChange, cancel, remove, save }) {
  return (
    <form
      action="/submit"
      method="post"
      id="experience-form"
      className="experience-form"
    >
      <InputGroup
        id="company"
        placeholder="Enter company name"
        type="text"
        labelText="Company Name"
        onChange={onChange}
        dataKey="company"
        value={experienceDetails.company}
      />
      <InputGroup
        id="position"
        placeholder="Enter position title"
        type="text"
        labelText="Position Title"
        onChange={onChange}
        dataKey="position"
        value={experienceDetails.position}
      />
      <div className="dates">
        <InputGroup
          id="start-date"
          placeholder="Enter start date"
          type="text"
          labelText="Start Date"
          onChange={onChange}
          dataKey="startDate"
          value={experienceDetails.startDate}
        />
        <InputGroup
          id="end-date"
          placeholder="Enter end date"
          type="text"
          labelText="End Date"
          onChange={onChange}
          dataKey="endDate"
          value={experienceDetails.endDate}
        />
      </div>
      <InputGroup
        id="location"
        placeholder="Enter location"
        type="text"
        labelText="Location"
        onChange={onChange}
        dataKey="location"
        value={experienceDetails.location}
      />
      <InputGroup
        id="description"
        placeholder="Enter description"
        type="textarea"
        labelText="Description"
        onChange={onChange}
        dataKey="description"
        value={experienceDetails.description}
      />
      <FormButtons cancel={cancel} remove={remove} save={save}></FormButtons>
    </form>
  );
}

export default ExperienceForm;
