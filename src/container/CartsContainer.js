import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import { actDeleteProductInCart, actUpdateProductInCart } from "./../actions/index";

class CartsContainer extends Component {
  render() {
    let { cart } = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotal(cart)}
      </Cart>
    );
  }

  showCartItem(cart) {
    // ko co sp trong gio hang thi hien thi
    let result = '';
    let { onDeleteProductInCart,onUpdateProductInCart } = this.props;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            onDeleteProductInCart={onDeleteProductInCart}
            onUpdateProductInCart = {onUpdateProductInCart}
          />
        );
      });
    }
    return result;
  }

  showTotal = (cart) => {
    let result = "";
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    // cacs sp trong gio hang
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: (product) => {
      dispatch(actDeleteProductInCart(product));
    },
    onUpdateProductInCart: (product,quantity) => {
      dispatch(actUpdateProductInCart(product,quantity));
    },
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(CartsContainer);
