import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import Product from "../components/Product";
import { actAddToCart } from "./../actions/index";
import callAPI from "../utils/apiCaller";
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
    let {products}=this.state;
    return <Products>{this.showProducts(products)}</Products>;
  }

  showProducts = (products) => {
    // let id = window.location.pathname.split("/")[2];
    // console.log(id);
    let id ='';
    let result = null;
    let { onAddToCart } = this.props;
    if (products.length > 0) {
      result = products.map((product, index) => {
        // if (id == null) {
          return (
            <Product key={index} product={product} onAddToCart={onAddToCart} />
          );
        // } 
        // else {
        //   if (id == product.idLoai) {
        //     // console.log(product);
        //     return (
        //       <Product
        //         key={index}
        //         product={product}
        //         onAddToCart={onAddToCart}
        //       />
        //     );
        //   }
        // }
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
