import React from "react";
import {
  Container,
  Typography,
  Grid,
  makeStyles,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  articleSection: {
    // maxHeight: 250,
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
}) {
  const classes = useStyles();
  return (
    <Grid container item xs={12}>
      <Grid xs={12} md={4} lg={4} xl={4}>
        <div
          className={classes.articleImage}
          style={{
            height: 250,
            backgroundImage: `url(${articleImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </Grid>
      <Grid
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
