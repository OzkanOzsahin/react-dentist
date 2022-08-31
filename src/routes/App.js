import React from "react";
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../views/Home";
import Calendar from "../views/Calendar";
import Day from "../views/Day";
import generateRandomAppointments from "..utils/utils";

const appointments = generateRandomAppointments(70);

const App = () => (
    <Router>
     <div>
        <nav>
         <ul>
            <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                    
                    <Link to="/calendar">Calendar view</Link>
                    </li>
                    <li>
                        <Link to="/day">Day view</Link>
                        </li>
                        </ul>
                        </nav>
                        <main>
                            <Switch>
                              <Route path="/calendar">
                                </Route>
                                <Route path="/day">
                                    <Day appointments={appointments.filter(app => app.day === 1)} />
                                    </Route>
                                    <Route path="/">
                                        <Home />
                                        </Route>
                                        </Switch>
                                        </main>
                                        </div>
                                        </Router>
);

export default App;



            