import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from "@chakra-ui/react";
import { NavigationMenuButton } from "./NavigationMenuButton";
import { NavigationMenuContent } from "./NavigationMenuContent";

export const NavigationMenu = () => (
  <Popover placement="bottom-end">
    {({ isOpen }) => (
      <>
        <PopoverTrigger>
          <NavigationMenuButton isOpen={isOpen} />
        </PopoverTrigger>
        <PopoverContent minW={{ base: "100%", lg: "max-content" }}>
          <PopoverArrow />
          <PopoverBody>
            <NavigationMenuContent />
          </PopoverBody>
        </PopoverContent>
      </>
    )}
  </Popover>
);
