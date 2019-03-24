import React, {Component} from "react";

class NewsLetter extends Component{
  render(){
    return(
      <div className="newsletter-wrapper">
        <div>
          <h5>SUBSCRIBE TO OUR</h5>
          <h4>NEWSLETTER</h4>
          <p>You can always be up to date with our company</p>
          <input type="text" placeholder="Enter Email..." spellCheck="false"/>
          <button>SEND EMAIL</button>
        </div>
      </div>
    )
  }
}

export default NewsLetter;
