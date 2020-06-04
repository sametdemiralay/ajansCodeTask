import React from "react";
import { Container, Carousel } from "react-bootstrap";
import "./style/headerStyle.css";
import BGIMAGE1 from "../images/background1.jpg";
import BGIMAGE2 from "../images/background2.jpg";
import BGIMAGE3 from "../images/background3.jpg";
import { useDencrypt } from "use-dencrypt-effect";
import { ItemCarousel } from "./ItemCarousel";

const values = ["RICOTOOLS", "Kalite", "İnsana", "Saygıdır"];

export const HeaderSection = () => {
 const { result, dencrypt } = useDencrypt();

 React.useEffect(() => {
  let i = 0;

  const action = setInterval(() => {
   dencrypt(values[i]);

   i = i === values.length - 1 ? 0 : i + 1;
  }, 2000);

  return () => clearInterval(action);
 }, []);

 return (
  <Container fluid className="p-0">
   <Carousel>
    <Carousel.Item className="imageStyle">
     <ItemCarousel bgImage={BGIMAGE2} ricoText={result} />
    </Carousel.Item>

    <Carousel.Item className="imageStyle">
     <ItemCarousel bgImage={BGIMAGE1} ricoText={result} />
    </Carousel.Item>

    <Carousel.Item className="imageStyle">
     <ItemCarousel bgImage={BGIMAGE3} ricoText={result} />
    </Carousel.Item>
   </Carousel>
  </Container>
 );
};
