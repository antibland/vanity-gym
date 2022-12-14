import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StoreProvider } from "easy-peasy";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "reset-css";
import React, { useEffect } from "react";
import { store } from "../lib/store";
import Layout from "../components/layout";

type Props = StoreProvider["props"] & { children: React.ReactNode };
const StoreProviderCasted =
  StoreProvider as unknown as React.ComponentType<Props>;

const theme = extendTheme({
  colors: {
    gray: {
      100: "#F5f5f5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
    tan: {
      500: "#ffd188",
      900: "hsl(37deg 100% 57%)",
    },
  },
  shadows: {
    headerOnDarkBG: "0 0 4px rgba(0, 0, 0, 0.8)",
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const className = "inverted";

    const scrollTrigger = 60;

    window.onscroll = () => {
      // We add pageYOffset for compatibility with IE.
      if (
        window.scrollY >= scrollTrigger ||
        window.pageYOffset >= scrollTrigger
      ) {
        document.getElementsByTagName("header")[0].classList.add(className);
      } else {
        document.getElementsByTagName("header")[0].classList.remove(className);
      }
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <StoreProviderCasted store={store}>
        {/* @ts-ignore */}
        {Component.authPage ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </StoreProviderCasted>
    </ChakraProvider>
  );
};

export default MyApp;
