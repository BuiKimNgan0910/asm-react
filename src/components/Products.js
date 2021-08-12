import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

class Products extends Component {
  render() {
    return (
      <Container className="my-4">
        {/* <TitleListProduct/> */}
        
        <Row id="list-product">{this.props.children}</Row>
      </Container>
    );
  }
}
export default Products;
