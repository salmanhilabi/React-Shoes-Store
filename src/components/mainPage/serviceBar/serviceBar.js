import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

class ServiceBar extends Component{
  render(){
    return(
      <div className="service-bar">
        <Container>
          <Row>
            <Col lg="3" sm="6" xs="12" className="service-bar-grid">
                <div className="service-bar-grid-icon">
                  <img alt="service icon" src="https://cdn.shopify.com/s/files/1/1836/0759/files/bs-1_45x.png?v=1489650156"/>
                </div>
                <div className="service-bar-grid-text">
                  <h4>Free Shipping</h4>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
            </Col>
              <Col lg="3" sm="6" xs="12" className="service-bar-grid">
                <div className="service-bar-grid-icon">
                  <img alt="service icon" src="https://cdn.shopify.com/s/files/1/1836/0759/files/bs-2_45x.png?v=1489650163"/>
                </div>
                <div className="service-bar-grid-text">
                  <h4>Cash On Delivery</h4>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
                </Col>
                <Col lg="3" sm="6" xs="12" className="service-bar-grid">
                <div className="service-bar-grid-icon">
                  <img alt="service icon" src="https://cdn.shopify.com/s/files/1/1836/0759/files/bs-3_45x.png?v=1489650169"/>
                </div>
                <div className="service-bar-grid-text">
                  <h4>Best Deal</h4>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
                </Col>
                <Col lg="3" sm="6" xs="12" className="service-bar-grid">
                <div className="service-bar-grid-icon">
                  <img alt="service icon" src="https://cdn.shopify.com/s/files/1/1836/0759/files/bs-4_45x.png?v=1489650175"/>
                </div>
                <div className="service-bar-grid-text">
                  <h4>Secure Payment</h4>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
                </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default ServiceBar;
