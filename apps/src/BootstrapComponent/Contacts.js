import { Form, Row, Col, Container, Button, FloatingLabel } from "react-bootstrap";

const Contacts = () => {
  return (
    <div className="section" id="contacts">
      <Container>
        <Row className="text-center">
          <Col>
            <h2>Contact Me</h2>
          </Col>
        </Row>
        <Row className="justify-content-center mb-3">
          <Col className="md-6">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>

              <FloatingLabel controlId="floatingTextarea2" label="Message">
                <Form.Control as="textarea" placeholder="Leave a message here" style={{ height: "100px" }} />
              </FloatingLabel>
              <Button variant="primary" type="submit" className="mt-4">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0d6eed" fill-opacity="1" d="M0,192L0,224L480,224L480,96L960,96L960,160L1440,160L1440,320L960,320L960,320L480,320L480,320L0,320L0,320Z"></path>
      </svg>
    </div>
  );
};

export default Contacts;
