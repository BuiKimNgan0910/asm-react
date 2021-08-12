import React, { Component } from "react";

class CartItem extends Component {
  constructor(props) {
    super(props);
    // quản lí số lượng sp mua
    this.state = {
      quantity: 1,
    };
  }

  render() {
    let { item } = this.props;
    // item.quantity > 0 thì quantity =
    let {quantity} = item.quantity > 0 ? item : this.state
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt=""
            className="img-fluid z-depth-0 cart-img"
          />
        </th>
        <td>
          <h5>
            <p>{item.product.name}</p>
          </h5>
        </td>
        <td>{item.product.price.toLocaleString('vi-VN')}đ</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity}</span>
          <div className="btn-group radio-group">
            <button
              className="btn btn-sm btn-primary mr-1"
              onClick={() =>
                this.onUpdateQuantity(item.product, item.quantity - 1)
              }
            >
              <a>-</a>
            </button>
            <button
              className="btn btn-sm btn-primary
                                  "
              onClick={() =>
                this.onUpdateQuantity(item.product, item.quantity + 1)
              }
            >
              <a>+</a>
            </button>
          </div>
        </td>
        <td>{this.showSubToTal(item.product.price, item.quantity).toLocaleString('vi-VN')}đ</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            onClick={() => this.onDelete(item.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
  onDelete = (product) => {
    console.log(product);
    let { onDeleteProductInCart } = this.props;
    onDeleteProductInCart(product);
  };
  showSubToTal = (price, quantity) => {
    return price * quantity;
  };

  onUpdateQuantity = (product, quantity) => {
    if(quantity>0){
      // set lại số lượng 
      this.setState({
        quantity:quantity
      })
      this.props.onUpdateProductInCart(product,quantity)
    }
  };
}
export default CartItem;
