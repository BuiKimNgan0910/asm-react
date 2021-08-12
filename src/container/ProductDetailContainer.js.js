import React, { Component } from "react";
import { connect } from "react-redux";
import ProductDetail from "../components/ProductDetail";
import { actAddToCart } from "./../actions/index";
import callAPI from "../utils/apiCaller";

class ProductDetailContainer extends Component {
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
    console.log(products);
    return <div>{this.showProductDetail(products)}</div>;
  }

  showProductDetail = (product) => {
    let result = null;
    let { onAddToCart } = this.props;
    let id = window.location.pathname.split("/")[2];
    if (product.length > 0) {
      result = product.map((product, index) => {
        if (id == product.id) {
          console.log(product);
          // return product;
          return (
            <ProductDetail
              key={index}
              product={product}
              onAddToCart={onAddToCart}
            />
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer);
