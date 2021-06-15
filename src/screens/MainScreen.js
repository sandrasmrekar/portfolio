/*
 This is the main screen that consists of all other components in the website. 
 This is one page website with vertical scroll
 */

import { animateScroll } from "../services/scrollAnimation";
import { useState } from "react";

import ConatctMeScreen from "./ContactMeScreen";
import AboutMeScreen from "./AboutMeScreen";
import StartScreen from "./StartScreen";
import Menu from "../components/Menu";
import WorkScreen from "./WorkScreen";

export default function MainScreen() {
  const [menuValue, setMenuValue] = useState("StartSection");

  const handleOnChange = (value) => {
    const element = document.getElementById(value);
    const currentPosition = window.scrollY;

    setMenuValue(value);
    animateScroll({
      targetPosition: element.offsetTop,
      initialPosition: currentPosition,
      duration: 1500,
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Menu value={menuValue} onChange={handleOnChange}>
        <Menu.Item label="Welcome" value="StartSection" />
        <Menu.Item label="Work" value="WorkSection" />
        <Menu.Item label="About me" value="AboutMeSection" />
        <Menu.Item label="Contact" value="ContactSection" />
      </Menu>
      <StartScreen />
      <WorkScreen />
      <AboutMeScreen />
      <ConatctMeScreen />
    </div>
  );
}
