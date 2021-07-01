import {
  ABOUT_ME_SECTION,
  CONTACT_SECTION,
  START_SECTION,
  WORK_SECTION,
} from "../constants/sections";

export function currentSection() {
  const OFFSET = window.innerHeight * 0.1;

  const currentPosition = window.scrollY + OFFSET;
  const startSection = document.getElementById(START_SECTION);
  const workSection = document.getElementById(WORK_SECTION);
  const aboutSection = document.getElementById(ABOUT_ME_SECTION);
  const contactSection = document.getElementById(CONTACT_SECTION);

  if (
    currentPosition >= startSection.offsetTop &&
    currentPosition < workSection.offsetTop
  ) {
    return START_SECTION;
  } else if (
    currentPosition >= workSection.offsetTop &&
    currentPosition < aboutSection.offsetTop
  ) {
    return WORK_SECTION;
  } else if (
    currentPosition >= aboutSection.offsetTop &&
    currentPosition < contactSection.offsetTop
  ) {
    return ABOUT_ME_SECTION;
  } else if (currentPosition >= contactSection.offsetTop) {
    return CONTACT_SECTION;
  }
}
