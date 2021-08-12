import * as Types from "./../constants/ActionType";
var data = JSON.parse(localStorage.getItem("cart"));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
  let { product, quantity } = action;
  let index = -1; //không tìm thấy index = -1
  switch (action.type) {
    case Types.ADD_TO_CARD:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          product,
          quantity,
        });
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    case Types.DELETE_PRODUCT_IN_CART:
      // state = cart
      index = findProductInCart(state, product);
      if (index !== -1) {
        // cắt phần tử ở vị trí index và cắ 1 phần tử
        state.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state));
      // return lại sp
      return [...state];
    case Types.UPDATE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        // cập nhật số lượng
        state[index].quantity = quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state));
      // return lại sp
      return [...state];
    default:
      return [...state];
  }
};

// index = -1 laf ko tim thay sp
const findProductInCart = (cart, product) => {
  let index = -1;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};
export default cart;
