import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import itemlist from "../../../../store/reducer/storeData";
import {Row, Col} from "react-bootstrap";

class ProductList extends Component {
state ={
  addToCart: 'ADD TO CART'
}
addItem(item) {
  if(localStorage.cartItem === undefined){
    this.props.addToCart(item);
  }else{
    let storedState = JSON.parse(localStorage.cartItem).rootReducer;
    let compare = storedState.filter(crr => crr.id === item.id)
    if(compare.length === 0)
    return this.props.addToCart(item);
    return alert("This item is in the Cart");
  }
}

itemdetail(item){
  sessionStorage.setItem('itemdetail', JSON.stringify(item));
}
render() {
    return (
      <ul className="product-list-wrapper">
        <Row>
          {itemlist.map(item =>{
            return <Col className="list-col" lg="3" md="4" sm="6" xs="6" key={item.id}>
              <li>
                 <Link to="/productdetail">
                      <img onClick={()=> this.itemdetail(item)}alt="item img" src={item.imgUrlMain} />
                  </Link>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h5>{item.title}</h5>
                  <h4><span>${item.beforePrice}</span> ${item.price}</h4>
                  <button onClick={() => this.addItem(item)}>ADD TO CART</button>
                </li>
              </Col>
          })}
        </Row>
      </ul>
    );
  }
}
function mapStateToProps(state){
   return({
     itemlist: state.rootReducer
   })
}
function mapDispatchToProps(dispatch) {
   return({
     addToCart: (item)=>{
       dispatch({type: 'Add', payload: item})
     }
   })
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
