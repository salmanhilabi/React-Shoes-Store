import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap";

class CategoryNavbar  extends Component{
  render(){
    return(
      <div className="category-navbar-wrapper">
        <Navbar variant="dark" expand="lg">
         <Navbar.Brand href="/">CATEGORIES</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto">
                  <Nav.Link><span><i className="fas fa-angle-right"></i> Casual Shoes</span></Nav.Link>
                  <Nav.Link><span><i className="fas fa-angle-right"></i> Classic Shoes</span></Nav.Link>
                  <Nav.Link><span><i className="fas fa-angle-right"></i> Leather Shoes</span></Nav.Link>
                  <Nav.Link><span><i className="fas fa-angle-right"></i> Sports Shoes</span></Nav.Link>
                  <Nav.Link><span><i className="fas fa-angle-right"></i> Leather Dress Shoes</span></Nav.Link>
                  <Nav.Link><span><i className="fas fa-angle-right"></i> Summer Shoes</span></Nav.Link>
                  <Nav.Link><span><i className="fas fa-angle-right"></i> Flip Flops</span></Nav.Link>
                  <Nav.Link><span><i className="fas fa-angle-right"></i> Casual Street Sneakers</span></Nav.Link>
                  <Nav.Link><span><i className="fas fa-angle-right"></i> Gym Sneakers</span></Nav.Link>
                  <Nav.Link><span><i className="fas fa-angle-right"></i> Duck Boots</span></Nav.Link>
                  <Nav.Link><span><i className="fas fa-angle-right"></i> Dress Boots</span></Nav.Link>
                  <Nav.Link><span><i className="fas fa-angle-right"></i> Work Boots</span></Nav.Link>
                  <Nav.Link><span><i className="fas fa-angle-right"></i> Loafers</span></Nav.Link>
                  <Nav.Link><span><i className="fas fa-angle-right"></i> Dress Boots</span></Nav.Link>
               </Nav>
             </Navbar.Collapse>
       </Navbar>
      </div>
    )
  }
}
export default CategoryNavbar;
