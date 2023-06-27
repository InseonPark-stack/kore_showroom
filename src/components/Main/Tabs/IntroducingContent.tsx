import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "holderjs";
import "./Tabs.css";

function IntroducingContent() {
  const onDemoLink = (type: string) => {
    var popupWidth = 450;
    var popupHeight = 800;

    var popupX = window.screen.width / 2 - popupWidth / 2;
    var popupY = window.screen.height / 2 - popupHeight / 2;

    window.open(
      "https://d350-121-133-12-73.ngrok-free.app/UI?type=" + type,
      type,
      "height=" +
        popupHeight +
        ", width=" +
        popupWidth +
        ", left=" +
        popupX +
        ", top=" +
        popupY
    );
  };
  return (
    <Card id="cardFlex" style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title>Kore.ai Bot</Card.Title>
        <img
          src="https://kore-wordpress.s3.us-east-2.amazonaws.com/wp-content/uploads/2023/03/04140024/Kore-ai-inc-share-image.jpg"
          alt="Kore AI Inc Logo"
          width="300px"
          height="200px"
        />
        <Button variant="link" onClick={() => onDemoLink("Kore AI")}>
          Kore.ai Demo
        </Button>
      </Card.Body>
      <Card.Body>
        <Card.Title>Posco EnC</Card.Title>
        <img
          src="https://www.poscoenc.com:446/en/common/images/logos/og_en.png"
          alt="Posco E&C Logo"
          width="300px"
          height="200px"
        />
        <Button variant="link" onClick={() => onDemoLink("Posco EnC")}>
          Posco EnC Demo
        </Button>
      </Card.Body>
      <Card.Body>
        <Card.Title>Inha</Card.Title>
        <img
          src="https://www.mathworks.com/content/dam/mathworks/mathworks-dot-com/images/responsive/supporting/academia/tah-portal/school-logo/inha-university-1066664.jpg"
          alt="Inha University Logo"
          width="300px"
          height="200px"
        />
        <Button variant="link" onClick={() => onDemoLink("Inha")}>
          Inha Demo
        </Button>
      </Card.Body>
      <Card.Body>
        <Card.Title>LGE</Card.Title>
        <img
          src="https://live.lge.co.kr/wp-content/uploads/2014/01/Social_LG%EC%A0%84%EC%9E%90_289_1753.jpg"
          alt="LG Electronic Logo"
          width="300px"
          height="200px"
        />
        <Button variant="link" onClick={() => onDemoLink("LGE")}>
          LGE Demo
        </Button>
      </Card.Body>
    </Card>
  );
}

export default IntroducingContent;
