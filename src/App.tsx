import React from "react";
import  Header from "../src/components/Header";
import UserList from "containers/Users/Users";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";

import AppRouter from "router/AppRouter";



const App: React.FC = () => {

  return (
    <Provider store ={store} >
      <Router>
      {/* <Header /> */}
      <AppRouter />
      </Router>
    </Provider>

  );
};

export default App;
