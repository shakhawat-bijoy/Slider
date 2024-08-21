import React from 'react'
import { Link } from 'react-router-dom'

const Listitem = ({href, text, className}) => {
  return (
    <li className='group'>
        <Link className={`font-DM text-sm font-[700] text-[#767676] hover:text-[#262626] transition-all duration-300  ${className}`} to={href}>
          {text}
        </Link>
    </li>
  )
}

export default Listitem