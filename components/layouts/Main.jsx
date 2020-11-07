import React from "react";
import AppBar from "../common/AppBar";
import { Container, Typography, makeStyles, Button } from "@material-ui/core";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import Footer from "../common/Footer";
import Router from "next/router";

const useStyles = makeStyles((theme) => ({
  homepageImageContainer: {
    width: "100%",
    height: "800px",
    borderBottom: "4px solid #003F5F",
  },
  homepageImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  homepageTextContainer: {
    position: "absolute",
    top: 100,
    left: 16,
  },
  homepageText: {
    fontWeight: 600,
    fontSize: "120px",
    color: "white",
    opacity: 1,
  },
  articlesButton: {
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
      color: "white",
      background: "#003F5F",
    },
  },
}));

export default function Main({ children, ...pageProps }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div style={{ marginBottom: "150px" }}>
        <AppBar position="fixed" page={pageProps.page} />
        {pageProps.page === "/" ? (
          <div className={classes.homepageImageContainer}>
            <img
              src="/homepage/heic2007a.jpg"
              alt="Nasa"
              className={classes.homepageImage}
            />
            <div className={classes.homepageTextContainer}>
              <Typography className={classes.homepageText}>CZECH</Typography>
              <Typography className={classes.homepageText}>SPACE</Typography>
              <Typography className={classes.homepageText}>OFFICE</Typography>
            </div>
            <div style={{ position: "absolute", top: 670, left: 16 }}>
              <Button
                variant="contained"
                className={classes.articlesButton}
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
