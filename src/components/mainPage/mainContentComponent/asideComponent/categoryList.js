import React, {Component} from "react";

class CategoryList extends Component{
  render(){
    return(
      <div className="category-list-wrapper">
        <p>CATEGORIES</p>
        <ul>
          <li><span><i className="fas fa-angle-right"></i> Casual Shoes</span></li>
          <li><span><i className="fas fa-angle-right"></i> Classic Shoes</span></li>
          <li><span><i className="fas fa-angle-right"></i> Leather Shoes</span></li>
          <li><span><i className="fas fa-angle-right"></i> Sports Shoes</span></li>
          <li><span><i className="fas fa-angle-right"></i> Leather Dress Shoes</span></li>
          <li><span><i className="fas fa-angle-right"></i> Summer Shoes</span></li>
          <li><span><i className="fas fa-angle-right"></i> Flip Flops</span></li>
          <li><span><i className="fas fa-angle-right"></i> Casual Street Sneakers</span></li>
          <li><span><i className="fas fa-angle-right"></i> Gym Sneakers</span></li>
          <li><span><i className="fas fa-angle-right"></i> Duck Boots</span></li>
          <li><span><i className="fas fa-angle-right"></i> Dress Boots</span></li>
          <li><span><i className="fas fa-angle-right"></i> Work Boots</span></li>
          <li><span><i className="fas fa-angle-right"></i> Loafers</span></li>
          <li><span><i className="fas fa-angle-right"></i> Dress Boots</span></li>
        </ul>
      </div>
    )
  }
}

export default CategoryList;
