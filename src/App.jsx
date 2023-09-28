import "./styles/App.css";
import PersonalDetails from "./components/PersonalDetails.jsx";
import PersonalDetailsDisplay from "./components/PersonalDetailsDisplay.jsx";
import { useState } from "react";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "sea",
    email: "sea",
    phoneNumber: "ase",
    address: "ase",
  });

  function handlePersonalDetailsChange(e) {
    setPersonalDetails({
      ...personalDetails,
      [e.target.dataset.key]: e.target.value,
    });
  }

  return (
    <>
      <PersonalDetails
        personalDetails={personalDetails}
        onChange={handlePersonalDetailsChange}
      ></PersonalDetails>
      <PersonalDetailsDisplay
        personalDetails={personalDetails}
      ></PersonalDetailsDisplay>
    </>
  );
}

export default App;
