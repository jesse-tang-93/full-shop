import { createStore, combineReducers, applyMiddleware } from 'redux'

// 使得redux的工作流程中支持action异步获取数据
import thunk from 'redux-thunk'
// 查看redux中状态的变化
import { composeWithDevTools } from 'redux-devtools-extension'

// productReducers
import {
  // productCreateReviewReducer,
  // productDetailsReducer,
  productListReducer,
} from './Reducers/ProductReducers'

import { cartReducer } from "./Reducers/CartReducers";
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./Reducers/userReducers";
/**
 * combine reducers
 */
const reducer = combineReducers({
  productList: productListReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
})

/**
 * 初始值
 */
// 默认先从本地获取
const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []
// login
const userInfoFromLocalStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

// shippingAddress
const shippingAddressFromLocalStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage,
  },
  userLogin: {
    userInfo: userInfoFromLocalStorage,
  },
}

/**
 * middleware
 */
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
export default store
