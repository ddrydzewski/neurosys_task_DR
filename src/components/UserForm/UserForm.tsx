import { InputChangeEvent } from "precise-ui/dist/es6";
import React, { useEffect, useRef, useState } from "react";
import { Form, Overlay, Tooltip } from "react-bootstrap";
import { IUserForm } from "../../types/IUserForm";
import { checkIsSomethingInInput } from "../../utils/checkIsSomethingInInput";
import {
  isGoodEmail,
  isGoodFullName,
  isGoodPhoneNumber
} from "../../utils/validation";
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
  const [isSubmited, setIsSubmited] = useState(false);
  const [isValidetedFullName, setIsValidetedFullName] = useState(false);
  const [isValidetedEmail, setIsValidetedEmail] = useState(false);
  const [isValidetedPhone, setIsValidetedPhone] = useState(false);

  const fullNameInputRef = useRef<HTMLHeadingElement>(null);
  const emailInputRef = useRef<HTMLHeadingElement>(null);
  const phoneInputRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (checkIsSomethingInInput(userForm)) {
      checkFormInUse(true);
    } else {
      checkFormInUse(false);
    }
    setIsSubmited(false);
  }, [checkFormInUse, userForm]);

  const handleSubmitButton = () => {
    const valFullName = isGoodFullName(userForm.fullName);
    const valEmail = isGoodEmail(userForm.email);
    const valPhone = isGoodPhoneNumber(userForm.phone);
    setIsSubmited(true);

    if (valFullName && valEmail && valPhone) {
      setUserForm(emptyForm);
      checkIsComplete(true);
      checkFormInUse(false);
    } else {
      alert("Sprawdź pola");
    }
    setIsValidetedFullName(valFullName);
    setIsValidetedEmail(valEmail);
    setIsValidetedPhone(valPhone);
  };

  const handleOnChange = (e: InputChangeEvent<string>) => {
    const target = e.value;
    setUserForm({ ...userForm, [e.originalEvent?.target.name]: target });
  };

  return (
    <FormContainer>
      <Form>
        <StyledTextFieldWrapper ref={fullNameInputRef}>
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
        <StyledTextFieldWrapper ref={emailInputRef}>
          <StyledTextField
            maxLength={64}
            type="email"
            name="email"
            onChange={handleOnChange}
            value={userForm.email}
            label="Email"
          />
        </StyledTextFieldWrapper>
        <StyledTextFieldWrapper ref={phoneInputRef}>
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
        <Overlay target={fullNameInputRef} show={!isValidetedFullName && isSubmited} placement="left">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Tylko litery
          </Tooltip>
        )}
      </Overlay>
      <Overlay target={emailInputRef} show={!isValidetedEmail && isSubmited} placement="left">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Sprawdź poprawność Emaila
          </Tooltip>
        )}
      </Overlay>
      <Overlay target={phoneInputRef} show={!isValidetedPhone && isSubmited} placement="left">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Tylko cyfry
          </Tooltip>
        )}
      </Overlay>
        <Captcha handleSubmitButton={handleSubmitButton} />
      </Form>
    </FormContainer>
  );
};

export default UserForm;



// {/* <Flyout
// open={!isValidetedPhone && isSubmited}
// position={"left"}
// content="Tylko Numery"
// /> */}