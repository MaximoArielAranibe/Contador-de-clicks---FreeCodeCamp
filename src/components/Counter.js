import React from "react";
import '../styles/Boton.css'

function Counter({ numClics }) {
  return(
    <div className='counter'>
      {numClics}
    </div>
  )
}

export default Counter;