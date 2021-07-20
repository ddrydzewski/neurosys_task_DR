import styled from "styled-components";
import { ContentContainer } from "../style";
export const StarterContainer = styled(ContentContainer)`
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;

export const HugeText = styled.div`
  font-size: 6vw;
  font-weight: bold;
  padding: 50px;
  font-family: Myfont, Arial, Helvetica, sans-serif;
  color:black;
`;

export const SocialIconsContainer = styled.div`
  position: absolute;
  margin-left: 2%;
`;

export const SocialIconsStyled = styled.img`
  width: 2vw;
  cursor: pointer;
  margin-right: 20px;
`;
