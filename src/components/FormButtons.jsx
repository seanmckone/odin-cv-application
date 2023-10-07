function FormButtons({ cancel, remove, save }) {
  return (
    <div className="form-buttons">
      <button type="button" onClick={remove}>
        Delete
      </button>
      <div id="save-cancel-buttons">
        <button type="button" onClick={cancel}>
          Cancel
        </button>
        <button type="button" onClick={save}>
          Save
        </button>
      </div>
    </div>
  );
}

export default FormButtons;
