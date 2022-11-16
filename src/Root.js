import React from "react";
import App from "./App";
import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";

import { toDoReducer } from "./reducers";

// const store = createStore(
//   toDoReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );
const store = configureStore({
  reducer: toDoReducer,
});

const Root = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};
export default Root;
