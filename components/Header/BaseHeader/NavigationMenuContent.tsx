import { SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";
import { headerNavigationFeatures } from "../../../config/navigationFeatures";
import { NavigationFeatureSection } from "./NavigationFeatureSection";

export const NavigationMenuContent: FC = () => (
  <SimpleGrid>
    {headerNavigationFeatures.map((feature) => (
      <NavigationFeatureSection {...feature} />
    ))}
  </SimpleGrid>
);
