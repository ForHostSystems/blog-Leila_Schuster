import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdDelete } from "react-icons/md";

import { useAuth } from "@/context/auth";
import { useTimeline } from "@/context/timeline";
import { ITimeLine } from "@/interfaces/timeline";
import { convertToUrl } from "@/utils/convertToUrl";
import { sortBy } from "@/utils/sortBy";
import { Box, VStack, Text, Img, useDisclosure, Button, Skeleton } from "@chakra-ui/react";
import { Navigation, Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { TimelineModal } from "../Modals/TimelineModal";

interface TimelineCarrosselProps {
  slides: ITimeLine[];
}

export interface SelectedMoment extends ITimeLine {
  position: number;
}

export const TimelineCarrossel = ({ slides }: TimelineCarrosselProps) => {
  const { authenticated } = useAuth();
  const { isLoading } = useTimeline();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMoment, setSelectedMoment] = useState<SelectedMoment | null>(null);
  const [isDelete, setIsDelete] = useState(false);
  const [momentToDelete, setMomentToDelete] = useState<number | null>(null);

  const handleClickArrow = (arrow: string) => {
    const arrowSelected = document.querySelector(`.swiper-button-${arrow}`) as HTMLDivElement | null;
    if (arrowSelected != null) arrowSelected.click();
  };

  const onOpenTimelineModal = (moment: ITimeLine, index: number) => {
    if (authenticated) {
      setSelectedMoment({ ...moment, position: index });
      onOpen();
    }
  };

  const onOpenDeleteModal = (id: number) => {
    setMomentToDelete(id);
    setIsDelete(true);
    onOpen();
  };

  const onCloseTimelineModal = () => {
    setSelectedMoment(null);
    setIsDelete(false);
    onClose();
  };

  return (
    <Box w="100%" pos="relative">
      <Swiper
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
        slidesPerGroup={1}
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
        {sortBy(slides, "year").map((value, index) => (
          <SwiperSlide key={value.id}>
            <VStack textAlign="center">
              <Skeleton isLoaded={!isLoading}>
                <Text color="#b5b5b5" fontWeight={900} fontSize={75}>
                  {value.year}
                </Text>
                <Img
                  src={convertToUrl(value.imagem_url)}
                  alt={value.description}
                  w={{ lg: "310px", xl: "330px" }}
                  h={{ lg: "310px", xl: "330px" }}
                  objectFit="cover"
                  _hover={{ curosr: "pointer" }}
                  onClick={() => onOpenTimelineModal(value, index)}
                />
                <Text color="black">{value.description}</Text>
                {authenticated && (
                  <Button onClick={() => onOpenDeleteModal(value.id)} variant="unstyled">
                    <MdDelete size="2rem" color="red" />
                  </Button>
                )}
              </Skeleton>
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

      <TimelineModal
        isOpen={isOpen}
        onClose={onCloseTimelineModal}
        moment={selectedMoment}
        isDelete={isDelete}
        momentToDelete={momentToDelete}
      />
    </Box>
  );
};
