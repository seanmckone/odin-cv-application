function CollapsedFormButton({ item, onChange }) {
  return (
    <button onClick={onChange}>
      {item.school ? item.school : item.company}
    </button>
  );
}

export default CollapsedFormButton;
