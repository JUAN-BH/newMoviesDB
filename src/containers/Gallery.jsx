import { useGlobalStateContext } from "../contexts/GlobalStateContext";
import { Swiper } from "swiper/react";
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const Gallery = ({ children }) => {
  const { state } = useGlobalStateContext();
  return (
    <Swiper
      modules={[Navigation, A11y]}      
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={true}
      breakpoints={{
        280: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        450: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        585: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        825: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
      }}
    >
      {children}
    </Swiper>
  );
};
