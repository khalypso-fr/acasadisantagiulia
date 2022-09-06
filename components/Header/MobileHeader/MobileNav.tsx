import { useOutsideClick, VStack, CloseButton, Button } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";
import { headerNavigationFeatures } from "../../../config/navigationFeatures";

export const MobileNav: FC<{ onClose: () => void }> = ({ onClose }) => {
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
      {headerNavigationFeatures.map((feature, index) => (
        <Button
          variant={"ghost"}
          key={index}
          colorScheme="brand"
          w="full"
          leftIcon={<feature.icon />}
          as={Link}
          href={feature.href}
        >
          {feature.title}
        </Button>
      ))}
    </VStack>
  );
};
