import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/LogIn/Login';
import HomePage from './pages/HomePage/HomePage'
import './App.css';
import Movies from "../src/pages/Form/Movie/Movies"
 
import Trending from './pages/Form/Trending/Trending';
import Tv from './pages/Form/Tv/Tv';
import Search from './pages/Form/Search/Search';
// import PrivateRoute from './Routes/PrivateRoute';
// import Dashbord from './pages/DashBoard/Dashbord';
 
// import { auth } from './context/firebase';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout, login, selectUser } from './utills/UserSlice';


export default function App() {
  // const user = useSelector()
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((userAuth) => {
 
  //     if (userAuth) {
  //       dispatch(login({
  //           uid: userAuth.uid,
  //           email: userAuth.email,
  //           phoneNumber: useAuth.phoneNumber
  //         }));
  //     } else {
  //       dispatch(logout());
  //     }
  //   })
  //   return unsubscribe;
  // }, [dispatch]);

  return (
 
      <div className="App">
      <BrowserRouter>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={Login} />
            {/* <PrivateRoute path="/Profile">
               {/* <Dashbord /> */}
            {/* </PrivateRoute>  */}
         <Switch>
            <Route exact path="/trending" component={Trending} />
            <Route path="/movies" component={Movies} />
            <Route path="/tv" component={Tv} />
            <Route path="/search" component={Search} />
         </Switch>
      </BrowserRouter>
      </div>
 
  );
}
 