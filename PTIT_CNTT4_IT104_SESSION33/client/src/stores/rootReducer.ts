import { combineReducers } from "redux";
import { reducerCart } from "./reducers/reducerCart";

export const rootReducer = combineReducers({
    cart:reducerCart
})