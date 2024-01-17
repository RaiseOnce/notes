import React from 'react'
import './CardButton.css'

const CardButton = ({ children, className }) => {
  const cl = 'card-button' + (className ? ' ' + className : '')

  return <button className={cl}>{children}</button>
}

export default CardButton
