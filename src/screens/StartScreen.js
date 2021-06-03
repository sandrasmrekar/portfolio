/**
 * This is the landing screen.
 */

import { useState } from "react";
import styled from "styled-components";
import LinkIcons from "../components/LinkIcons";
import Menu from "../components/Menu";
import { COLORS } from "../styles/colors";
import styles from "./StartScreen.module.css";

const Background = styled.div`
  background-color: ${COLORS.background};
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

const Header = styled.h1`
  color: ${COLORS.white};
`;

const SubHeader = styled.h2`
  color: ${COLORS.grey};
`;
const Text = styled.h4`
  color: ${COLORS.grey};
  margin: 10px 0 10px 0;
`;

const SmallText = styled.p`
  color: ${COLORS.purpel};
`;
export default function StartScreen() {
  const [menuValue, setMenuValue] = useState("Welcome");

  const handleOnChange = (value) => {
    setMenuValue(value);
  };

  return (
    <Background>
      <Menu value={menuValue} onChange={handleOnChange}>
        <Menu.Item label="Welcome" value="Welcome" />
        <Menu.Item label="Work" value="Work" />
        <Menu.Item label="About me" value="About me" />
        <Menu.Item label="Contact" value="Contact" />
      </Menu>
      <div className={styles.titleContainer}>
        <SmallText>Hi I'm </SmallText>
        <Header>SANDRA SMREKAR</Header>
        <SubHeader>A frontend developer</SubHeader>
        <Text>
          I am a software engineer with passion for coding and learning new
          things.
        </Text>
      </div>
      <LinkIcons />
    </Background>
  );
}
