import React from "react";
import { Provider } from "react-redux";

import Head from "next/head";
import store from "../store/index";

import Header from "../components/Structure/Header";
import Footer from "../components/Structure/Footer";

import "../styles/globals.scss";
import "../styles/variables.scss";
import "../styles/colors.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Koala Tech</title>
        <meta name="description" content="online coding tutorial" />
        <link rel="icon" href="/koala.jpg" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
};

export default MyApp;
