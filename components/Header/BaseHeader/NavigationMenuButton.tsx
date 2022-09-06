import { Button, ButtonProps } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export const NavigationMenuButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { isOpen: boolean }
>(({ isOpen, ...props }, ref) => (
  <Button
    ref={ref}
    {...props}
    textTransform={"capitalize"}
    variant={"ghost"}
    alignItems="center"
    fontSize="md"
    leftIcon={<Image src={"/logo.png"} width="40px" height="40px" />}
    rightIcon={isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
    textColor={"white"}
    _hover={{ textColor: "white", bg: "brand.600" }}
    _active={{ bg: "brand.500" }}
  >
    A casa di Santa Giulia
  </Button>
));
