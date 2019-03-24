import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class NavigationBar extends Component{
  state ={
    count: 0
  }
  componentDidMount(){
    this.totalItemsCount();
  }
  totalItemsCount(){
    setInterval(()=>{
      let storage = JSON.parse(localStorage.getItem('cartItem'));
      if(storage !== null){
        let qtyArray = []
        storage.rootReducer.map(itemQty => {
          return qtyArray.push(itemQty.qty);
        });
        let totalItems = qtyArray.reduce((acc, crv) => acc + crv);
        this.setState({count: totalItems});
      }else{
        this.setState({count: 0});
      }
    }, 500)
  }
  render(){
    return(
      <div className="navigationBar">
        {window.innerWidth <= 992
         ? <Navbar variant="dark" expand="lg" >
           <Link to='/'><Navbar.Brand>Shoes Shop</Navbar.Brand></Link>
              <Nav>
                <Link to="/cart"><i className="fas fa-shopping-cart"></i> <span className="shopping-cart-qty">({this.state.count})</span></Link>
               </Nav>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav>
                   <Nav.Link>Home</Nav.Link>
                   <Nav.Link>Features</Nav.Link>
                   <Nav.Link>Category</Nav.Link>
                   <Nav.Link>About Us</Nav.Link>
                   <Nav.Link>Contact</Nav.Link>
                 </Nav>
               </Navbar.Collapse>
             </Navbar>
         : <Navbar variant="dark" expand="lg">
             <Link to='/'><Navbar.Brand >Shoes Shop</Navbar.Brand></Link>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
               <Nav>
                 <Nav.Link>Home</Nav.Link>
                 <Nav.Link>Features</Nav.Link>
                 <Nav.Link>Category</Nav.Link>
                 <Nav.Link>About Us</Nav.Link>
                 <Nav.Link>Contact</Nav.Link>
               </Nav>
             </Navbar.Collapse>
             <Nav>
               <Link to="/cart"><i className="fas fa-shopping-cart"></i> <span className="shopping-cart-qty">({this.state.count})</span></Link>
             </Nav>
         </Navbar>
       }
      </div>
    )
  }
}

function mapStateToProps(state){
   return({
     itemlist: state.rootReducer
   })
 }

export default connect(mapStateToProps)(NavigationBar);
