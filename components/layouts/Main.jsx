import React from "react";
import AppBar from "../common/AppBar";
import {
  Container,
  Typography,
  makeStyles,
  Button,
  Grid,
} from "@material-ui/core";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import Footer from "../common/Footer";
import Router from "next/router";
import MobileAppBar from "../common/mobile/MobileAppBar";

const useStyles = makeStyles((theme) => ({
  homepageImageContainer: {
    width: "100%",
    height: "700px",
    [theme.breakpoints.down("sm")]: {
      height: "350px",
    },
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
    [theme.breakpoints.down("sm")]: {
      top: "80px",
    },
    left: 16,
  },
  homepageText: {
    fontWeight: 600,
    fontSize: "100px",
    color: "white",
    opacity: 1,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  },
  homepageTextMobile: {
    fontWeight: 600,
    fontSize: "120px",
    color: "white",
    opacity: 1,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  },
  articlesButtonContainer: {
    position: "absolute",
    top: 620,
    width: "92%",
    [theme.breakpoints.down("sm")]: {
      top: 270,
    },
    left: 16,
  },
  articlesButton: {
    fontWeight: 600,
    color: "white",
    fontSize: "1.5rem",
    align: "left",
    background: "white",
    color: "#003F5F",
    width: 300,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
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
  console.log({ pageProps });
  return (
    <React.Fragment>
      <div style={{ marginBottom: "150px", width: "100%" }}>
        {pageProps.device && pageProps.device === "mobile" ? (
          <MobileAppBar apiUrl={pageProps.apiUrl} />
        ) : (
          <AppBar
            position="fixed"
            page={pageProps.page}
            apiUrl={pageProps.apiUrl}
          />
        )}
        {pageProps.page === "/" ? (
          <div className={classes.homepageImageContainer}>
            <img
              src={
                pageProps.pageContent.Image
                  ? pageProps.pageContent.Image[0].url
                  : "/homepage/heic2007a.jpg"
              }
              alt="Nasa"
              className={classes.homepageImage}
            />
            {pageProps.device && pageProps.device === "mobile" ? (
              <div className={classes.homepageTextContainer}>
                <Typography className={classes.homepageTextMobile}>
                  {pageProps.pageContent.Title}
                </Typography>
              </div>
            ) : (
              <div className={classes.homepageTextContainer}>
                {/* <Typography className={classes.homepageText}>CZECH</Typography>
                <Typography className={classes.homepageText}>SPACE</Typography>
                <Typography className={classes.homepageText}>OFFICE</Typography> */}

                {pageProps.pageContent.Title.replace(/\s/gi, "\n")
                  .split("\n")
                  .map((i) => (
                    <Typography key={i} className={classes.homepageText}>
                      {i}
                    </Typography>
                  ))}
              </div>
            )}
            <div className={classes.articlesButtonContainer}>
              <Button
                variant="contained"
                // fullWidth={true}
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
        {pageProps.page === "/cs/o-nas" ? (
          <Grid container>{children}</Grid>
        ) : (
          <Container
            maxWidth={"lg"}
            style={{ display: "flex", alignContent: "center" }}
          >
            {children}
          </Container>
        )}
      </div>
      <Footer pageProps={pageProps} />
    </React.Fragment>
  );
}
