import React from "react";
import AppBar from "../common/AppBar";
import { Container } from "@material-ui/core";
import Footer from "../common/Footer";
import Head from "next/head";

export default function Main({ children, ...pageProps }) {
  return (
    <React.Fragment>
      <AppBar position="fixed" page={pageProps.page} />
      <Container
        maxWidth={"lg"}
        style={{ display: "flex", alignContent: "center" }}
      >
        {children}
      </Container>
      <Footer />
    </React.Fragment>
  );
}
