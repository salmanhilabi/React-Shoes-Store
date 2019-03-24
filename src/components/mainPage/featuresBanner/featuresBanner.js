import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

class FeaturesBanner extends Component {
  render(){
    return(
      <div className="features-banner-wrapper">
        <Container>
         <Row>
          <Col lg="4" sm="12" className="features-grid">
            <div className="one">
              <h2>Sneakers</h2>
              <h2>Collection</h2>
            </div>
          </Col>
          <Col lg="4" sm="12" className="features-grid">
            <div className="two">
              <h2>Leather</h2>
              <h2>Dress Shoes</h2>
            </div>
          </Col>
          <Col lg="4" sm="12" className="features-grid">
            <div className="three">
              <h2>New Summer</h2>
              <h2>Collection</h2>
            </div>
          </Col>
         </Row>
        </Container>
      </div>
    )
  }
}
export default FeaturesBanner;
