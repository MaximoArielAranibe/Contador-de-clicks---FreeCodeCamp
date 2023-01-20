import React from "react";
import '../styles/Counter.css'
import { useState } from "react";

function Button({ text, buttonClick, managerClick }) {
  return (
    <button
      className={ buttonClick ? 'button-click' : 'button-restart' }
      onClick={managerClick} >
      {text}
    </button>
  )
}

export default Button;