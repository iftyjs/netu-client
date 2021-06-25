import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Dashboard from './component/Dashboard/Dashboard';
import Login from './component/Dashboard/Login/Login';
import Registration from './component/Dashboard/Registration/Registration';
import HomePage from './component/HomePage/HomePage';

export const UserContext = createContext(null)

function App() {
  const [userInfo, setUserInfo] = useState({});

  if(userInfo.email){
    localStorage.setItem("nuto-user", JSON.stringify(userInfo));
  }

  return (
    <div className="App">
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/dashboard/order-list">
            <Dashboard />
          </Route>
          <Route path="/dashboard/add-service">
            <Dashboard />
          </Route>
          <Route path="/dashboard/make-admin">
            <Dashboard />
          </Route>
          <Route path="/dashboard/manage-service">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
