import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Switch
  
} from "react-router-dom";
import FourzerofourComponent from "./404Component";
import CatagoreisComponent from "./CatagoreisComponent";
import DetailsComponent from "./DetailsComponent";
import ElctronicsComponent from "./ElctronicsComponent";
import FootwareComponent from "./FootwareComponent";
import HomeComponent from "./HomeComponent";
import ProductsComponent from "./ProductsComponent";



export default function ShoppingIndexComponent(){
    
    return (
            <div className="container-fluid mt-2">
            <header className="bg-danger text-white text-center p2">
              <h2>
                <span className="bi bi-cart4"></span> Onlne Shopping
              </h2>
            </header>
            <Router>
              <div className="row">
                <div className="col-3">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="home">Home</Link>{" "}
                    </li>
                    <li>
                      <Link to="elctronics">Electronics</Link>{" "}
                    </li>
                    <li>
                      <Link to="footware">Footwear</Link>
                    </li>
                    
                    <li>
                      <Link to="/categories">Categories</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-9">
                  <Switch>
                  <Route path="/" exact component={HomeComponent}></Route>
                    <Route path="/home" exact component={HomeComponent} />
                    <Route path="/elctronics" exact component={ElctronicsComponent} />
                    <Route path="/footware" exact component={FootwareComponent} />
                    <Route path="/details/:id/:name/:price" exact component={DetailsComponent} />
                    <Route path="/categories" exact component={CatagoreisComponent} />
                    <Route path="/products/:category" exact component={ProductsComponent}></Route>
                    <Route path="/details/:id/:name/:price" exact component={DetailsComponent}></Route>
                    <Route path="*" exact component={FourzerofourComponent} />
                   
                  </Switch>
                </div>
              </div>
            </Router>
          </div>
        )
    }

