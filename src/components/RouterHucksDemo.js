import { BrowserRouter as  Router, Link, Route, Switch,useHistory } from "react-router-dom";


import React from 'react'


function Success(){
    return (
        <h2>Login Success</h2>
    )
}

function Invalid(){
    return (
        <h2>Login Invalid..</h2>
    )
}




export default function RouterHucksDemo() {

    var history = useHistory()
    function HandleLogin(){
        var pwd="admin"
        if(pwd=="admin"){
            history.push("/success")
        }else{
            history.push("/invalid")
        }
    }
    return (
        <div className="container-fluid">
            <Router>
                <h2>Dýnamic Navigation</h2>
                <div>
                    <button onClick ={HandleLogin}>Login</button>
                </div>
                <hr/>
                <Switch>
                    <Route exact path="/success">
                        <Success></Success>

                    </Route>
                    <Route exact path="/invalid">
                        <Invalid/>

                    </Route>
                    <Route exact path="/login">
                        <Invalid/>

                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
