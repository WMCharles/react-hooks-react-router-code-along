import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import NavBar from "./NavBar"
import About from "./About"
import Home from "./Home"
import Login from "./Login"
import SignUp from "./SignUp"

export default function App() {
  return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/signup">
                    <SignUp/>
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
  )
}

