import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import ProductsContainer from "../container/ProductsContainer";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="../images/banner/hinh1.jpg"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="../images/banner/hinh2.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="../images/banner/hinh3.jpg"
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="../images/banner/hinh4.jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <h4 className="text-center pb-3 mt-5 tieude">BỘ SƯU TẬP MÙA XUÂN</h4>
        <Container>
          <img src='../images/8901626240290.gif'/>
        </Container>
        <h4 className="text-center pb-3 mt-5 tieude">DANH SÁCH SẢN PHẨM</h4>
        <ProductsContainer></ProductsContainer>
      </div>
    );
  }
}
export default Home;
