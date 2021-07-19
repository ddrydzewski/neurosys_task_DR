import { InputChangeEvent } from "precise-ui/dist/es6";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { IUserForm } from "../../types/IUserForm";
import { checkIsSomethingInInput } from "../../utils/checkIsSomethingInInput";
import { checkMinLengthInput } from "../../utils/checkMinLengthInput";
import Captcha from "../Captcha/Captcha";
import {
  FormContainer,
  StyledTextField,
  StyledTextFieldWrapper
} from "./style";

interface IProps {
  checkFormInUse: (isUserUsed: boolean) => void;
  checkIsComplete: (isComplete: boolean) => void;
}

const emptyForm: IUserForm = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

const UserForm: React.FC<IProps> = ({ checkFormInUse, checkIsComplete }) => {
  const [userForm, setUserForm] = useState<IUserForm>(emptyForm);

  useEffect(() => {
    if (checkIsSomethingInInput(userForm)) {
      checkFormInUse(true);
    } else {
      checkFormInUse(false);
    }
  }, [checkFormInUse, userForm]);

  const handleSubmitButton = () => {
    if (checkMinLengthInput(userForm)) {
      setUserForm(emptyForm);
      checkIsComplete(true);
      checkFormInUse(false);
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
            maxLength={500}
            multiline
            type="text"
            name="message"
            onChange={handleOnChange}
            value={userForm.message}
            label="Wiadomość"
          />
        </StyledTextFieldWrapper>
        <Captcha handleSubmitButton={handleSubmitButton} />
      </Form>
    </FormContainer>
  );
};

export default UserForm;
