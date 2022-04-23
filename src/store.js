import { createStore , combineReducers , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools } from "redux-devtools-extension";
import {cartReducer} from "./reducers/cart"

const reducer = combineReducers({
   cart : cartReducer,
})

let initialState = {
    cart : {
        cartPlaces : localStorage.getItem("cartPlaces") ? JSON.parse(localStorage.getItem("cartPlaces"))  : [],
    },
}

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);


export default store;