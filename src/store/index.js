import {createStore, applyMiddleware} from "redux";
import ImageApiReducer from "./reducers/ImageApiReducer";
import thunkMiddleware from "redux-thunk";

const store = createStore(ImageApiReducer, applyMiddleware(thunkMiddleware));

export default store;