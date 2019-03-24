import React, {Component} from "react";
import ProductList from "./productList/productList";
import AsideContainer from "./asideComponent/aside";
import CategoryNavbar from "./CategoryNavbar/CategoryNavbar";
import {Row, Container, Col} from "react-bootstrap";

class MainContentComponent extends Component{
  render(){
    return(
      <Container>
        <CategoryNavbar/>
        {window.innerWidth > 991
        ? <Row>
           <Col lg="3" >
             <AsideContainer/>
           </Col>
           <Col lg="9">
             <ProductList/>
           </Col>
          </Row>

        : <Row>
           <Col lg="9">
             <ProductList/>
           </Col>
           <Col lg="3" >
             <AsideContainer/>
           </Col>
          </Row>
        }
      </Container>
    )
  }
}

export default MainContentComponent;
