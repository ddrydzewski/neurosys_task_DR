import { TextField } from "precise-ui/dist/es6";
import { Form } from "react-bootstrap";
import styled from "styled-components";

export const FormContainer = styled(Form)`
  width: 75%;
  margin: auto;
  padding: 12px;
`;

export const StyledTextFieldWrapper = styled.div`
  margin-bottom: 0.5rem;
`;

export const StyledTextField = styled(TextField)`
  color: black;
  overflow-wrap: normal;
  word-break: keep-all;
`;
