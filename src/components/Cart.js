import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Cart extends Component {
  render() {
    let {children} = this.props;
    return (
      <Container className="section">
      <h4 className='text-center tieude my-4'>Giỏ hàng</h4>
        <div className="table-responsive">
          <table className="table product-table">
            <thead>
              <tr>
                <th></th>
                <th>Sản Phẩm</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Tổng Cộng</th>
                <th>Xóa</th>
              </tr>
            </thead>
            <tbody>
              {children}
            </tbody>
          </table>
        </div>
      </Container>
    );
  }
}
export default Cart;
