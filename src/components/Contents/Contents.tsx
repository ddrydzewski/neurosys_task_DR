import React from "react";
import About from "./About/About";
import Gallery from "./Gallery/Gallery";
import Starter from "./Starter/Starter";
import { MainContentContainer } from "./style";
import VideosComp from "./VideosComp/VideosComp";

const Contents = () => {
  return (
    <MainContentContainer>
      <Starter />
      <About />
      <Gallery />
      <VideosComp />
    </MainContentContainer>
  );
};

export default Contents;
