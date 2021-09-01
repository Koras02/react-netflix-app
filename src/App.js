import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Login from './pages/LogIn/Login';
import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
      <div className="App">
         <Switch>
            {/* <Route exact path="/" component={HomePage} /> */}
            <Route exact path="/" component={Login} />
         </Switch>
         </div>
      </BrowserRouter>
    </>
  );
}

export default App;
