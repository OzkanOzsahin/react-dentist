import React from "react";
import "./Calendar.css";
import DayInMonth from "./DayInMonth";

const divideByDay = appointments => {
  const appointmentsByDay = {};
  appointments.forEach(appointment => {
    const day = appointment.day;
    if (!appointmentsByDay.hasOwnProperty(day)) {
      appointmentsByDay[day] = [];
    }
    appointmentsByDay[day].push(appointment);
  });
  return appointmentsByDay;
};


  const appointmentsByDay = divideByDay(Calendar);

  const daysInMonthJSX = Object.values(
    appointmentsByDay
  ).map((appointmentsInDay, index) => (
    <DayInMonth appointments={appointmentsInDay} key={index} />
  ));
   
  
  
    function Calendar() {
      return(
   <div className="calendarview">
     <div className="header">
       <div>Maandag</div>
       <div>Dinsdag</div>
       <div>Woensdag</div>
       <div>Donderdag</div>
       <div>Vrijdag</div>
     </div>
     <div className="table">{daysInMonthJSX}</div>
   </div>
      )
  }
 
   
 
 export default Calendar;
