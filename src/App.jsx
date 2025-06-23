import React from 'react'
import { timeTable } from '../constants.js'
const App = () => {

  let TimeTable = timeTable.timetable;

  const date = new Date()
  const day = date.getDay()
  const today = TimeTable[day]

  return (
    <>
      {
        (day === 0 || day === 6 || day > 6 || day < 0)
          ? <h1 style={{ textAlign: "center", fontFamily: "Arial" }}>Its Holiday Today</h1>
          : <>
            <table style={{ margin: "auto", fontFamily: "Arial" }} border={1} cellSpacing={0} cellPadding={12} >
              <thead>
                <tr>
                  <th>Day</th>
                  <td colSpan={2} style={{ textAlign: "center" }}>{today.day}</td>
                </tr>
                <tr>
                  <th>Date</th>
                  <td colSpan={2} style={{ textAlign: "center" }}>{Date().slice(0, 15)}</td>
                </tr>
              </thead>

              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Subject</th>
                  <th>Time</th>
                </tr>
              </thead>

              <tbody>
                {today.schedule.map((item, index) => (
                  <tr key={index}>
                    <td style={{ textAlign: "center" }}>{index + 1}</td>
                    <td>{item.subject}</td>
                    <td>{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
      }
    </>
  )
}

export default App