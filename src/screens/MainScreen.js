/*
 This is the main screen that consists of all other components in the website. 
 This is one page website with vertical scroll
 */

import { animateScroll } from "../services/scrollAnimation";
import { useCallback, useEffect, useState } from "react";

import ConatctMeScreen from "./ContactMeScreen";
import AboutMeScreen from "./AboutMeScreen";
import StartScreen from "./StartScreen";
import Menu from "../components/Menu";
import WorkScreen from "./WorkScreen";
import {
  ABOUT_ME_SECTION,
  CONTACT_SECTION,
  START_SECTION,
  WORK_SECTION,
} from "../constants/sections";
import { currentSection } from "../services/currentSection";

export default function MainScreen() {
  const [menuValue, setMenuValue] = useState(START_SECTION);

  const handleOnScroll = useCallback(() => {
    setMenuValue(currentSection());
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, [handleOnScroll]);

  const handleOnChange = (value) => {
    const element = document.getElementById(value);
    const currentPosition = window.scrollY;
    animateScroll({
      targetPosition: element.offsetTop,
      initialPosition: currentPosition,
      duration: 1500,
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Menu value={menuValue} onChange={handleOnChange}>
        <Menu.Item label="Welcome" value={START_SECTION} />
        <Menu.Item label="Work" value={WORK_SECTION} />
        <Menu.Item label="About me" value={ABOUT_ME_SECTION} />
        <Menu.Item label="Contact" value={CONTACT_SECTION} />
      </Menu>
      <StartScreen />
      <WorkScreen />
      <AboutMeScreen />
      <ConatctMeScreen />
    </div>
  );
}
