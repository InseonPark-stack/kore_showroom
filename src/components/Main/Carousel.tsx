import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src="img/Kore.ai-Ciklum-Announce-Partnership-to-Enhance-Digital-Experience-for-Customers.jpg"
          alt="첫번째 장"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="img/kore_backgroundImage_two.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="img/kore_backgroundImage_three.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="img/kore_backgroundImage_four.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
