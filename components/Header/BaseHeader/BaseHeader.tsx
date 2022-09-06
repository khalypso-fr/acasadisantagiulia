import {
  BoxProps,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  SimpleGrid,
  Box,
  PopoverArrow,
} from "@chakra-ui/react";
import { FC } from "react";
import { headerNavigationFeatures } from "../../../config/navigationFeatures";
import { NavigationFeatureSection } from "./NavigationFeatureSection";
import { NavigationMenu } from "./NavigationMenu";
import { NavigationMenuButton } from "./NavigationMenuButton";

export const BaseHeader: FC<BoxProps> = (props) => {
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
        {...props}
      >
        <NavigationMenu />
      </Box>
    </>
  );
};
