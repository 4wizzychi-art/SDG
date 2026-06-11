import React from 'react'
import '../App.css'
import Button from '../Components/button'
import info_bg from '../images/info-bg.jpg'
import SDG_icon from '../images/SDG_icon.png'
import { BiRightArrow, BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
<div className='container-fluid m-0 p-0'  style={{
  backgroundImage:`url(${info_bg})`,
  backgroundSize: "fill",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
    width:"100%",
  height:"100vh"
}}>
    <div className='d-flex align-items-start pt-5 justify-content-center' style={{
  backgroundColor:"black",
  opacity:"80%",
  // backgroundPosition:"fixed",
  width:"100%",
  height:"50vh",
}}>

<div className='container d-flex flex-column align-items-center'>
  <img src={SDG_icon} alt="image" className='img-fluid' style=
  {{
width:"20%",
borderRadius:"60%",
height:"auto",
// padding:"0px 20px"
}} />
<h1 style={{
  margin:"0%",
  fontSize:"40px",
  color:"#F36D25",
}}>Sustainable Development Goal 9</h1>
<p className='pt-4' style={{
  fontStyle:"bold",
  color:"white",
}}>Industry, Innovation, and Infrastructure — building resilient infrastructure, promoting inclusive and sustainable industrialization, and fostering innovation</p>
</div>

</div>
<div >
  <div className="d-flex justify-content-center align-items-start pt-5" style={{
  backgroundColor:"black",
  opacity:"80%",
  width:"100%",
  height:"50vh"

}}>

<Link to="/target" >
<Button  className="info_btn" style={{
  // backgroundColor:"white",
  color:"#F36D25",
}}
fontsize="20px"
padding="9px 50px"
btncolor="#F36D25"
bgradius="32px"
>
Learn More
<BiSolidRightArrow className='info_arrow' />

</Button>
</Link>

</div>
</div>

</div>
  )
}

export default Hero