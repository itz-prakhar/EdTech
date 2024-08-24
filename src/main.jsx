import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import authProvider from "./Redux/Slice/authSlice.jsx"
import userReducer from "./Redux/Slice/userSlice.jsx"
import courseReducer from "./Redux/Slice/courseSlice.jsx"
import { Toaster } from "react-hot-toast";

export const store = configureStore({
    reducer:{
        auth:authProvider,
        user:userReducer,
        course:courseReducer,

    }
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
