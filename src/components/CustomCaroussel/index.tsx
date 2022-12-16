import React from "react";

import { Box, VStack, Text } from "@chakra-ui/react";
import { Navigation } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

interface CustomCarousselProps {
  slides: string[];
}

export const CustomCaroussel = ({ slides }: CustomCarousselProps) => {
  const handleClickArrow = (arrow: string) => {
    const arrowSelected = document.querySelector(`.swiper-button-${arrow}`) as HTMLDivElement | null;
    if (arrowSelected) arrowSelected.click();
  };

  return (
    <Box w="100%" pos="relative">
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
        {slides.map((value, index) => (
          <SwiperSlide key={index}>
            <VStack textAlign="center">
              <Text color="#b5b5b5" fontWeight={900} fontSize={75}>
                1993
              </Text>
              <Box w="330px" h="330px" bg={value}></Box>
              <Text color="black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis erat fermentum, accumsan turpis eget,
                efficitur sapien. Nulla molestie et sem ac porttitor.
              </Text>
            </VStack>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        pos="absolute"
        left={-7}
        top="50%"
        transform="translateY(-50%)"
        cursor="pointer"
        onClick={() => handleClickArrow("prev")}>
        <IoIosArrowBack color="#5f5f5f" size={40} />
      </Box>
      <Box
        pos="absolute"
        right={-7}
        top="50%"
        transform="translateY(-50%)"
        cursor="pointer"
        onClick={() => handleClickArrow("next")}>
        <IoIosArrowForward color="#5f5f5f" size={40} />
      </Box>
    </Box>
  );
};
