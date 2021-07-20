import styled from "styled-components";
import { colors } from "../../../design/colorsStyles/colorStyles";

export const AboutContainer = styled.div`
  background-color: black;
  background-color: ${colors.thirdColor};
`;

export const MiniContentContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-height: 600px;
`;

export const HeaderContainer = styled.div`
  padding: 25px;
  margin: auto;
  font-weight: bold;
  text-align: center;
`;

export const TextContainer = styled.div`
  margin: auto;
  margin-right: 5%;
  font-size: 1vw;
  max-height: 60vh;
  padding: 15px;
  border: 3px solid ${colors.darkColor};
  border-radius: 5px;
  background-color: ${colors.thirdColor};
  text-align: justify;
  text-justify: inter-word;
  box-shadow: 0 12px 14px rgba(0, 0, 0, 0.12), 0 12px 14px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const SmallImageStyled = styled.img`
  margin-right: 5%;
  margin-left: 5%;
  margin-bottom: 5%;
  border: 2px solid rgba(40, 40, 40, 0.55);
  border-radius: 2px;
  max-width: 30%;
  max-height: 300px;
  box-shadow: 0 12px 14px rgba(0, 0, 0, 0.12), 0 12px 14px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;
