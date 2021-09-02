import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/reset.css';
import 'normalize-css';
import './css/variables.css'; 
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from './utills/store'
 

ReactDOM.render(
 <Provider store={store}>
   <BrowserRouter>
      <App />
   </BrowserRouter>
   </Provider>,
 document.getElementById('root')
);

 