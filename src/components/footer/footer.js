import React, {Component} from "react";
import {Col, Row, Container} from "react-bootstrap";

class Footer extends Component{
  render(){
    return(
      <div className="footer-list">
        <Container>
          <Row>
            <Col lg="3" md="6" sm="6" xs="12">
              <ul>
                <h5 className="list-title"><strong>EXTRAS</strong></h5>
                <li>Brands</li>
                <li>Track your Order</li>
                <li>Gift Certificates</li>
                <li>Affiliate</li>
                <li>Specials</li>
                <li>Site Map</li>
              </ul>
            </Col>
            <Col lg="3" md="6" sm="6" xs="12">
              <ul>
                <h5 className="list-title"><strong>INFORMATION</strong></h5>
                <li>About Us</li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Contact Us</li>
                <li>Metallurgy</li>
              </ul>
            </Col>
            <Col lg="3" md="6" sm="6" xs="12">
              <ul>
                <h5 className="list-title"><strong>MY ACCOUNT</strong></h5>
                <li>My Account</li>
                <li>Home Improvement</li>
                <li>Order History</li>
                <li>Wish List</li>
                <li>Newsletter</li>
                <li>Returns</li>
              </ul>
            </Col>
            <Col lg="3" md="6" sm="6" xs="12">
              <ul>
                <h5 className="list-title"><strong>CONTACT US</strong></h5>
                <li><p><i className="fas fa-map-marker-alt"></i> 7131 Dreamville, USA</p></li>
                <li><p><i className="fas fa-envelope"></i> company@gmail.com</p></li>
                <li><p><i className="fas fa-phone"></i> 456-456-4512</p></li>
                <li><p><i className="fas fa-location-arrow"></i> Dream City, USA</p></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Footer;
