import {
  useDisclosure,
  Heading,
  IconButton,
  Box,
  BoxProps,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { MobileNav } from "./MobileNav";
import Image from "next/image";
import { FC, forwardRef } from "react";

export const MobileHeader: FC<BoxProps> = (props) => {
  const mobileNav = useDisclosure();
  return (
    <>
      <Box
        h={"60px"}
        w={"full"}
        bg={"brand.700"}
        boxShadow={"md"}
        px={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        {...props}
      >
        <Box display={"flex"} alignItems="center" gap={2}>
          <Image src={"/logo.png"} height={"40px"} width={"40x"} />
          <Heading
            fontSize={"md"}
            color="white"
            textTransform={"capitalize"}
            cursor="default"
          >
            A casa di Santa Giulia
          </Heading>
        </Box>
        <IconButton
          aria-label="Open menu"
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
