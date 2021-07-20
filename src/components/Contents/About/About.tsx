import React from "react";
import background from "../../../design/backgrounds/gray-lines.png";
import barImageAbout from "../../../design/images/baranovskiImages/bAbout.jpg";
import {
  AboutContainer,
  HeaderContainer,
  MiniContentContainer,
  SmallImageStyled,
  TextContainer
} from "./style";

const About = () => {
  return (
    <>
      <AboutContainer
        id="about"
        style={{ backgroundImage: `url(${background})` }}
      >
        <HeaderContainer>
          <h1>BARANOVSKI</h1>
        </HeaderContainer>
        <MiniContentContainer>
          <SmallImageStyled
            className="d-block w-100"
            src={barImageAbout}
            alt=""
          />
          <TextContainer>
            Baranovski (zapis stylizowany: BARANOVSKI), właściwie Wojciech
            Baranowski (ur. 29 lipca 1991 w Opocznie) – polski wokalista,
            kompozytor, autor tekstów i pianista. Absolwent II Liceum
            Ogólnokształcącego w Piotrkowie Trybunalskim. W 2018 rozpoczął
            karierę solową, przybierając pseudonim Baranovski. 31 stycznia wydał
            pierwszy utwór „Mamo”, a miesiąc później – debiutancki singiel
            „Dym”, z którym dotarł do 21. miejsca AirPlay – Top, będącego
            zestawieniem najczęściej odtwarzanych utworów w polskich
            rozgłośniach radiowych. 21 maja zaprezentował drugi singiel „Hey”,
            22 sierpnia – trzeci singiel „Luźno”, który dotarł do 10. miejsca w
            zestawieniu AirPlay – Top, a 17 stycznia 2019 – czwarty singiel
            „Zbiór”. Piosenki umieścił na debiutanckim, solowym albumie
            studyjnym pt. Zbiór, którego premiera odbyła się 25 października.
          </TextContainer>
        </MiniContentContainer>
      </AboutContainer>
    </>
  );
};

export default About;
