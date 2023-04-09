import React from "react";
import Carousel from "react-multi-carousel";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import "react-multi-carousel/lib/styles.css";
import { useGlobalStateContext } from "../../contexts/GlobalStateContext";
import { Loading } from "../../components/Loading/Index";

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
  const { state } = useGlobalStateContext();
  const responsive = {
    desktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3040, min: 1024 },
      items: 6,
      slidesToSlide: 6, // optional, default to 1.
    },
    laptop: {
      breakpoint: { max: 1024, min: 825 },
      items: 5,
      slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 825, min: 585 },
      items: 4,
      slidesToSlide: 4,
    },
    mobile: {
      breakpoint: { max: 585, min: 450 },
      items: 3,
      slidesToSlide: 3,
    },
    smallMobile: {
      breakpoint: { max: 450, min: 280 },
      items: 2,
      slidesToSlide: 2,
    },
    verySmallMobile: {
      breakpoint: { max: 280, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Carousel
      className="carrousel"
      responsive={responsive}
      // infinite={true}
      // slidesToSlide={2}
      // centerMode={false}
      customTransition="all 1s ease"
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
    >
      {state.loading ? <Loading /> : children}
    </Carousel>
  );
};
