import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "../views/Home";
import Calendar from "../views/Calendar";
import Day from "../views/Day";
import { getInitialState } from "../utils/utils";


const { appointments }  = getInitialState();

const App = () => (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/day">Day</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
        </ul>
  
        
  <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/day" element={<Day appointments={appointments} />} />
        <Route path="/calendar" element={ <Calendar appointments={appointments} />} />
   </Routes>
      </div>
    
    </Router>
  
  );


  export default App;





