import React from "react";

import { Box } from "@chakra-ui/react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

export const Caroussel = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={0}
      slidesPerGroup={4}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper">
      <SwiperSlide>
        <Box w="330px" h="330px" bg="red"></Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box w="330px" h="330px" bg="green"></Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box w="330px" h="330px" bg="blue"></Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box w="330px" h="330px" bg="black"></Box>
      </SwiperSlide>
    </Swiper>
  );
};
