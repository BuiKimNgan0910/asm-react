import React, { Component } from "react";

class CartResult extends Component {
  render() {
    let { cart } = this.props;
    return (
      <tr>
        <td colSpan="3"></td>
        <td>
          <h4>Tổng Tiền</h4>
        </td>
        <td>
          <h4>
            <strong>{this.showtotal(cart).toLocaleString('vi-VN')}đ</strong>
          </h4>
        </td>
        <td colSpan="3">
          <button type="button" className="btn btn-primary">
            Thanh Toán
          </button>
        </td>
      </tr>
    );
  }
  showtotal = (cart) => {
    let total = 0;
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        total += cart[i].product.price * cart[i].quantity;
      }
    }
    return total;
  };
}
export default CartResult;
