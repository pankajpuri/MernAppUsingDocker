import "./index.scss";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/js/bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Footer from "./components/main/footer";
import NotFound from "./components/notfound/notfound";
import Homepage from "./components/main/homepage";
import Header from "./components/main/header";
import ProductCategories from "./components/crud/productcategories";
import Cart from "./components/main/cart";
import Products from "./components/main/products";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        {/* <Home /> */}
        <Header />
        <div>
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/products" component={Products} />
            <Route path="/productcategories" component={ProductCategories} />
            <Route path="/notFound" component={NotFound} />
            <Route path="/homepage" component={Homepage} />
            <Redirect from="/" exact to="/homepage" />

            <Redirect to="/notfound" />
          </Switch>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
