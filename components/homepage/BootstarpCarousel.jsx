import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { makeStyles, Button } from "@material-ui/core";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
const useStyles = makeStyles((theme) => ({
  captionBlack: {
    fontWeight: 600,
    color: "black",
    fontSize: "1.5rem",
    align: "left",
    background: "white",
    width: "50%",
    borderRadius: 0,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
      background: "white",
      // borderBottom: "2px solid red",
      width: "50%",
    },
  },
}));

export default function BootstarpCarousel() {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      indicators={false}
      // controls={false}
    >
      <Carousel.Item interval={15000}>
        <img
          className="d-block w-100"
          src="/homepage/rocket-launch-rocket-take-off-nasa-pexels.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <Button
            variant="contained"
            className={classes.captionBlack}
            endIcon={<TrendingFlatIcon />}
          >
            Aktuality
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={15000}>
        <img
          className="d-block w-100"
          src="/homepage/NASA_Orbital-Sciences-Corporation-Antares-rocket_NASA_Bill-Ingalls.webp"
          alt="Second slide"
        />
        <Carousel.Caption>
          <Button
            variant="contained"
            className={classes.captionBlack}
            endIcon={<TrendingFlatIcon />}
          >
            Aktuality
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
