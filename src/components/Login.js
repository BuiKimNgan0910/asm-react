import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import ProductsContainer from "../container/ProductsContainer";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSingnedIn: false,
      name: "",
      image_daidien : ""
    };
  }
  responseGoogle = (res) => {
    console.log(res.profileObj);
    if (res.profileObj) {
      this.setState({
        isSingnedIn: true,
        name: res.profileObj.name,
        image_daidien: res.profileObj.imageUrl,
      });
    } else {
      this.setState({
        isSingnedIn: false,
        name: '',
        image_daidien:''
      });
    }
  };

  logout = () => {
    this.setState({
      isSingnedIn: false,
    });
  };

  render() {
    return (
      <section>
        <div class="container mt-4">
          <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-8 col-xl-6">
              <div class="row justify-content-start mt-4">
                <Row>
                  {!this.state.isSingnedIn && (
                    <div>
                      <div class="row">
                        <div class="col text-center">
                          <h1>Đăng nhập</h1>
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
                      <Row>
                        <div class="col mt-3">
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" />
                              Tôi đã đọc và chấp nhận các điều khoản và điều
                              kiện
                            </label>
                          </div>
                        </div>
                      </Row>
                      <Col lg={12} className="mt-4">
                        <GoogleLogin
                          clientId="55497390912-e71f5h2569dik00clff9k86tq2gqsjei.apps.googleusercontent.com"
                          buttonText="Đăng nhập Google"
                          onSuccess={this.responseGoogle}
                          onFailure={this.responseGoogle}
                          cookiePolicy={"single_host_origin"}
                        ></GoogleLogin>
                      </Col>
                      <button class="btn btn-danger mt-4">Đăng nhập</button>
                    </div>
                  )}
                  {this.state.isSingnedIn && (
                    <div>
                      <div className='mb-3'>
                        <h2 className='text-danger'>Xin chào : {this.state.name} </h2>
                        <img src={this.state.image_daidien} />
                        <Link to='/' className='mb-3 trolai'>Trở lại trang chủ để tiếp tục mua hàng!</Link>
                      </div>
                      <GoogleLogout
                        clientId="55497390912-e71f5h2569dik00clff9k86tq2gqsjei.apps.googleusercontent.com"
                        buttonText="Đăng xuất"
                        onLogoutSuccess={this.logout}
                      ></GoogleLogout>
                    </div>
                  )}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Login;
