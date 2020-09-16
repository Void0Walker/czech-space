import { Typography } from "@material-ui/core";
import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function HomeCarousel() {
  return (
    <Carousel infiniteLoop useKeyboardArrows autoPlay>
      <div>
        <img
          //   src="/space-carousel/heic0910h.jpg"
          src="/space-carousel/n46_lucky.jpg"
          alt="hubble1"
          style={{ height: "auto", maxWidth: "60%" }}
        ></img>
        {/* <Typography
          style={{
            background: "black",
            color: "white",
            position: "absolute",
            bottom: 0,
          }}
        >
          ČESKÉ STUDENTSKÉ EXPERIMENTY LETĚLY DO STRATOSFÉRY CSO ORGANIZOVALA
          ÚČAST STUDENTŮ NA KONFERENCI NEAR SPACE V POLSKÉ TORUNI
        </Typography> */}
      </div>
      <div>
        <img
          //   src="/space-carousel/heic1509a.jpg"
          src="/space-carousel/styl2340e.jpg"
          alt="hubble1"
          style={{ height: "auto", maxWidth: "60%" }}
        ></img>
      </div>
      <div>
        <img
          //   src="/space-carousel/heic1608a.jpg"
          src="/space-carousel/gtnasa.jpg"
          alt="hubble3"
          style={{ height: "auto", maxWidth: "60%" }}
        ></img>
      </div>
    </Carousel>
  );
}
