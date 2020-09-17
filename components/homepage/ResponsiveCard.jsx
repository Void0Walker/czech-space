import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
    borderBottom: "10px solid #f44336",
    boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
    transition: "all 0.4s ease-in-out",
    // padding: 8,
    // maxWidth: 345,
    "&:hover": {
      transition: "0.4s",
      transform: "translate(0, -15px)",
      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    },
  },
});

export default function ResponsiveCard({
  alt,
  customColor,
  image,
  title,
  shortDesc,
}) {
  const classes = useStyles();

  console.log(customColor);
  return (
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
  );
}
