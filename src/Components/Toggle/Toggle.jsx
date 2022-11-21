import './Toggle.css'
import React from 'react'
import { BsFillCloudSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import "./Toggle.css"

const Toggle = () => {
  return (
    <button className="switch">
          <p>Switch to <BsFillCloudSunFill />
          <BsFillMoonStarsFill /></p>
        </button>
  )
}

export default Toggle
