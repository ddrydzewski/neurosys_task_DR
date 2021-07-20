import React from "react";
import Contents from "./Contents/Contents";
import { MainContainer } from "./style";
import TopNavbar from "./TopNavbar/TopNavbar";

const Main = () => {
  return (
    <MainContainer>
      <TopNavbar />
      <Contents />
    </MainContainer>
  );
};

export default Main;
