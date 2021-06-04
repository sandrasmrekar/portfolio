/*
 This is the main screen that consists of all other components in the website. 
 This is one page website with vertical scroll
 */

import AboutMeScreen from "./AboutMeScreen";
import StartScreen from "./StartScreen";
import WorkScreen from "./WorkScreen";

// TODO: View ? or div
// TODO: move to app.js
export default function MainScreen() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <StartScreen />
      <WorkScreen />
      <AboutMeScreen />
    </div>
  );
}
