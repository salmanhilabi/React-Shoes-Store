import React, { Component } from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
class Cart extends Component {
  state = {
    data: [],
    total: 0,
    priceTotal: 0
  }
  componentDidMount(){
    this.totalPrice();
  }
  totalPrice(){
    let priceArray = []
    if(localStorage.cartItem){
      let storedPrice = JSON.parse(localStorage.getItem('cartItem'))
      storedPrice.rootReducer.map(itemPrice => priceArray.push(itemPrice.price))
      if(priceArray.length > 0){
        let total = priceArray.reduce((acc, crv) => acc + crv);
        this.setState({total})
      }else{
        this.setState({total: 0})
      }
    }else{
      this.setState({total: 0})
    }
  }
  removeItem(item){
    let storage = JSON.parse(localStorage.getItem('cartItem'));
    this.props.removeItem(item);
    this.totalPrice();
    if(storage.rootReducer.length === 1){
      this.clearAll();
    }
  }
  clearAll = ()=>{
    if(this.refs.productList){
      this.refs.productList.firstChild.style.display = "none"
      localStorage.clear()
    }else{
      localStorage.clear()
    }
    this.totalPrice();
  }
  decreament(item){
    this.props.dividePrice(item);
    this.totalPrice();
  }
  increament(item){
    this.props.multiplyPrice(item);
    this.totalPrice();
  }
  itemdetail(item){
    sessionStorage.setItem('itemdetail', JSON.stringify(item));
  }
  render() {
    return (
      <div className="cartContainer">
        {localStorage.length === 0
        ? <h1>NO ITEM IN CART</h1>
        : <table ref="productList">
          <tbody>
            <tr className="th-container">
              <th>PRODUCT</th>
              <th>TITLE</th>
              <th>PRICE</th>
              <th>QTY</th>
              <th>REMOVE</th>
            </tr>
            {this.props.itemlist.map(item =>{
            return <tr key={item.id}>
                 <td>
                  <Link to="/productdetail"><img onClick={()=> this.itemdetail(item)} alt="img" src={item.imgOne !== '' ? item.imgOne : item.imgUrlMain}/></Link>
                 </td>
                 <td>
                   <h4>{item.title}</h4>
                 </td>
                 <td>
                   <div>
                     <input onClick={() =>this.decreament(item)} type="submit" value="-"/>
                     <span>{item.qty}</span>
                     <input onClick={() => this.increament(item)} type="submit" value="+"/>
                   </div>
                 </td>
                 <td>
                   <h5 ref={'price'}>${item.price}</h5>
                 </td>
                 <td>
                   <button onClick={() => this.removeItem(item)}>remove</button>
                 </td>
                </tr>
          })}
          </tbody>
        </table>
        }
        <div className="total-layout-container">
          <button onClick={this.clearAll}>Remove All</button>
          <div className="total-layout">
            <h5>Total Amount: <span>${this.state.total}</span></h5>
            <button>Proceed To Cheackout</button>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
   return({
     itemlist: state.rootReducer
   })
 }
function mapDispatchToProps(dispatch) {
   return({
      removeItem: (item)=>{
        dispatch({type: 'removeCart', payload: item})
      },
      multiplyPrice: (item)=>{
        dispatch({type: 'multiplyPrice', payload: item})
      },
      dividePrice: (item)=>{
        dispatch({type: 'dividePrice', payload: item})
      }
   })
 }
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
