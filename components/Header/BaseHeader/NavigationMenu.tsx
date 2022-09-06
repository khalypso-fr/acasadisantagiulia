import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
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
        <PopoverContent>
          <PopoverArrow />
          <NavigationMenuContent />
        </PopoverContent>
      </>
    )}
  </Popover>
);
