import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../views/Home";
//import Calendar from "../views/Calendar";
import Day from "../views/Day";
import { getInitialState } from "../utils/utils";

const { appointments } = getInitialState();


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
                <Routes>
                    <Route path="/calendar">
                    </Route>
                    <Route path="/day" element={<Day appointments={appointments.filter(app => app.day === 1)} />}>
                        
                    </Route>
                    <Route path="/" element={<Home/>}>
                        
                    </Route>
                </Routes>
            </main>
        </div>
    </Router>
);

export default App;



