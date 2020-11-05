import React from "react";
import AppBar from "../common/AppBar";
import { Container, Typography, makeStyles, Button } from "@material-ui/core";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import Footer from "../common/Footer";
import Router from "next/router";

const useStyles = makeStyles((theme) => ({
  captionBlack: {
    fontWeight: 600,
    color: "white",
    fontSize: "2rem",
    align: "left",
    background: "white",
    color: "#003F5F",
    width: 400,
    border: "1px solid white",
    borderRadius: 0,
    transition: "0.2s",
    "&:hover": {
      transform: "translate(0, -5px)",
      // background: "white",
      color: "white",
      background: "#003F5F",

      // borderBottom: "4px solid black",
      // width: 800,
    },
  },
}));
// import BootstarpCarousel from "../homepage/BootstarpCarousel";

export default function Main({ children, ...pageProps }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div style={{ marginBottom: "150px" }}>
        <AppBar position="fixed" page={pageProps.page} />
        {pageProps.page === "/" ? (
          <div
            style={{
              width: "100%",
              height: "800px",
              borderBottom: "4px solid #003F5F",
            }}
          >
            <img
              src="/homepage/heic2007a.jpg"
              alt="Nasa"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                top: 100,
                left: 16,
              }}
            >
              <Typography
                style={{
                  fontWeight: 600,
                  fontSize: "120px",
                  color: "white",
                  opacity: 1,
                }}
              >
                CZECH
              </Typography>
              <Typography
                style={{
                  fontWeight: 600,
                  fontSize: "120px",
                  color: "white",
                  opacity: 1,
                  // color: "#7E182F",
                }}
              >
                SPACE
              </Typography>
              <Typography
                style={{
                  fontWeight: 600,
                  fontSize: "120px",
                  color: "white",
                  opacity: 1,
                }}
              >
                OFFICE
              </Typography>
            </div>
            <div style={{ position: "absolute", top: 670, left: 16 }}>
              <Button
                variant="contained"
                className={classes.captionBlack}
                endIcon={<TrendingFlatIcon fontSize="inherit" />}
                onClick={(event) => {
                  event.preventDefault();
                  Router.push("/cs/aktuality");
                }}
              >
                Aktuality
              </Button>
            </div>
          </div>
        ) : (
          ""
        )}
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
