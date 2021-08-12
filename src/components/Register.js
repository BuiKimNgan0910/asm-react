import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import ProductsContainer from "../container/ProductsContainer";

class Register extends Component {
  render() {
    return (
      <section>
        <div class="container mt-4">
          <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-8 col-xl-6">
              <div class="row">
                <div class="col text-center">
                  <h1>Đăng kí thành viên</h1>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col mt-4">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nhập tên"
                  />
                </div>
              </div>
              <div class="row align-items-center mt-4">
                <div class="col">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="row align-items-center mt-4">
                <div class="col">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Mật khẩu"
                  />
                </div>
                <div class="col">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Nhập lại mật khẩu"
                  />
                </div>
              </div>
              <div class="row justify-content-start mt-4">
                <div class="col">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input type="checkbox" class="form-check-input" />
                      Tôi đã đọc và chấp nhận các điều khoản và điều kiện
                    </label>
                  </div>

                  <button class="btn btn-danger mt-4">Đăng kí</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Register;
