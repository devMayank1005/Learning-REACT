import React from 'react'

const App = () => {


  const [marks, setMarks] = React.useState([80, 90, 70, 28, 95])

  function graceStudent() {
    const newMarks = marks.map(function(elem) {
      {elem<95 ? elem + 5 : elem }
    })
    setMarks(newMarks)
  }
  return (
    <div>
      {marks.map(function (elems,idx) {
        return <p key={idx}>Marks of student {idx+1} = {elems} ({elems<33 ? "Fail" : "Pass"})</p>
      })}

      <button onClick={graceStudent}>Give Grace</button>
    </div>
  )
}

export default App

