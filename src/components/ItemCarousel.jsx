import React from "react";
import { Carousel, Row, Col, Button } from "react-bootstrap";
import {
 FaFacebookF,
 FaInstagram,
 FaTwitter,
 FaWhatsapp,
} from "react-icons/fa";
import "./style/headerStyle.css";

export const ItemCarousel = ({ bgImage, ricoText }) => {
 return (
  <div>
   <img className="d-block w-100" src={bgImage} alt="First slide" />
   <Carousel.Caption className="text-left">
    <Row>
     <Col sm={12} md={6} className="textArea">
      <h3 className="textTitle">"KALİTE İNSANA SAYGIDIR"</h3>
      <h3 className="textTitle">1969'dan beri...</h3>
      <p>
       1969 yılından günümüze "müşteri memnuniyeti, kalite ve ilkeli ticaret"
       prensiplerinden taviz vermeden, sektörde önemli bir boşluğu dolduran
       KARAKUŞ HIRDAVAT SAN. VE TİC.LTD.ŞTİ. sahasında yeniliğin de
       aktörlerindendir.
      </p>
      <Button className="btnBuyuk" size="lg" href="/deneme">
       E-KATALOG
      </Button>
     </Col>
     <Col md={6}></Col>
    </Row>
    <Row>
     <Col sm={12} md={6}>
      <Button
       className="iconArea"
       href="https://www.instagram.com/?hl=tr"
       target="_blank"
      >
       <FaInstagram size={15} color={"#000"} />
      </Button>
      <Button
       className="iconArea"
       href="https://tr-tr.facebook.com/"
       target="_blank"
      >
       <FaFacebookF size={17} color={"#000"} />
      </Button>
      <Button className="iconArea" href="https://twitter.com/" target="_blank">
       <FaTwitter size={17} color={"#000"} />
      </Button>
      <Button
       className="iconArea"
       href="https://web.whatsapp.com/"
       target="_blank"
      >
       <FaWhatsapp size={17} color={"#000"} />
      </Button>
      <h4 className="mx-5">{ricoText}</h4>
     </Col>
     <Col sm={12} md={6}>
      <h1 className="textLarge text-right">{ricoText}</h1>
     </Col>
    </Row>
   </Carousel.Caption>
  </div>
 );
};
