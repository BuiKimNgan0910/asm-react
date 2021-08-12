import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CatalogsContainer from "../container/CatalogsContainer.js";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSingnedIn: true,
    };
  }

  login = (clickStatus) => {
    this.setState({
      isSingnedIn: clickStatus,
    });
  };
  
  render() {
    return (
      <header>
        
        <Container>
          <Row className="mt-3">
            <Col lg={2}>
              <a href="/">
                <img src="../images/logo.png" alt="logo" />
              </a>
            </Col>
            <Col lg={7}>
              <form className="p-2 col-9 m-auto">
                <div className="input-group mb-3 input-group-sm">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <img
                        className="icon-search"
                        src="../search-outline.svg"
                      />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control tk"
                    placeholder="Tìm kiếm"
                  />
                </div>
              </form>
            </Col>
            <Col className="mt-2 dangki" lg={3}>
              <Link to="/register">ĐĂNG KÝ</Link>
              <Link to="/login" login={this.login}>
                ĐĂNG NHẬP
              </Link>
              <Link to="/cart">
                <img className="icon" src="../images/icon/bag-outline.svg" />
              </Link>
            </Col>
          </Row>
          <Row>
            <nav className="navbar navbar-expand-sm navbar-light">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <CatalogsContainer />
              <Link to={`/baocao`} className="nav-link text-body">
                Báo cáo
              </Link>
              </ul>
            </nav>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
