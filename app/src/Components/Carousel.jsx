import { Carousel } from '@mantine/carousel';
import Dem from './Card';

function Demo() {
  return (
    <>
      <Carousel
        withControls={false}
   
        slideSize="33.333333%"
        slideGap="m"
        loop
        align="start"
        slidesToScroll={1}
      >
        <Carousel.Slide><Dem img={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep"}/></Carousel.Slide>
        <Carousel.Slide><Dem img={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/jcjcvebiczqe5jr2vijo"}/></Carousel.Slide>
        <Carousel.Slide><Dem img={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3"}/></Carousel.Slide>
        <Carousel.Slide><Dem img={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v"}/></Carousel.Slide>
        
        <Carousel.Slide><Dem img={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep"}/></Carousel.Slide>
        <Carousel.Slide><Dem img={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/jcjcvebiczqe5jr2vijo"}/></Carousel.Slide>
        <Carousel.Slide><Dem img={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v"}/></Carousel.Slide>
        <Carousel.Slide><Dem img={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3"}/></Carousel.Slide>
      </Carousel>
      
    </>
  );
}

export default Demo;