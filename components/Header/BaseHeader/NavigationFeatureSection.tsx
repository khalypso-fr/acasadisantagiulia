import { Box, Text, Icon, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import { NavigationFeature } from "../../../config/navigationFeatures";

export const NavigationFeatureSection: FC<NavigationFeature> = ({
  title,
  description,
  icon,
  href,
}) => (
  <Link href={href}>
    <Box
      p={3}
      alignItems="start"
      rounded={"lg"}
      bg="white"
      _hover={{ bg: "brand.50", cursor: "pointer" }}
      _active={{ bg: "brand.100" }}
    >
      <Flex direction={"row"} alignItems="center" gap={3}>
        <Icon flexShrink={1} as={icon} h={5} w={5} color="brand.700" />
        <Heading flexShrink={1} fontSize={15} color="brand.700">
          {title}
        </Heading>
      </Flex>
      <Text fontSize="sm" mt={3}>
        {description}
      </Text>
    </Box>
  </Link>
);
