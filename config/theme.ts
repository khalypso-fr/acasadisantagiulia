import { extendTheme } from "@chakra-ui/react";
import "@fontsource/quattrocento";
import "@fontsource/lora";
import "@fontsource/quicksand";

export const theme = extendTheme({
  styles: {
    global: {
      heading: {
        fontWeight: "bold",
      },
      body: {
        bg: "brand.100",
        color: "black",
      },
    },
  },
  colors: {
    brand: {
      50: "#fbf4e7",
      100: "#e9ddc9",
      200: "#d9c6a8",
      300: "#c9af85",
      400: "#ba9862",
      500: "#a07f48",
      600: "#7d6238",
      700: "#594627",
      800: "#362a16",
      900: "#150e00",
    },
  },
  fonts: {
    heading: `'Quicksand', sans-serif`,
    body: `'Quicksand', sans-serif`,
  },
});
