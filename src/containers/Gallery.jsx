import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;

  return (
    <IconChevronRight
      className="btnRight"
      onClick={() => onClick()}
      size={40}
    />
  );
};
const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;

  return (
    <IconChevronLeft className="btnLeft" onClick={() => onClick()} size={40} />
  );
};

export const Gallery = ({ children }) => {
  const responsive = {
    desktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3040, min: 1024 },
      items: 6,
      slidesToSlide: 6, // optional, default to 1.
    },
    laptop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1024, min: 768 },
      items: 5,
      slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 768, min: 430 },
      items: 4,
      slidesToSlide: 4,
    },
    mobile: {
      breakpoint: { max: 430, min: 320 },
      items: 3,
      slidesToSlide: 3,
    },
    smallMobile: {
      breakpoint: { max: 320, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      // infinite={true}
      // slidesToSlide={2}
      customTransition="all 1s ease"
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
    >
      {children}
    </Carousel>
  );
};
