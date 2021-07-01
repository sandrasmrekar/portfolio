import {
  ABOUT_ME_SECTION,
  CONTACT_SECTION,
  START_SECTION,
  WORK_SECTION,
} from "../constants/sections";

export function currentSection() {
  const currentPosition = window.scrollY;
  const startSection = document.getElementById(START_SECTION);
  const workSection = document.getElementById(WORK_SECTION);
  const aboutSection = document.getElementById(ABOUT_ME_SECTION);
  const contactSection = document.getElementById(CONTACT_SECTION);
  const OFFSET = 200;
  if (
    currentPosition >= startSection.offsetTop - OFFSET &&
    currentPosition < workSection.offsetTop
  ) {
    return START_SECTION;
  }

  if (
    currentPosition >= workSection.offsetTop - OFFSET &&
    currentPosition < aboutSection.offsetTop
  ) {
    return WORK_SECTION;
  }

  if (
    currentPosition >= aboutSection.offsetTop - OFFSET &&
    currentPosition < contactSection.offsetTop
  ) {
    return ABOUT_ME_SECTION;
  }

  if (currentPosition >= contactSection.offsetTop - OFFSET) {
    return CONTACT_SECTION;
  }
}
