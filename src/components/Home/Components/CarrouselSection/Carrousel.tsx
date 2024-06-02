import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import * as carouselAssets from "@/assets/carouselImages";

export function CarrouselSection() {
  const imageArray = Object.values(carouselAssets);

  return (
  
    <Carousel showStatus={false} showArrows={false} showThumbs={false} >
      {imageArray.map((item, idx) => (   
         <img key={idx} src={item.src} alt={`carousel-image-${idx}`} />
      ))}
    </Carousel>
  );
}
