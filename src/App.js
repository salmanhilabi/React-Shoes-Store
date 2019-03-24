import React, { Component } from "react";
import "./App.scss";
import MainPage from "./components/mainPage/mainPage";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetail from "./components/detailPage/productDetail";
import Cart from "./components/cartPage/cart";
import {Provider} from "react-redux";
import store from "./store/index";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavigationBar/>
              <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/productdetail" component={ProductDetail} />
                <Route path="/cart" component={Cart} />
              </Switch>
              <Footer/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
