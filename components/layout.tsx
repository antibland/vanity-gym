import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import Footer from "./footer";

import Header from "./header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Flex flexDirection="column" className="layout-container">
      <Header />
      <main>
        <Box>{children}</Box>
      </main>
      <Footer />
    </Flex>
  );
};

export default Layout;
