import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";

import Head from "next/head";
import type { AppProps } from "next/app";

import store from "../store/index";
import globalTheme from "../theme/global-theme";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={globalTheme}>
      <Provider store={store}>
        <Head>
          <title>Koala Tech</title>
          <meta name="description" content="online coding tutorial" />
          <link rel="icon" href="/koala.jpg" />
        </Head>
        <div id="root">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9717072844416658"
          crossOrigin="anonymous"
        ></script>
      </Provider>
    </ThemeProvider>
  );
};

export default MyApp;
