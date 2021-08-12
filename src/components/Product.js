import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class Product extends Component {
  render() {
    let { product } = this.props;
    let id = product.id;
    return (
      <Col lg={3} className='mb-4'>
        <div className="card">
          <img
            className="card-img-top img-product"
            src={product.image}
            alt={product.name}
          />
          <Row>
            <Col lg={12} className="text-center">
              <div onClick={() => this.onAddToCart(product)} className="addtocart">Add-to-cart</div>
            </Col>
          </Row>
          <div className="card-body">
            <Link to={`/product/${id}`} className="card-title name-product">{product.name}</Link>
            <p className="card-text price">{product.price.toLocaleString('vi-VN')}đ</p>
          </div>
        </div>
      </Col>
    );
  }
  onAddToCart = (product) => {
    this.props.onAddToCart(product)
  };
}
export default Product;
