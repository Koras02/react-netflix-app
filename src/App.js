import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/LogIn/Login';
import HomePage from './pages/HomePage/HomePage'
import './App.css';
import { AuthProvider, useAuth } from './context/AutContext';
import { auth } from './context/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './utills/UserSlice';


export default function App() {
  // const user = useSelector()
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
 
      if (userAuth) {
        dispatch(login({
            uid: userAuth.uid,
            email: userAuth.email,
            phoneNumber: useAuth.phoneNumber
          }));
      } else {
        dispatch(logout());
      }
    })
    return unsubscribe;
  }, [dispatch]);

  return (
 
      <div className="App">
      <BrowserRouter>
      <AuthProvider>
         <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={Login} />
         </Switch>
       </AuthProvider>
      </BrowserRouter>
      </div>
 
  );
}
 