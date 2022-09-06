import { SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";
import { headerNavigationFeatures } from "../../../config/navigationFeatures";
import { NavigationFeatureSection } from "./NavigationFeatureSection";

export const NavigationMenuContent: FC = () => (
  <SimpleGrid minChildWidth={"250px"} columns={3} spacing={2}>
    {headerNavigationFeatures.map((feature, index) => (
      <NavigationFeatureSection key={index} {...feature} />
    ))}
  </SimpleGrid>
);
