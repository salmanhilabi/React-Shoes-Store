import React, { Component } from "react";

class ShowCase extends Component {
  constructor(props){
    super(props);
    this.carousel = null
    this.state ={
      slider: 0,
      slideArrow: 'f18300'
    }
  }
  componentDidMount(){
  this.carousel = setInterval(()=>{
      let slider = this.refs.showCaseSlideWrapper;
      let slideArrow = '1b8bcc';
      slider = this.state.slider + 100;
      this.state.slider === 0
      ? this.setState({slideArrow, slider})
      : this.state.slider === 200
      ? this.setState({slider: 0, slideArrow: 'f18300'})
      : this.setState({slider, slideArrow: 'f18300'})
    }, 5000)
  }
  componentWillUnmount(){
    if(this.carousel)
    return clearInterval(this.carousel)
  }
  slideLeft = () => {
    let slider = this.refs.showCaseSlideWrapper;
    let slideArrow = '1b8bcc';
    slider = this.state.slider - 100;
    this.state.slider === 0
    ? this.setState({slider: 200, slideArrow: 'f18300'})
    : this.state.slider === 200
    ? this.setState({slideArrow, slider})
    : this.setState({slider, slideArrow: 'f18300'})
  }
  slideRight = () => {
    let slider = this.refs.showCaseSlideWrapper;
    let slideArrow = '1b8bcc';
    slider = this.state.slider + 100;
    this.state.slider === 0
    ? this.setState({slideArrow, slider})
    : this.state.slider === 200
    ? this.setState({slider: 0, slideArrow: 'f18300'})
    : this.setState({slider, slideArrow: 'f18300'})
  }
  render(){
    return (
      <React.Fragment>
        <div className="showCase">
          <i style={{color: `#${this.state.slideArrow}`}} onClick={this.slideLeft} className="fas fa-chevron-circle-left"></i>
          <div ref={"showCaseSlideWrapper"} className="showCase-slide-wrapper" style={{left: `-${this.state.slider}%`}}>
            <div className="showcase-slide one">
               <div className="showcase-slide-detail">
                  <p>EVERY</p>
                  <h2>SHOE</h2>
                  <h4>ADDICT'S DESTINATION</h4>
                  <h1>UPTO <br/> <span>60% OFF</span></h1>
                  <button>Select Style</button>
               </div>
            </div>
            <div className="showcase-slide two">
               <img alt="slider img" src={require("../../../images/athletic-mockup.png")}/>
               <div className="showcase-slide-detail">
                  <h3>BACK TO WORKOUT</h3>
                  <h1>SPECIAL <span>50% OFF</span></h1>
                  <p>FOR OUR ATHLETIC COMMUNITY</p>
                  <button>Get The Deal</button>
               </div>
            </div>
            <div className="showcase-slide three">
               <div className="showcase-slide-detail">
                  <h5>NEW LEATHER</h5>
                  <h3>COLLECTION</h3>
                  <h1>FLAT $50</h1>
                  <p> ONLY</p>
                  <button>View More</button>
               </div>
            </div>
          </div>
          <i style={{color: `#${this.state.slideArrow}`}} onClick={this.slideRight} className="fas fa-chevron-circle-right"></i>
        </div>
      </React.Fragment>
    )
  }
}
export default ShowCase;
