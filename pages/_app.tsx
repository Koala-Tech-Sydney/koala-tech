import React from "react";
import { Provider } from "react-redux";

import Head from "next/head";
import type { AppProps } from "next/app";

import store from "../store/index";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.css';

import "../styles/globals.scss";
import "../styles/variables.scss";
import "../styles/colors.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Koala Tech</title>
        <meta name="description" content="online coding tutorial" />
        <link rel="icon" href="/koala.jpg" />
        <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css' />

      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
};

export default MyApp;
