import React, { Component } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import Product from "../components/Product";
import { actAddToCart } from "./../actions/index";
import callAPI from "../utils/apiCaller";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
class ProductsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    callAPI("products", "GET", null).then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }

  render() {
    let { products } = this.state;
    let { match } = this.props;
    console.log(match.params);
    console.log(products);
    return <Products>{this.showProducts(products)}</Products>;
  }

  showProducts = (products) => {
    let { match } = this.props;
    let id = parseInt(match.params.id);
    console.log(id);
    let result = null;
    let { onAddToCart } = this.props;
    if (products.length > 0) {
      result = products.map((product, index) => {
        if (id == product.idLoai) {
          // console.log(product);
          return (
            <Product key={index} product={product} onAddToCart={onAddToCart} />
          );
        }
      });
    }
    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
