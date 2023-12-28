import React from 'react'
import './skillCard.css'

const SkillCard = (props) => {
  return (
    <div className="skillCard">
        <img src={props.img} alt={props.name} className="skillCardImg" />
        <p className="skillName">{props.name}</p>
    </div>
  )
}

export default SkillCard;