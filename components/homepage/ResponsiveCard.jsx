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
  },
});

export default function ResponsiveCard({
  alt,
  customColor,
  image,
  title,
  shortDesc,
  articleUrl,
}) {
  const classes = useStyles();

  return (
    <Link
      href={articleUrl ? articleUrl : "/"}
      // as={articleUrl ? articleUrl : "/"}
      style={{ textDecoration: "none" }}
    >
      <Card className={classes.root} style={{ borderColor: `${customColor}` }}>
        <CardActionArea>
          <div style={{ textAlign: "center", width: "100%" }}>
            <img
              alt={alt}
              src={image}
              style={{ height: "auto", width: "100%" }}
            ></img>
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {shortDesc}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions> */}
      </Card>
    </Link>
  );
}
