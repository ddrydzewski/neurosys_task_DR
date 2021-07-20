import { OffcanvasTitle } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../../design/colorsStyles/colorStyles";

export const OffcanvasTitleStyled = styled(OffcanvasTitle)`
  padding: 0.5rem;
  text-align: center;
  margin: auto;
  font-size: 40px;
  color: ${colors.primeColor};
`;

export const ContactContainer = styled.div`
  color: rgba(255, 255, 255, 0.90);
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  font-family: Myfont, Arial, sans-serif;
  &:hover{
    color: ${colors.bonusColor}
  }
`;

export const CompleteFormContainer = styled.div`
  position: absolute;
  margin: auto;
  animation: fadein 0.5s;
  -moz-animation: fadein 0.5s; /* Firefox */
  -webkit-animation: fadein 0.5s; /* Safari and Chrome */
  -o-animation: fadein 0.5s; /* Opera */

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
