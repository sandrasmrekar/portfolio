/**
 * This is the landing screen.
 */

import styled from "styled-components";
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
  return (
    <Background>
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
