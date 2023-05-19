// import logo from './logo.svg';
import React from "react";
import Header from "./Components/Header";
import './App.css';
import Home from "./Components/Homepage";
import { Provider } from 'react-redux';
import {store} from './app/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Home />
      </div>
    </Provider>
  );
}

export default App