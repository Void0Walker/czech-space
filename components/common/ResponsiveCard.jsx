import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  Typography,
  CardContent,
} from "@material-ui/core";
import Link from "../Link";

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
    borderBottom: "10px solid #f44336",
    boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
    transition: "all 0.4s ease-in-out",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    "&:hover": {
      transition: "0.4s",
      transform: "translate(0, -15px)",
    },
    minHeight: 300,
  },
  newsArticle: {
    borderColor: "black",
  },
  opportunitiesArticle: {
    borderColor: "#ff3d00",
  },
});

export default function ResponsiveCard({
  alt,
  image,
  title,
  shortDesc,
  articleUrl,
  oppurtunitiesCard,
  category,
}) {
  const classes = useStyles();
  console.log(category);
  return (
    <Link
      href={articleUrl ? articleUrl : "/"}
      // as={articleUrl ? articleUrl : "/"}
      style={{ textDecoration: "none" }}
    >
      <Card
        className={`${classes.root} ${
          category === "News"
            ? classes.newsArticle
            : classes.opportunitiesArticle
        }`}
      >
        <CardActionArea>
          <div
          // style={{
          //   textAlign: "center",
          //   width: "100%",
          //   height: 200,
          //   backgroundImage: `url(${image})`,
          // }}
          >
            <img
              alt={alt}
              src={image}
              style={{ height: "auto", width: "100%" }}
              // style={{ objectFit: "cover" }}
            ></img>
          </div>
          <CardContent>
            <Typography gutterBottom style={{ fontSize: "1.2rem" }}>
              {title}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {shortDesc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
