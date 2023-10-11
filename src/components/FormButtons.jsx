import "../styles/FormButtons.css";

function FormButtons({ remove, save }) {
  return (
    <div className="form-buttons">
      <button type="button" className="form-button" onClick={remove}>
        Delete
      </button>
      <button type="button" className="form-button" onClick={save}>
        Save
      </button>
    </div>
  );
}

export default FormButtons;
