import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import { Provider } from "react-redux";
import reducers from './redux/reducers/index'
import thunk from 'redux-thunk'
import "./index.css";
import "jquery/src/jquery"; //for bootstrap.min.js
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {createStore,applyMiddleware} from 'redux'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import * as serviceWorker from "./serviceWorker";
const store=createStore(reducers,applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={store}>
    <App />,
    </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
