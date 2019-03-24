import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {Container, Col, Row} from "react-bootstrap";
import ReactImageMagnify from 'react-image-magnify';

class ProductDetail extends Component {
  state = {
    storeData: {},
    imgArray: [],
    imgGrid: [],
    colorGrid: [],
    tmpImage: ''
  };
  componentWillMount(){
    let itemdetail = JSON.parse(sessionStorage.getItem('itemdetail'));
    let imgArray = itemdetail.imgArray;
    let imgGrid = itemdetail.imgArray[0];
    let colorGrid = itemdetail.imgArray.map(clrGrid => clrGrid);
    this.setState({storeData: itemdetail, imgArray, imgGrid, colorGrid})
  }
  targetImg(e){
    let currentImg = e.target.src;
    if(window.innerWidth <= 992){
      this.refs.imgUrlMainSmallScreen.src = currentImg;
    }else{
      this.refs.imgUrlMain.smallImageEl.src = currentImg;
      this.setState({tmpImage: currentImg});
    }
  }
  colorGrid(item){
    let combineImg = {
      imgUrlOne: item.imgUrlOne,
      imgUrlTwo: item.imgUrlTwo,
      imgUrlThree: item.imgUrlThree,
      imgUrlFour: item.imgUrlFour
    }
    this.setState({imgGrid: combineImg});
  }
  addItem = ()=>{
    let itemObject = this.state.storeData;
    let storedId = this.props.itemlist.filter(item => item.id === itemObject.id);
    if(storedId.length === 0){
      let newvar = itemObject;
      let newObject = {};
      newvar.imgOne = this.refs.imgUrlOne.src;
      newObject = newvar;
      this.props.addToCart(newObject);
    }else{
      alert('this Item is in the Cart');

    }
  }
  render() {
    const {imgUrlOne, imgUrlTwo, imgUrlThree, imgUrlFour} = this.state.imgGrid;
    const {imgUrlMain, title, price, discription} = this.state.storeData;
    return (
       <Container className="item-detail-container">
         <Row>
           <Col lg="6" sm="12" className="image-view-wrapper">
             <div className="small-image-view">
               <img ref={'imgUrlOne'} onClick={(e) => this.targetImg(e)} alt="item detail img" src={imgUrlOne} />
               <img ref={'imgUrlTwo'} onClick={(e) => this.targetImg(e)} alt="item detail img" src={imgUrlTwo} />
               <img ref={'imgUrlThree'} onClick={(e) => this.targetImg(e)} alt="item detail img" src={imgUrlThree} />
               <img ref={'imgUrlFour'} onClick={(e) => this.targetImg(e)} alt="item detail img" src={imgUrlFour} />
             </div>
             <div className="big-image-view">
               {window.innerWidth <= 992
                ? <img alt="Product-Img" ref='imgUrlMainSmallScreen' src={imgUrlOne ? imgUrlOne : imgUrlMain}/>
                : <ReactImageMagnify ref={'imgUrlMain'} {...{
                      smallImage: {
                          alt: 'Product-Img',
                          isFluidWidth: true,
                          src: `${imgUrlOne ? imgUrlOne : imgUrlMain}`
                        },
                      largeImage: {
                          alt: 'Product-Img',
                          src: `${this.state.tmpImage !== '' ? this.state.tmpImage : imgUrlOne}`,
                          width: 1200,
                          height: 1500
                      },
                      style: {zIndex: 100, top: 5}
                  }} />
               }
             </div>
           </Col>
           <Col lg="5" sm="12" className="detail-wrapper">
             <div className="detail-wrapper-spacer">
               <h3>{title}</h3>
               <div className="price-ratings-Wrapper">
                 <h4>${price}</h4>
                 <div className="stars">
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
                   <span>0 Item review</span>
                 </div>
               </div>
               <p>{discription}</p>
               <div className="color-grid">
                 {this.state.colorGrid.map((imgGrid, index) => {
                  return <img key={index} onClick={() => this.colorGrid(imgGrid)} alt="item detail img" src={imgGrid.imgUrlOne} />
                 })}
               </div>
               <Link to="/">
                 <button>Back</button>
               </Link>
               <button onClick={this.addItem}>Add To Cart</button>
             </div>
           </Col>
         </Row>
       </Container>
    );
  }
}
function mapDispatchToProps(dispatch){
  return({
    addToCart: (item)=>{
      dispatch({type: 'Add', payload: item})
    }
  })
}
function mapStateToProps(state){
  return({
    itemlist: state.rootReducer
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
