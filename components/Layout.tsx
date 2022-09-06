import { Header } from "../components/Header";
import { Box, Container } from "@chakra-ui/react";
import { FC, PropsWithChildren, useRef } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header position={"fixed"} />
      <Container maxW={"7xl"} pt="65px">{children}</Container>
    </>
  );
};

export default Layout;
