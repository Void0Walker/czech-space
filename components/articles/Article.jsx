import React from "react";
import { Typography, Grid, makeStyles, Divider } from "@material-ui/core";
import PreviewWysiwyg from "./WysiWyg";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "1.7rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
    fontWeight: 600,
    marginTop: 16,
  },
  articleImage: {
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    height: "auto",
  },
}));

export default function Article({ article, altFloat, device }) {
  const classes = useStyles();
  console.log({ attachments: article.attachments });
  return (
    <div>
      <Grid item xs={12}>
        <Typography className={classes.title}>
          {article.articleTitle}
        </Typography>
        <Typography style={{ fontSize: "0.9rem", marginBottom: "1%" }}>
          {article.articleDate}
        </Typography>
        <div
          style={{
            float: altFloat ? "center" : "left",
            background: "#f8f8fa",
            width: device && device === "mobile" ? "100%" : "",
            textAlign: "center",
            marginRight: 16,
            marginBottom: 16,
          }}
        >
          <img
            alt={article.articleTitle}
            className={classes.articleImage}
            src={article.articleImage[0].url}
          ></img>
        </div>
        <PreviewWysiwyg data={article.articleDescription}></PreviewWysiwyg>
      </Grid>
      <Grid item xs={12}>
        <br />
        <Divider style={{ background: "#989898", height: 1, maxWidth: 200 }} />
        <br />
        <Typography style={{ fontWeight: 600 }}>Autor</Typography>
        <Typography>
          {article.users_permissions_user
            ? article.users_permissions_user.username
            : ""}
        </Typography>
        <Typography>
          {article.users_permissions_user
            ? article.users_permissions_user.position
            : ""}
        </Typography>
        <a
          href={`mailto:${
            article.users_permissions_user
              ? article.users_permissions_user.email
              : ""
          }`}
        >
          <Typography>
            {article.users_permissions_user
              ? article.users_permissions_user.email
              : ""}
          </Typography>
        </a>
      </Grid>
      <br />
      <Grid item xs={12}>
        {article.attachments.length > 0 ? (
          <Typography style={{ fontWeight: 600 }}>Přílohy:</Typography>
        ) : (
          ""
        )}
        {article.attachments
          ? article.attachments.map((e, i) => (
              <a
                key={i}
                href={e.Link}
                // style={{ color: "#1587c0" }}
                target="_blank"
              >
                <Typography style={{ fontWeight: 600 }}>
                  {e.AttachmentName}
                </Typography>
              </a>
            ))
          : ""}
      </Grid>
    </div>
  );
}
