import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import User from "./components/User";
import { authenticate } from "./store/session";
import Landing from './components/Landing/Landing';
import IndividualDestination from "./components/IndividualDestination/IndividualDestination";
import UserDrops from "./components/userDrops";
import Footer from "./components/Footer/Footer";
import AboutPage from './components/About';


function App() {
  
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <Route path="/" exact={true}>
          <Landing />
        </Route>
        <ProtectedRoute path="/destination/:id">
          <IndividualDestination />
        </ProtectedRoute>
        <ProtectedRoute path="/userDrops/:id">
          <UserDrops />
        </ProtectedRoute>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path="/not-found">
          <h1>404 page not found</h1>
        </Route>
        <Route>
          <h1>404 page not found</h1>
        </Route>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
