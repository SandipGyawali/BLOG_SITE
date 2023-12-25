import { useState } from "react";
import { ToggleBtn } from "../styles/Header.styled";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function Toggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <ToggleBtn onClick={toggleDarkMode}>
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={30}
        moonColor="black"
      />
    </ToggleBtn>
  );
}

export default Toggle;
