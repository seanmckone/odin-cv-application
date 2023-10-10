import "../styles/CollapsedFormButton.css";

function CollapsedFormButton({ item, onChange, hideSection }) {
  return (
    <div className="collapsed-form">
      <button className="collapsed-form-button" onClick={onChange}>
        {item.school ? item.school : item.company}
      </button>
      <button className="hide-section-button" onClick={hideSection}>
        {item.isHidden ? "Hidden" : "Shown"}
      </button>
    </div>
  );
}

export default CollapsedFormButton;
