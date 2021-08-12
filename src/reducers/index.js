import { combineReducers } from "redux";
import products from "./product";
import cart from './cart'
import catalogs from './catalogs'

const appReducers = combineReducers({
    products,
    cart,
    catalogs
})

export default appReducers;