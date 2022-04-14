import React from "react";
import AdminDashboardComponent from "./AdminDashboardComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import AdminRegisterComponent from "./AdminRegisterComponent";
import AdminLoginComponent from "./AdminLoginComponent";



export default function IsShopIndexCmoponent() {
  return (
    <div className="container-fluid">
      <Router>
        <header className="bg-danger text-center text-white">
          <h1>IShop - Smart Shoping</h1>
        </header>
        <section className="row">
          <div className="col-3">
            <ul>
              <li>
                <Link to="home">Home</Link>
              </li>
              <li>
                <Link to="admindashboard">Admin Dashboard</Link>
              </li>
            </ul>
          </div>

          <div className="col-9">
            <Switch>
              <Route path="/" exact component={HomeComponent}></Route>
              <Route path="/home" exact component={HomeComponent}></Route>
              <Route path="/adminregister" exact component={AdminRegisterComponent}></Route>
              <Route path="/adminlogin" exact component={AdminLoginComponent}></Route>
              <Route path="/admindashboard" exact component={AdminDashboardComponent}></Route>
            </Switch>
          </div>
        </section>
      </Router>
    </div>
  );
}
