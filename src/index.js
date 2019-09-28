import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// components
import App from "./components/App";

// Initial STORE

import rootReducer from "./store/reducers";
import { getCities } from "./store/actions";

import "antd/dist/antd.css";
import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(getCities());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
