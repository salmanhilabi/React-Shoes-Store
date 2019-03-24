import React, {Component} from "react";

class Blog extends Component{
  state = {
    slideLeft: 0
  }
  slideLeft = ()=>{
    let slideLeft = this.state.slideLeft - 100;
    this.state.slideLeft === 0
    ? this.setState({slideLeft: 300})
    : this.setState({slideLeft})
  }
  slideRight = ()=>{
    let slideLeft = this.state.slideLeft + 100;
    this.state.slideLeft === 300
    ? this.setState({slideLeft: 0})
    : this.setState({slideLeft})
  }
  render(){
    return(
      <div className="blog-container">
        <i onClick={this.slideLeft} className="fas fa-angle-left"/>
          <div className="blog-wrapper">
            <h5>LATEST BLOG POST</h5>
            <div ref={"blogWrapperSlider"} className="blog-wrapper-slider" style={{left: `-${this.state.slideLeft}%`}}>
              <div className="blog-content">
                <img alt="img" src={require("../../../../images/shoes-slider-bg.jpg")}/>
                <h3>Blog Post 1</h3>
                <p>by <span>Peter William</span></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum sagittis augue vitae pulvinar. Ut venenatis nunc vitae.</p>
              </div>
              <div className="blog-content">
                <img alt="img" src={require("../../../../images/new-summer-collection.jpg")}/>
                <h3>Blog Post 2</h3>
                <p>by <span>Robert Wilson</span></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum sagittis augue vitae pulvinar. Ut venenatis nunc vitae.</p>
              </div>
              <div className="blog-content">
                <img alt="img" src={require("../../../../images/leather-dress-shoes.jpg")}/>
                <h3>Blog Post 3</h3>
                <p>by <span>John Doe</span></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum sagittis augue vitae pulvinar. Ut venenatis nunc vitae.</p>
              </div>
              <div className="blog-content">
                <img alt="img" src={require("../../../../images/chucks-classic-converse.jpg")}/>
                <h3>Blog Post 4</h3>
                <p>by <span>Tan Wong</span></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum sagittis augue vitae pulvinar. Ut venenatis nunc vitae.</p>
              </div>
            </div>
          </div>
        <i ref={"blogWrapperSlider"} onClick={this.slideRight} className="fas fa-angle-right"/>
      </div>
    )
  }
}

export default Blog;
