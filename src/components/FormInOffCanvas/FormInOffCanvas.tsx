import { InputChangeEvent } from "precise-ui/dist/es6";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { IUserForm } from "../../types/IUserForm";
import { checkIsSomethingInInput } from "../../utils/checkIsSomethingInInput";
import { checkMinLengthInput } from "../../utils/checkMinLengthInput";
import { ButtonStyled } from "../style";
import {
    FormContainer,
    StyledTextField,
    StyledTextFieldWrapper
} from "./style";

const emptyForm: IUserForm = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

interface IProps {
  handleFormInUse: (isUserUsed: boolean) => void;
}

const FormInOffCanvas: React.FC<IProps> = ({ handleFormInUse }) => {
  const [userForm, setUserForm] = useState<IUserForm>(emptyForm);
  const [isHuman, setIsHuman] = useState(false);

  useEffect(() => {
    if (checkIsSomethingInInput(userForm)) {
      handleFormInUse(true);
    } else {
      handleFormInUse(false);
    }
  }, [handleFormInUse, userForm]);

  const handleSubmitButton = () => {
    if (checkMinLengthInput(userForm)) {
      console.log(userForm);
      
    } else {
      alert("Nie wszystkie pola są uzupełnione");
    }
  };

  const handleOnChange = (e: InputChangeEvent<string>) => {
    //
    // Add Validation IMPORTANT //
    //
    const target = e.value;
    setUserForm({ ...userForm, [e.originalEvent?.target.name]: target });
  };

//   const captchaTest = () => {
      
//   }

  return (
    <FormContainer>
      <Form>
        <StyledTextFieldWrapper>
          <StyledTextField
            maxLength={40}
            type="text"
            name="fullName"
            autoFocus={true}
            onChange={handleOnChange}
            value={userForm.fullName}
            label="Imię i Nazwisko"
          />
        </StyledTextFieldWrapper>
        <StyledTextFieldWrapper>
          <StyledTextField
            maxLength={64}
            type="email"
            name="email"
            onChange={handleOnChange}
            value={userForm.email}
            label="Email"
          />
        </StyledTextFieldWrapper>
        <StyledTextFieldWrapper>
          <StyledTextField
            maxLength={14}
            type="tel"
            name="phone"
            onChange={handleOnChange}
            value={userForm.phone}
            label="Telefon"
          />
        </StyledTextFieldWrapper>
        <StyledTextFieldWrapper>
          <StyledTextField
            maxLength={150}
            multiline
            type="text"
            name="message"
            onChange={handleOnChange}
            value={userForm.message}
            label="Wiadomość"
          />
        </StyledTextFieldWrapper>
        <ButtonStyled variant="primary" onClick={handleSubmitButton} disabled={!isHuman}>
          Wyślij &#128512;
        </ButtonStyled>
      </Form>
    </FormContainer>
  );
};

export default FormInOffCanvas;
