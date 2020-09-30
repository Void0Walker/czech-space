import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "1.7rem",
    fontWeight: 600,
    marginTop: 16,
  },
}));

export default function Article({ article, altFloat }) {
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
            width: 400,
          }}
        >
          <img
            alt="odlo_kids"
            style={{
              width: "95%",
              height: "auto",
            }}
            src={article.articleImage}
          ></img>
        </div>
        {article.articleText.split("\n").map((e, i) => (
          <Typography
            key={i}
            style={{
              fontSize: "1.1rem",
              marginBottom: 16,
              color: "#323232",
              fontWeight: i === 0 ? 700 : "",
            }}
          >
            {/* Dobře odolává větru a jiným povětrnostním vlivům. Elastický
              materiál a přiléhavý střih zaručují skvělou volnost pohybu.
              Zachovává prodyšnost a schopnost odpařovat vlhko */}
            {e}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={12}>
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
      </Grid>
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
