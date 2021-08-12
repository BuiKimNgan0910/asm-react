import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class ProductDetail extends Component {
  render() {
    let { product } = this.props;
    console.log(product.id);
    return (
      <Container>
        <Row>
          <p className='mt-4 ml-3'>
            Trang chủ <span></span>
            <span> - {product.name}</span>
          </p>
        </Row>
        <Row className="mb-4">
          <Col lg={7}>
            <img className="img-product-detail" src={product.image}/>
          </Col>
          <Col lg={5}>
            <h2>{product.name}</h2>
            <p className='text-danger giamoi'>
            {product.price.toLocaleString('vi-VN')}đ</p>
            <div className='bg-danger text-center text-white muangay'>
              <p onClick={() => this.onAddToCart(product)}>MUA NGAY</p>
            </div>
            <p  className='mt-4'>GỌI ĐỂ MUA HÀNG NHANH HƠN</p>
            <p><span><img className='icon phone' src='../../images/icon/phone.png'/></span>1800 9432 Miễn Phí</p>
            <div className='giaohangnhanh'>
              <p className='vascava'>VASCAVA <span className='now'>NOW</span><span className='nhanh'> Giao hàng siêu tốc 2h</span></p>
              <p>Giao nhanh 2H trong nội thành:</p>
              <p>TP.HCM, Hà Nội, Đà Nẵng</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  
  onAddToCart = (product) => {
    this.props.onAddToCart(product)
  };

  showProductDetail = (product) => {
    let result = null;
    let id = window.location.pathname.split("/")[2];
    if (product.length > 0) {
      result = product.map((product, index) => {
        // console.log(product.id);
        if (id == product.id) {
          console.log(product);
          return product;
          // return (
          //   <ProductDetail
          //     key={index}
          //     product={product}
          //     // onAddToCart={onAddToCart}
          //   />
          // );
        }
      });
    }
    return result;
  };
  // render() {
  //   let { product } = this.props;
  //   console.log(product);
  //   return (
  //     <Container>
  //       <Row>
  //         <p>
  //           Trang chủ <span>- Giày</span>
  //           <span> - Giày Bít Mũi Nhọn Nubuck Gót Đính Metallic</span>
  //         </p>
  //       </Row>
  //       <Row>
  //         <Col lg={7}>
  //           <img src=''/>
  //         </Col>
  //         <Col lg={5}>
  //           <h2></h2>
  //           <p className='text-danger'>
  //             544444₫ 
  //             <span className='text-body price-old'>575.000₫</span>
  //           </p>
  //           <p>Số lượng</p>
  //           <div class="input-group mb-3">
  //             <div class="input-group-prepend">
  //               <span class="tanggiam" id="basic-addon1">+</span>
  //             </div>
  //             <input type="text" className='inputtanggiam text-center' value='1'/>
  //             <div class="input-group-prepend">
  //               <span class="tanggiam" id="basic-addon1">-</span>
  //             </div>
  //           </div>
  //           <div className='bg-danger text-center text-white muangay'>
  //             <p>MUA NGAY</p>
  //           </div>
  //           <p>GỌI ĐỂ MUA HÀNG NHANH HƠN</p>
  //           <p><span><img className='icon phone' src='../../images/icon/phone.png'/></span>1800 9432 Miễn Phí</p>
  //           <div className='giaohangnhanh'>
  //             <p className='vascava'>VASCAVA <span className='now'>NOW</span><span className='nhanh'> Giao hàng siêu tốc 2h</span></p>
  //             <p>Giao nhanh 2H trong nội thành:</p>
  //             <p>TP.HCM, Hà Nội, Đà Nẵng</p>
  //           </div>
  //         </Col>
  //       </Row>
  //     </Container>
  //   );
  // }
}
export default ProductDetail;
