import { Button, IconButton } from "@chakra-ui/button";
import { CloseButton } from "@chakra-ui/close-button";
import { Box, Heading, VStack } from "@chakra-ui/layout";
import { useDisclosure, useOutsideClick } from "@chakra-ui/react";
import React from "react";
import { FC } from "react";
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import Image from "next/image";
import { Features } from "./features";

export const MobileHeader = () => {
  const mobileNav = useDisclosure();
  return (
    <>
      <Box
        position={"fixed"}
        h={"60px"}
        w={"full"}
        bg={"brand.700"}
        boxShadow={"md"}
        px={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display={"flex"} alignItems="center" gap={2}>
          <Image src={"/logo.png"} height={"40px"} width={"40x"} />
          <Heading fontSize={"md"} color="brand.200">
            A CASA DI SANTA GIULIA
          </Heading>
        </Box>

        <IconButton
          aria-label="Ouvrir le menu"
          fontSize="20px"
          color="brand.200"
          variant="ghost"
          icon={<AiOutlineMenu />}
          onClick={mobileNav.onOpen}
        />
      </Box>
      {mobileNav.isOpen && <MobileNav onClose={mobileNav.onClose} />}
    </>
  );
};

const MobileNav: FC<{ onClose: () => void }> = ({ onClose }) => {
  const menuRef = React.useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: menuRef,
    handler: onClose,
  });
  return (
    <VStack
      ref={menuRef}
      pos="fixed"
      top={0}
      left={0}
      right={0}
      flexDirection="column"
      display={"flex"}
      p={2}
      pb={4}
      bg={"white"}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={onClose}
      />
      {Features.map((feature, index) => (
        <Button
          variant={"ghost"}
          key={index}
          colorScheme="brand"
          w="full"
          leftIcon={<feature.icon />}
        >
          {feature.title}
        </Button>
      ))}
    </VStack>
  );
};
