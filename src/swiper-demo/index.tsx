import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./index.less";

export const SwiperDemo = () => {
  return (
    <Swiper
      direction="vertical"
      watchSlidesProgress
      slidesPerView="auto"
      onSlideChange={(swiper) =>
        console.log("onSlideChange", swiper.activeIndex)
      }
      onSlideChangeTransitionStart={(swiper) =>
        console.log("onSlideChangeTransitionStart", swiper.activeIndex)
      }
      onSlideChangeTransitionEnd={(swiper) =>
        console.log("onSlideChangeTransitionEnd", swiper.activeIndex)
      }
    >
      <SwiperSlide className="slide0">
        <div style={{ height: 230 }}>1</div>
      </SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
      <SwiperSlide>4</SwiperSlide>
      <SwiperSlide>5</SwiperSlide>
    </Swiper>
  );
};
