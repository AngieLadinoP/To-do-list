import React from 'react'
import Container from "../Container/Container.jsx"
import "./Week.css"
const Week = () => {
  const days=["Lunes","Martes", "Miércoles","Jueves","Viernes","Sábado","Domingo"]

  return (
    <div className="week">
    <h1 className="week__title">Organiza tu semana</h1>
     <div className="week__days"> {days.map((day,index)=>
        <div className="week__day" key={index}>
          <h2 className="week__day--title">{day}</h2>
          <Container/>
        </div>
    )}
    </div>
    </div>
  )
}

export default Week
