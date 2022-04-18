// this file is the one big object of all the reducers that will be used in the store

import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// for combining all the reducers that we have in our app
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
