import React, { Component } from "react";
import ShowCase from "./showcase/showcase";
import ServiceBar from "./serviceBar/serviceBar";
import FeaturesBanner from "./featuresBanner/featuresBanner";
import MainContentComponent from "./mainContentComponent/mainContentComponent";

class MainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <ShowCase/>
        <ServiceBar/>
        <FeaturesBanner/>
        <MainContentComponent/>
      </React.Fragment>
    );
  }
}

export default MainPage;
