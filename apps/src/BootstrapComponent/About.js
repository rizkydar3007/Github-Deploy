import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <div className="section" id="about">
      <Container>
        <Row className="text-center mb-6">
          <Col>
            <h2>About Me</h2>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col></Col>
        </Row>
        <Row className="row justify-content-center fs-5 text-center">
          <Col className="md-4">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ut reiciendis delectus itaque commodi iste dolorum explicabo magni doloribus culpa!</p>
          </Col>
          <Col className="md-4">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ut reiciendis delectus itaque commodi iste dolorum explicabo magni doloribus culpa!</p>
          </Col>
          <Col className="md-4">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ut reiciendis delectus itaque commodi iste dolorum explicabo magni doloribus culpa!</p>
          </Col>
        </Row>
      </Container>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#e2edff" fillOpacity="1" d="M0,96L0,64L288,64L288,224L576,224L576,64L864,64L864,160L1152,160L1152,32L1440,32L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"></path>
      </svg>
    </div>
  );
};

export default About;
