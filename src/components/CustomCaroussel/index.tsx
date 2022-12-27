import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Box, VStack, Text, Img } from "@chakra-ui/react";
import { Navigation, Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { TimeLine } from "../../mocks/mockedSlides";

interface CustomCarousselProps {
  slides: TimeLine;
}

export const CustomCaroussel = ({ slides }: CustomCarousselProps) => {
  const handleClickArrow = (arrow: string) => {
    const arrowSelected = document.querySelector(`.swiper-button-${arrow}`) as HTMLDivElement | null;
    if (arrowSelected != null) arrowSelected.click();
  };

  return (
    <Box w="100%" pos="relative">
      <Swiper
        breakpoints={{
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1440: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        spaceBetween={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        freeMode={{
          enabled: true,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Autoplay, FreeMode]}
        className="mySwiper">
        {slides.map((value, index) => (
          <SwiperSlide key={index}>
            <VStack textAlign="center">
              <Text color="#b5b5b5" fontWeight={900} fontSize={75}>
                {value.year}
              </Text>
              {value.image != null ? (
                <Img
                  src={value.image}
                  alt={value.description}
                  w={{ lg: "310px", xl: "330px" }}
                  h={{ lg: "310px", xl: "330px" }}
                  objectFit="cover"
                />
              ) : (
                <Box w={{ lg: "310px", xl: "330px" }} h={{ lg: "310px", xl: "330px" }} bg="green.300" />
              )}
              <Text color="black">{value.description}</Text>
            </VStack>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        pos="absolute"
        left={-7}
        top="55%"
        transform="translateY(-50%)"
        cursor="pointer"
        onClick={() => handleClickArrow("prev")}>
        <IoIosArrowBack color="#5f5f5f" size={40} />
      </Box>
      <Box
        pos="absolute"
        right={-7}
        top="55%"
        transform="translateY(-50%)"
        cursor="pointer"
        onClick={() => handleClickArrow("next")}>
        <IoIosArrowForward color="#5f5f5f" size={40} />
      </Box>
    </Box>
  );
};
