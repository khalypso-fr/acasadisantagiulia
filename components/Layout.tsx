import { Header } from "../components/Header";
import { Box } from "@chakra-ui/react";
import { FC, PropsWithChildren, useRef } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header position={"fixed"} />
      <Box pt="65px">{children}</Box>
    </>
  );
};

export default Layout;
