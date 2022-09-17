import { Box, Button, Heading } from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/layout";
import gsap from "gsap";
import { FC, useEffect } from "react";

const IndexLoggedOut: FC = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "bounce",
        duration: 1,
      },
    });

    tl.to(".index-initial-subtitle", {
      y: 0,
      opacity: 1,
      duration: 1,
    });

    tl.add("index-label");

    tl.to(
      ".index-hidden-subtitle",
      {
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 1,
        y: -40,
      },
      "index-label+=0.5"
    ).to(
      ".index-initial-subtitle",
      {
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        y: -20,
        opacity: 0,
      },
      "index-label+=0.5"
    );

    tl.add("text-complete");

    tl.to(
      ".call-to-action",
      {
        opacity: 1,
        scale: 1,
        ease: "bounce",
        duration: 0.3,
      },
      "text-complete+=0.25"
    );
  }, []);

  return (
    <Box
      minHeight="2xl"
      bgImage="/bg-muscle.jpg"
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
      display="flex"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="full"
        bgColor="rgba(0, 0, 0, 0.3)"
      >
        <Heading
          clipPath="polygon(0 100%, 100% 100%, 100% 0, 0 0)"
          as="h2"
          letterSpacing="1px"
          color="white"
          fontSize="6xl"
          opacity="0"
          className="index-initial-subtitle"
          transform="translateY(-40px)"
        >
          You Are A God
        </Heading>
        <Heading
          clipPath="polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
          opacity="0"
          as="h2"
          letterSpacing="1px"
          color="white"
          fontSize="6xl"
          className="index-hidden-subtitle"
          position="absolute"
          transform="translateY(-80px)"
        >
          Stop Acting Like A Mortal!
        </Heading>
        <Text fontSize="3xl" color="white">
          Signup now to unlock your buried muscle fibers
        </Text>

        <Button
          className="call-to-action"
          position="relative"
          top="4"
          type="button"
          variant="solid"
          bg="#ffd188"
          opacity="0"
          transform="scale(0.8)"
        >
          Sign Up Today
        </Button>
      </Flex>
    </Box>
  );
};

export default IndexLoggedOut;
