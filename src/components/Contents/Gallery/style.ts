import styled from "styled-components";
import { ContentContainer } from "../style";

export const GalleryContainer = styled(ContentContainer)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-height: 600px;
  background-color: black;
`;

export const ImageStyled = styled.img`
  max-width: 60%;
  max-height: 600px;
  margin: auto;
  display: block;
`;
