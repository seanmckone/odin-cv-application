import "../styles/FormButtons.css";

function FormButtons({ remove, save }) {
  return (
    <div className="form-buttons">
      <button type="button" onClick={remove}>
        Delete
      </button>
      <div className="save-cancel-buttons">
        <button type="button" onClick={save}>
          Save
        </button>
      </div>
    </div>
  );
}

export default FormButtons;
