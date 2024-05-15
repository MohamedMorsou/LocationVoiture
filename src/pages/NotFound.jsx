import React from "react";
import { Col, Container, Row } from "reactstrap";

const NotFound = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div
            className="notfound"
            style={{ fontSize: "80px", color: "#000d6b", textAlign: "center" }}
          >
            404 NotFound
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
