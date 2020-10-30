import React from "react";
import AppBar from "../common/AppBar";
import { Container } from "@material-ui/core";
import Footer from "../common/Footer";

export default function Main({ children, ...pageProps }) {
  return (
    <React.Fragment>
      <div style={{ marginBottom: "150px" }}>
        <AppBar position="fixed" page={pageProps.page} />
        <Container
          maxWidth={"lg"}
          style={{ display: "flex", alignContent: "center" }}
        >
          {children}
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
}
