import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
// import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class Catalog extends Component {
  render() {
    let { catalogs } = this.props;
    return (
            <li className="nav-item">
              <Link to={`/list/${catalogs.id}`} className="nav-link text-body">
                {catalogs.name}
              </Link>
            </li>
    );
  }
}
export default Catalog;
