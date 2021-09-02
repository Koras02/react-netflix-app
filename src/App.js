import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/LogIn/Login';
import HomePage from './pages/HomePage/HomePage'
import './App.css';

function App() {
  return (
 
      <BrowserRouter>
      <div className="App">
         <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={Login} />
         </Switch>
         </div>
      </BrowserRouter>
 
  );
}

export default App;
