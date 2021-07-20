import styled from "styled-components";
import { colors } from "../../../design/colorsStyles/colorStyles";
import { ContentContainer } from "../style";

export const VideosContainer = styled(ContentContainer)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-height: 600px;
  background-color: ${colors.thirdColor};
`;

export const VideoContainer = styled.div`
  max-width: 50%;
  max-height: 600px;
  margin: auto;
  display: block;
`;
