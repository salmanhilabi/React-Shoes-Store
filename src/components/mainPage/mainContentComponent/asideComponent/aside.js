import React, {Component} from "react";
import Blog from "./blog";
import CategoryList from "./categoryList";
import NewsLetter from "./newsletter";
import OfferBanner from "./offerBanner"
class AsideContainer extends Component{
  render(){
    return(
      <div className="aside-wrapper">
        <CategoryList/>
        <OfferBanner/>
        <Blog/>
        <NewsLetter/>
      </div>
    )
  }
}

export default AsideContainer;
