import React from 'react'

const Button = ({ children,
  padding,
  btncolor,
  bgradius,
  fontsize,
  className
}) => {
  return (
    <button className={className} style={{
border:"none",

      padding:padding,
      color:btncolor,
      borderRadius:bgradius,
      fontSize:fontsize
    }}>
      {children}
    </button>
  )
}

export default Button