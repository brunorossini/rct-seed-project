import React from "react";
import Routes from "./routes";
// import socketIOClient from "socket.io-client";
import GlobalStyles from "./components/Global/styles";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Routes />
    </Provider>
  );
}
