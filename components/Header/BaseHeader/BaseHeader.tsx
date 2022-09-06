import { BoxProps, Box } from "@chakra-ui/react";
import { FC, forwardRef } from "react";
import { NavigationMenu } from "./NavigationMenu";

export const BaseHeader: FC<BoxProps> = (props) => (
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
    <NavigationMenu />
  </Box>
);
