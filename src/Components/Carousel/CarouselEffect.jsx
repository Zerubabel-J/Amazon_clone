/* eslint-disable react/jsx-key */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data.js";
import classes from "./Carousel.module.css";
const CarouselEffect = () => {
  return (
    <div className={classes.carousel}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageLink) => {
          return <img key={imageLink} src={imageLink} />;
        })}
      </Carousel>
      <div className={classes.hero__img}></div>
    </div>
  );
};

export default CarouselEffect;
