import React from "react";


import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";

import AppRouter from "router/AppRouter";



const App: React.FC = () => {

  return (
    <Provider store ={store} >
      <Router>
      <AppRouter />
      </Router>
    </Provider>

  );
};

export default App;
