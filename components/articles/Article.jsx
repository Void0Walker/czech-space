import React, { memo, useMemo } from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import md from "../../utils/mdRenderer";

const PreviewWysiwyg = ({ data }) => {
  const html = useMemo(() => md.render(data || ""), [data]);

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} style={{ width: "100%" }} />
  );
};

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
        <PreviewWysiwyg data={article.articleDesc}></PreviewWysiwyg>
      </Grid>
      {/* <Grid item xs={12}>
        <Typography>Autor</Typography>
        <Typography style={{ fontWeight: 600 }}>
          {article.articleAuthor.name}
        </Typography>
        <Typography style={{ fontWeight: 600 }}>
          {article.articleAuthor.position}
        </Typography>
        <Typography style={{ fontWeight: 600 }}>
          {article.articleAuthor.phone}
        </Typography>
        <Typography style={{ fontWeight: 600 }}>
          {article.articleAuthor.email}
        </Typography>
      </Grid> */}
      <Grid item xs={12}>
        {article.articleFiles ? <Typography>Přílohy</Typography> : ""}
        {article.articleFiles
          ? article.articleFiles.map((e, i) => (
              <a key={i} href={e.url} style={{ color: "#1587c0" }}>
                <Typography>{e.name}</Typography>
              </a>
            ))
          : ""}
      </Grid>
    </div>
  );
}
