import React from "react";
import { Carousel } from "react-bootstrap";
import barImage1 from "../../../design/images/baranovskiImages/b1.jpg";
import barImage2 from "../../../design/images/baranovskiImages/b2.jpg";
import barImage3 from "../../../design/images/baranovskiImages/b3.jpg";
import { GalleryContainer, ImageStyled } from "./style";

const Gallery = () => {
  return (
    <GalleryContainer id="gallery">
      <Carousel>
        <Carousel.Item interval={3000}>
          <ImageStyled className="d-block w-100" src={barImage1} alt="" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <ImageStyled className="d-block w-100" src={barImage2} alt="" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <ImageStyled className="d-block w-100" src={barImage3} alt="" />
        </Carousel.Item>
      </Carousel>
    </GalleryContainer>
  );
};

export default Gallery;
