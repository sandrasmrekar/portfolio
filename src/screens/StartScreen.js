/**
 * This is the landing screen.
 */

import { useState } from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import { COLORS } from "../styles/colors";

const Background = styled.div`
  background-color: ${COLORS.background};
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

const TitleContainer = styled.div`
  margin-left: 20%;
  margin-top: 15%;
`;

const Header = styled.h1`
  color: ${COLORS.white};
`;

const SubHeader = styled.h2`
  color: ${COLORS.grey};
`;
const Text = styled.h4`
  color: ${COLORS.grey};
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
      <TitleContainer>
        <SmallText>Hi my name is </SmallText>
        <Header>SANDRA SMREKAR</Header>
        <SubHeader>A frontend developer</SubHeader>
        <Text>
          I am a software engineer with passion for coding and learning new
          things.
        </Text>
      </TitleContainer>
    </Background>
  );
}
