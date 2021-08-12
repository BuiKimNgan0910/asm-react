import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";

class BaoCao extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="mt-2 text-center">File báo cáo</h1>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <h5>1.Home page</h5>
            <p>Banner Carousel</p>
            <p>Hiện thị sản phẩm theo loại và hiện khi nhấp tên loại</p>
            <p>Hiện thị tất cả sản phẩm</p>
            <h5>2.Giỏ hàng</h5>
            <p>Thêm sản phẩm vào giỏ hàng</p>
            <p>Tăng và giảm số lượng trong giỏ hàng</p>
            <p>Xóa trong giỏ hàng</p>
            <p>Tính tổng tiền</p>
            <h5>3.Đăng nhập với google</h5>
            <h5>4.API</h5>
            <p>Thêm sản phẩm</p>
            <p>Xóa sản phẩm</p>
          </Col>
        </Row>
      </div>
    );
  }
}
export default BaoCao;
