import { chakra, Box, Link } from "@chakra-ui/react";
import { FC } from "react";
import { NavigationFeature } from "../../../config/navigationFeatures";

export const NavigationFeatureSection: FC<NavigationFeature> = ({
  title,
  description,
  ...props
}) => {
  return (
    <Link m={-3} p={3} display="flex" alignItems="start" rounded="lg">
      <chakra.svg
        flexShrink={0}
        h={6}
        w={6}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <props.icon />
      </chakra.svg>
      <Box ml={4}>
        <chakra.p fontSize="sm" fontWeight="700">
          {title}
        </chakra.p>
        <chakra.p mt={1} fontSize="sm">
          {description}
        </chakra.p>
      </Box>
    </Link>
  );
};
