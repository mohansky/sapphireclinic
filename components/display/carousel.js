import Slider from "react-slick";
import { Icon } from "@iconify/react";

function NextArrow({onClick}) {
  return (
    <button className="absolute hidden md:block top-1/2 right-10 text-scblue z-40 animate-pulse focus:animate-ping" onClick={onClick} aria-label="next">
      <Icon icon="bi:arrow-right" className="w-8 h-8" />
    </button>
  );
}

function PrevArrow({onClick}) {
  return (
    <button className="absolute hidden md:block top-1/2 left-10 text-scblue z-40 animate-pulse focus:animate-ping" onClick={onClick} aria-label="prev">
      <Icon icon="bi:arrow-left" className="w-8 h-8" />
    </button>
  );
}

export default function SliderCarousel({ children }) {
  var settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return <Slider {...settings} >{children}</Slider>;
}
