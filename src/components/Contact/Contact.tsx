import { Modal, ModalBody, ModalHeader } from "precise-ui/dist/es6";
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import UserForm from "../UserForm/UserForm";
import { ContactContainer, OffcanvasTitleStyled } from "./style";

const Contact = () => {
  const [show, setShow] = useState(false);
  const [isFormInUse, setIsFormInUse] = useState(false);
  const [isCompleteForm, setIsCompleteForm] = useState(false);

  const checkFormInUse = (isUserUsed: boolean) => {
    setIsFormInUse(isUserUsed);
  };

  const checkIsComplete = (isComplete: boolean) => {
    setIsCompleteForm(true);
  };

  const endUserForm = () => {
    setIsCompleteForm(false);
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    if (isFormInUse) {
      if (
        window.confirm(
          "Czy na pewno chcesz zamknąć formularz? Coś już napisałeś"
        )
      ) {
        setShow(false);
      }
    } else {
      setShow(false);
    }
  };

  return (
    <>
      <ContactContainer>
        <div onClick={handleShow}>Kontakt</div>
      </ContactContainer>
      <div onClick={endUserForm}>
        <Modal open={isCompleteForm}>
          <ModalHeader title="Dziękujemy za wiadomość" label="&#128526;" />
          <ModalBody>
            Twója wiadomość została przyjęta, postaramy się odpoweidzieć w
            najbliższym czasie. Wiadomość zostanie wysłana na twojego e-maila.
          </ModalBody>
        </Modal>
      </div>
      <Offcanvas
        show={show && !isCompleteForm}
        onHide={handleClose}
        placement="end"
        style={{ width: "50%", overflowY: "auto" }}
      >
        <Offcanvas.Header>
          <OffcanvasTitleStyled>
            Menadżer wszystko czyta &#128526;
          </OffcanvasTitleStyled>
        </Offcanvas.Header>
        <UserForm
          checkFormInUse={checkFormInUse}
          checkIsComplete={checkIsComplete}
        />
      </Offcanvas>
    </>
  );
};

export default Contact;
