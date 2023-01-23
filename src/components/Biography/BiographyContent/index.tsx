import React from "react";

import bio_image1 from "@/assets/bio_image1.png";
import bio_image2 from "@/assets/bio_image2.png";
import bio_image3 from "@/assets/bio_image3.png";
import { Box, Divider, Flex, Heading, Img, SimpleGrid, Text, VStack } from "@chakra-ui/react";

export const BiographyContent = () => {
  return (
    <SimpleGrid w="100%" columns={2} spacing={14} mt={14} mb={52}>
      <VStack gap={{ lg: 10, xl: 20 }}>
        <Img src={bio_image1} w="100%" />
        <Box>
          <Heading as="h3" fontSize="1.7rem" fontWeight={400} mb={8}>
            HISTÓRIA
          </Heading>
          <Text fontSize={{ lg: "1rem", xl: "1.4rem" }} lineHeight={{ lg: "1rem", xl: "1.4rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id diam sit amet libero tempor gravida efficitur vel
            nibh. Donec quam quam, aliquam in bibendum in, placerat eget lacus. Aliquam congue felis pellentesque ex dictum, id
            dapibus dui vehicula. Mauris pharetra sem et dolor varius, vel euismod magna auctor. In dignissim nisl sed enim
            elementum, id ornare libero consectetur. Proin mattis semper massa, non viverra nisl tempor ac. Sed egestas libero sit
            amet felis pulvinar, eu congue eros finibus. Nulla facilisi. Integer lacinia nulla sit amet volutpat varius. Integer
            maximus mollis lectus, at luctus erat porttitor vel. Ut sit amet elementum velit. Maecenas id libero egestas arcu
            pellentesque mollis. Maecenas sit amet nunc sagittis, imperdiet dolor sit amet, laoreet leo. Sed varius tortor in
            euismod viverra. Ut porttitor quis eros at fringilla. Sed vel risus varius neque viverra vulputate. Vivamus interdum
            purus eu nisl tincidunt mattis.Nunc non turpis condimentum, vestibulum dolor at, facilisis mauris. Sed fringilla augue
            et risus pharetra efficitur. Donec ex felis, fermentum eget tempus in, laoreet sed urna. Sed mattis elementum ex ut
            ornare. Morbi scelerisque a ante a eleifend.
          </Text>
          <Text fontSize={{ lg: "1rem", xl: "1.4rem" }} lineHeight={{ lg: "1rem", xl: "1.4rem" }} mt={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id diam sit amet libero tempor gravida efficitur vel
            nibh. Donec quam quam, aliquam in bibendum in, placerat eget lacus. Aliquam congue felis pellentesque ex dictum, id
            dapibus dui vehicula. Mauris pharetra sem et dolor varius, vel euismod magna auctor. In dignissim nisl sed enim
            elementum, id ornare libero consectetur. Proin mattis semper massa, non viverra nisl tempor ac. Sed egestas libero sit
            amet felis pulvinar, eu congue eros finibus. Nulla facilisi. Integer lacinia nulla sit amet volutpat varius. Integer
            maximus mollis lectus, at luctus erat porttitor vel. Ut sit amet elementum velit. Maecenas id libero egestas arcu
            pellentesque mollis. Maecenas sit amet nunc sagittis, imperdiet dolor sit amet, laoreet leo. Sed varius tortor in
            euismod viverra. Ut porttitor quis eros at fringilla. Sed vel risus varius neque viverra vulputate. Vivamus interdum
            purus eu nisl tincidunt mattis.Nunc non turpis condimentum, vestibulum dolor at, facilisis mauris. Sed fringilla augue
            et risus pharetra efficitur. Donec ex felis, fermentum eget tempus in, laoreet sed urna. Sed mattis elementum ex ut
            ornare. Morbi scelerisque a ante a eleifend.
          </Text>
        </Box>
        <Img src={bio_image3} w="100%" />
      </VStack>
      <Flex direction="column" align="start">
        <Text
          fontSize={{ lg: "1rem", xl: "1.4rem" }}
          lineHeight={{ lg: "1rem", xl: "1.4rem" }}
          mt={6}
          maxW={{ lg: "80%", xl: "75%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id diam sit amet libero tempor gravida efficitur vel
          nibh. Donec quam quam, aliquam in bibendum in, placerat eget lacus. Aliquam congue felis pellentesque ex dictum, id
          dapibus dui vehicula. Mauris pharetra sem et dolor varius, vel euismod magna auctor. In dignissim nisl sed enim
          elementum, id ornare libero consectetur. Proin mattis semper massa, non viverra nisl tempor ac. Sed egestas libero sit
          amet felis pulvinar, eu congue eros finibus. Nulla facilisi. Integer lacinia nulla sit amet volutpat varius. Integer
          maximus mollis lectus, at luctus eros finibus. Nulla facilisi. Integer lacinia nulla sit amet volutpat varius. Integer
        </Text>
        <Img src={bio_image2} w="100%" mt={{ lg: "6rem", xl: "9rem" }} />
        <Box mt="8rem">
          <Divider h="3px" bg="black" />
          <Text fontSize={{ lg: "1rem", xl: "1.4rem" }} lineHeight={{ lg: "1rem", xl: "1.4rem" }} mt={10}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id diam sit amet libero tempor gravida efficitur vel
            nibh. Donec quam quam, aliquam in bibendum in, placerat eget lacus. Aliquam congue felis pellentesque ex dictum, id
            dapibus dui vehicula. Mauris pharetra sem et dolor varius, vel euismod magna auctor. In dignissim nisl sed enim
            elementum, id ornare libero consectetur. Proin mattis semper massa, non viverra nisl tempor ac. Sed egestas libero sit
            amet felis pulvinar, eu congue eros finibus. Nulla facilisi. Integer lacinia nulla sit amet volutpat varius. Integer
            maximus mollis lectus
          </Text>
          <Text fontSize={{ lg: "1rem", xl: "1.4rem" }} lineHeight={{ lg: "1rem", xl: "1.4rem" }} mt={12}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id diam sit amet libero tempor gravida efficitur vel
            nibh. Donec quam quam, aliquam in bibendum in, placerat eget lacus. Aliquam congue felis pellentesque ex dictum, id
            dapibus dui vehicula. Mauris pharetra sem et dolor varius, vel euismod magna auctor. In dignissim nisl sed enim
            elementum, id ornare libero consectetur. Proin mattis semper massa, non viverra nisl tempor ac. Sed egestas libero sit
            amet felis pulvinar, eu congue eros finibus. Nulla facilisi. Integer lacinia nulla sit amet volutpat varius. Integer
            maximus mollis lectus
          </Text>
        </Box>
      </Flex>
    </SimpleGrid>
  );
};
