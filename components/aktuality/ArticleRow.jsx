import React from "react";
import {
  Container,
  Typography,
  Grid,
  makeStyles,
  Button,
} from "@material-ui/core";
import Link from "../Link";
import { useRouter } from "next/router";
import n from "normalize-strings";

const useStyles = makeStyles((theme) => ({
  articleSection: {
    cursor: "pointer",
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
      boxShadow: "2px 2px 5px grey, -2px -2px 5px grey",
    },
  },
  articleImage: {
    cursor: "pointer",
    transition: "0.2s",
    "&:hover": {
      boxShadow: "2px 2px 5px grey, -2px -2px 5px grey",
    },
  },
  cardDescription: {
    cursor: "pointer",
    boxShadow: "2px 0px 5px grey, -2px 0px 5px grey",
    borderRight: "8px solid black",
    background: "white",
    textDecoration: "none",
    color: "black",
  },
  articleImageClass: {
    height: 250,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  articleBottomContainer: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export default function ArticleRow({
  articleAlt,
  articleImage,
  articleDate,
  articleDesc,
  articleTitle,
  articleAuthor,
  customColor,
  page,
}) {
  const router = useRouter();
  const classes = useStyles();
  return (
    <Grid container item xs={12}>
      <Grid item xs={12} md={4} lg={4} xl={4}>
        <div
          className={`${classes.articleImage} ${classes.articleImageClass}`}
          // style={{
          //   height: 250,
          //   backgroundImage: `url(${articleImage})`,
          //   backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          //   backgroundPosition: "center",
          // }}
          style={{ backgroundImage: `url(${articleImage})` }}
        ></div>
      </Grid>
      <Grid
        item
        component={Link}
        href={`${router.pathname}/${n(articleTitle)
          .toLowerCase()
          .replace(/\s/gi, "-")}`}
        naked={true}
        xs={12}
        md={8}
        lg={8}
        xl={8}
        className={`${classes.cardDescription} ${classes.articleSection}`}
        style={{ borderColor: `${customColor}` }}
      >
        <div
          style={{
            paddingLeft: 16,
            paddingRight: 16,
            paddingBottom: 16,
            paddingTop: 0,
          }}
        >
          <Typography style={{ fontSize: "1.5rem", fontWeight: 600 }}>
            {articleTitle}
          </Typography>
        </div>
        <div style={{ padding: 16 }}>
          <Typography>{articleDesc}</Typography>
        </div>
        <div
          style={{
            padding: 16,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography>{articleDate}</Typography>
          <Button variant={"outlined"}>ČÍST</Button>
        </div>
      </Grid>
    </Grid>
  );
}
