import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import FormInOffCanvas from "../FormInOffCanvas/FormInOffCanvas";
import { ButtonStyled } from "../style";
import { OffCanvasContainer } from "./style";

const OffCanvasRight = () => {
  const [show, setShow] = useState(false);
  const [isFormInUse, setIsFormInUse] = useState(false);

  const handleFormInUse = (isUserUsed: boolean) => {
    setIsFormInUse(isUserUsed);
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
    <OffCanvasContainer>
      <ButtonStyled variant="primary" onClick={handleShow}>
        Kontakt
      </ButtonStyled>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ width: "50%" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div>Napisz do nas jeśli masz jakieś pytania :)</div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <FormInOffCanvas handleFormInUse={handleFormInUse} />
      </Offcanvas>
    </OffCanvasContainer>
  );
};

export default OffCanvasRight;
