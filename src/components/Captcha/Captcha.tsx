import { Icon } from "precise-ui/dist/es6";
import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import SqadImage from "../../design/images/dino.png";
import { getRandomRotate } from "../../utils/getRandomRotete";
import { ButtonContainer } from "../style";
import { DinoImageContainer, UserControlContainer } from "./style";

interface IProps {
  handleSubmitButton: () => void;
}

const Captcha: React.FC<IProps> = ({ handleSubmitButton }) => {
  const [userAttempts, setUserAttempts] = useState<number>(0);
  const [round, setRound] = useState<number>(getRandomRotate());

  const checkCaptcha = () => {
    if (userAttempts > 2) {
      setUserAttempts(0);
      setRound(getRandomRotate());
    } else {
      if ((round < 30 && round > -30) || round === 360) {
        handleSubmitButton();
      } else {
        setUserAttempts(userAttempts + 1);
      }
    }
  };

  const handleLeftRound = () => {
    if (round - 15 <= 0) {
      setRound(360);
    } else {
      setRound(round - 15);
    }
  };

  const handleRightRound = () => {
    if (round + 15 >= 360) {
      setRound(0);
    } else {
      setRound(round + 15);
    }
  };

  return (
    <div>
      <DinoImageContainer>
        <h4>Aby wysłać ustaw odpowiednio obrazek</h4>
        <Image
          src={SqadImage}
          rounded
          style={{
            textAlign: "center",
            margin: "auto",
            transform: "rotate(" + round.toString() + "deg)",
            width: "125px",
            marginBottom: "20px",
          }}
        />
      </DinoImageContainer>
      <UserControlContainer>
        <Button
          variant="outline-info"
          style={{ marginRight: "5px" }}
          onClick={handleLeftRound}
        >
          <Icon name="KeyboardArrowLeft" />
        </Button>
        <Button variant="outline-info" onClick={handleRightRound}>
          <Icon name="KeyboardArrowRight" />
        </Button>
      </UserControlContainer>
      <UserControlContainer>
        <ButtonContainer style={{ display: "block" }}>
          <Button
            variant="outline-info"
            onClick={checkCaptcha}
            style={{ color: "black" }}
          >
            Wyślij
          </Button>
        </ButtonContainer>
      </UserControlContainer>
    </div>
  );
};

export default Captcha;
