import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, className,to, onClick}) => {
  return (
    <div onClick={onClick}>
      <Link to={to}>
      <button className={` bg-[#262626] text-white font-DM lg:font-bold text-sm border border-transparent hover:border-[#262626] hover:bg-white transition-all duration-300 hover:text-[#262626] ${className}`}>{text}</button>
      
      </Link>
    </div>
  )
}

export default Button