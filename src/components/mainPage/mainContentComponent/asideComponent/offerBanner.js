import React, {Component} from "react";

class OfferBanner extends Component{
  render(){
    return(
      <div className="offer-banner-container">
        <p>TRENDING SHOES</p>
        <div className="offer-banner-wrapper">
          <div className="banner-text-wrapper">
            <p>TRENDING SHOES</p>
            <h4>COLLECTION</h4>
              <img alt="img" src={require("../../../../images/slipon.png")}/>
              <img alt="img" src={require("../../../../images/white-shoe-png-free-library-sneaker-png-1000_559.png")}/>
            </div>
          </div>
      </div>
    )
  }
}

export default OfferBanner;
