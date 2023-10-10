import "../styles/CollapsedFormButton.css";

function CollapsedFormButton({ item, onChange }) {
  return (
    <button className="collapsed-form-button" onClick={onChange}>
      {item.school ? item.school : item.company}
    </button>
  );
}

export default CollapsedFormButton;
