import React from 'react'
import '../App.css'
import Button from '../Components/button'
import info_bg from '../images/info-bg.jpg'
// import SDG_icon from '../images/SDG_icon.png'
import { Link } from 'react-router-dom'
import { BiSolidRightArrowAlt } from 'react-icons/bi'
import { Col, Row } from 'react-bootstrap'
import Footer from '../Components/Footer'

const Hero = () => {
  return (
<div className='container-fluid m-0 p-0'  style={{
  backgroundImage:`url(${info_bg})`,
  // background: "linear-gradient (to right, #F7F5F0, #FFFFFF)",
  backgroundSize: "fill",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
    width:"100%",
  height:"60vh"
}}>
    <div className='d-flex flex-column align-items-center pt-5 justify-content-center' style={{
  backgroundColor:"black",
  opacity:"80%",
  // backgroundPosition:"fixed",
  width:"100%",
  height:"60vh",
}}>

<div className='container d-flex flex-column align-items-center'>
  <div className=' d-flex flex-column align-items-center justify-content-start'>
<h1 style={{
  margin:"0%",
  // fontSize:"40px",
  color:"#F36D25",
}}>Sustainable Development Goal 9</h1>
<p className='pt-4 d-flex align-items-center text-center justify-content-center ' style={{
  fontStyle:"bold",
  color:"white",
}}>Industry, Innovation, and Infrastructure — building resilient infrastructure, promoting inclusive<br /> and sustainable industrialization, and fostering innovation</p>
  </div>
<Link to="/about" className='' >
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
<BiSolidRightArrowAlt className='info_arrow' />

</Button>
</Link>
</div>

</div>


<div className="container py-5">

  <div className="text-center mb-5">
    <h2 className="fw-bold">Why SDG 9 Matters</h2>

    <p
      className="mx-auto text-muted"
      style={{
        maxWidth: "900px",
        lineHeight: "1.8",
      }}
    >
      SDG 9 aims to ensure that people have access to reliable transportation,
      communication networks, modern industries, and innovative technologies.
      By investing in infrastructure and encouraging innovation, societies can
      create opportunities, reduce inequalities, and support sustainable
      development for future generations.
    </p>
  </div>

  <Row className="g-4 justify-content-center">

    <Col lg={4} md={6}>
      <div className="h-100 p-4 shadow-lg rounded bg-light">
        <h4 className="mb-3">🛣️ Infrastructure</h4>
        <p>
          Reliable roads, bridges, energy systems, and communication networks
          help connect people to essential services, markets, education, and
          economic opportunities.
        </p>
      </div>
    </Col>

    <Col lg={4} md={6}>
      <div className="h-100 p-4 shadow-lg rounded bg-light">
        <h4 className="mb-3">🏭 Industrialization</h4>
        <p>
          Sustainable industrialization promotes economic growth, creates jobs,
          and increases productivity while reducing environmental impact.
        </p>
      </div>
    </Col>

    <Col lg={4} md={12}>
      <div className="h-100 p-4 shadow-lg rounded bg-light">
        <h4 className="mb-3">💡 Innovation</h4>
        <p>
          Innovation drives progress through technology, research, and creative
          solutions that improve lives and address global challenges.
        </p>
      </div>
    </Col>

  </Row>

</div>


<Footer />
</div>
  )
}

export default Hero