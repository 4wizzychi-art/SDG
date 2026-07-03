import React from 'react'
import { Col, Row } from 'react-bootstrap'
import world from '../images/World.png'
import goal from '../images/goals.png'
import history from '../images/history.png'
import Footer from '../Components/Footer'
import infrastructure from '../images/infrastructure.png'
import industry from '../images/industrailization.png'
import innovation from '../images/innovation.png'
import '../App.css';

const About = () => {
  return (
  <div style={{
        background:"radial-gradient(circle,rgba(199, 199, 199, 1) 11%, rgba(247, 247, 247, 1) 100%)",
        // height:"100vh",
        // width:"100%",
    }}>

<div className='container-fluid px-md-5 px-sm-3'>
<div className="col-12 col-md-6 pt-5 d-flex flex-column">
<h2 style={{
  fontStyle:"italic",
fontWeight:"bold",
}}>What is SDG 9?</h2>
<p><span style={{fontWeight:"bold", color:"black"}}>Sustainable Development Goal 9 (SDG 9)</span> aims to build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation. It is one of the 17 Sustainable Development Goals adopted by the United Nations in 2015 as part of the 2030 Agenda for Sustainable Development.</p>
</div>

<Row className="d-flex align-items-center justify-content-between gap-1 pt-5">
<Col md={5} className='flex flex-column gap-2'>
<h3>Why It Matters Globally</h3>
<p>Strong infrastructure, modern industries, and innovation are essential for improving people's quality of life. Roads, electricity, internet access, transportation systems, and manufacturing industries help connect communities, create jobs, and support economic growth. Without these foundations, many countries struggle to reduce poverty, improve healthcare, expand education, and compete in the global economy.</p>
</Col>
<Col md={6} className='flex flex-column gap-2'>
<img className='col-12 col-md-12 rounded-3' src={world} alt="" />
</Col>
</Row>
</div>
<div className='bg-light w-100 mt-5'>
<div className="col-12 col-md-6 gap-3 pt-5 px-md-5 px-sm-4 d-flex flex-column" style={{
  position:"relative"
}}>
  <img  className='col-12 col-md-12 ' src={history} alt="" style={{
    position:"absolute",
    left:"20px",
    bottom:"10px",
    width:"240px",
    height:"280px",
    opacity:"0.6",
  
  }} />
  <h2 style={{fontWeight:"bold"}}>History & Background</h2>
  <h4 >SDGs and the UN 2030 Agenda</h4>
  <p>In 2015, all United Nations Member States adopted the <span style={{fontWeight:"bold"}}>2030 Agenda for Sustainable Development</span>, a global plan designed to create a more peaceful, prosperous, and sustainable future. The agenda includes <span style={{fontWeight:"bold"}}>17 Sustainable Development Goals </span>(SDGs) that address challenges such as poverty, inequality, climate change, education, and economic development.</p>
</div>
</div>

<div className='container-fluid px-md-5 px-sm-3'>
  <Row className="d-flex align-items-center justify-content-between gap-1 pt-5">
<Col md={6} className='flex flex-column gap-2'>
<img className='col-12 col-md-12 rounded-3' src={goal} alt="" />
</Col>
<Col md={5} className='flex flex-column gap-2'>
<h3 style={{fontWeight:"bold"}}>How SDG 9 Fits into the Broader Goals</h3>
<p>SDG 9 provides the infrastructure and technological foundation needed to achieve many of the other Sustainable Development Goals. Reliable transportation, digital connectivity, clean technologies, and innovative industries support better healthcare, quality education, clean energy, economic growth, and climate action. Progress in SDG 9 accelerates progress across the entire 2030 Agenda.</p>
</Col>
</Row>
<h1 className="text-center mt-5" style={{fontWeight:"bold"}}>The Three Pillars</h1>
<Row className="g-4 mt-2 d-flex align-items-stretch"> 

  <Col md={4}>
    <div className='h-100 py-5 px-3 gap-3 d-flex flex-column rounded-4' style={{ backgroundColor: "white", boxShadow: " rgba(17, 12, 46, 0.15) 0px 15px 30px 0px" }}> 
      <h2>Infrastructure</h2> 
               <div className="border border-1 rounded-3 w-100 border-dark" />
      <img className='col-12 col-md-12 rounded-3' src={infrastructure} alt="Infrastructure systems" />
               <div className="border border-1 rounded-3 w-100 border-dark" /> 
      <p>Infrastructure refers to the physical and digital systems that allow societies and economies to function effectively. These include roads, bridges, telecommunications, and internet networks.</p> 
           <div className="border border-1 rounded-3 w-100 border-dark" />
      <p>Inclusive and sustainable industrialization creates jobs, increases productivity, boosts economic growth, and helps countries reduce poverty. Sustainable industries also minimize environmental impacts by using cleaner technologies and responsible production practices.</p> 
           <div className="border border-1 rounded-3 w-100 border-dark" />
      <p>Examples:</p> 
      <ul> 
        <li>Road networks connecting rural farms to markets.</li> 
        <li>High-speed fiber optic internet grids.</li> 
        <li>Clean water treatment and supply plants.</li> 
      </ul>
       <div className="border border-1 rounded-3 w-100 border-dark mt-5" />
    </div>
  </Col> 


  <Col md={4}>
    <div className='h-100 py-5 px-3 gap-3 d-flex flex-column rounded-4' style={{ backgroundColor: "white", boxShadow: " rgba(17, 12, 46, 0.15) 0px 15px 30px 0px" }}> 
      <h2>Industrialization</h2> 
               <div className="border border-1 rounded-3 w-100 border-dark" />
      <img className='col-12 col-md-12 rounded-3' src={industry} alt="Industrial factory" /> 
               <div className="border border-1 rounded-3 w-100 border-dark" />
      <p>Industrialization is the process of developing industries that manufacture goods and provide services using modern technologies and efficient production methods.</p>
               <div className="border border-1 rounded-3 w-100 border-dark" />
      <p>Inclusive and sustainable industrialization creates jobs, increases productivity, boosts economic growth, and helps countries reduce poverty. Sustainable industries also minimize environmental impacts by using cleaner technologies and responsible production practices.</p> 
               <div className="border border-1 rounded-3 w-100 border-dark " />
      <p>Examples:</p> 
      <ul> 
        <li>Factories using renewable energy sources.</li> 
        <li>Local manufacturing businesses producing medical equipment.</li> 
        <li>Food processing industries reducing agricultural waste.</li> 
      </ul> 
          <div className="border border-1 rounded-3 w-100 border-dark" />
    </div>
  </Col> 

 
  <Col md={4}>
    <div className='h-100 py-5 px-3 gap-3 d-flex flex-column rounded-4' style={{ backgroundColor: "white", boxShadow: " rgba(17, 12, 46, 0.15) 0px 15px 30px 0px" }}> 
      <h2>Innovation</h2> 
         <div className="border border-1 rounded-3 w-100 border-dark" />
      <img className='col-12 col-md-12 rounded-3' src={innovation} alt="Innovation concept" /> 
               <div className="border border-1 rounded-3 w-100 border-dark" />
      <p>Innovation is the creation and application of new ideas, technologies, products, or processes that solve problems and improve people's lives.</p> 
        <div className="border border-1 rounded-3 w-100 border-dark" />
      <p>Innovation drives economic development by increasing efficiency, improving healthcare, advancing education, protecting the environment, and helping societies respond to emerging global challenges.</p> 
         <div className="border border-1 rounded-3 w-100 border-dark mt-5" />
      <p>Examples:</p> 
      <ul> 
        <li>Artificial intelligence improving medical diagnosis.</li> 
        <li>Electric vehicles reducing carbon emissions.</li> 
        <li>Mobile banking expanding financial access.</li> 
      </ul> 
      <div className="border border-1 rounded-3 w-100 border-dark" />
    </div>
  </Col> 
</Row>

<>
  <style>{`
    .hover-card {
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
      cursor: pointer;
    }
    .hover-card:hover {
      transform: translateY(-5px);
      box-shadow: rgba(17, 12, 46, 0.15) 0px 15px 30px 0px !important;
    }
  `}</style>
<h1 className="text-center mt-5" style={{fontWeight:"bold"}}>Benefits of Achieving SDG 9</h1>
  <Row className="d-flex align-items-stretch g-4 mt-2">

    <Col md={4}>
      <div className='hover-card h-100 d-flex flex-column align-items-center justify-content-center gap-2 px-3 py-4 bg-light rounded-4 text-center'>
        <h3 style={{ fontWeight: "bold" }}>Economic Growth</h3>
        <p className="mb-0">Investing in resilient infrastructure and modern industries increases productivity, attracts investment, improves trade, and strengthens national economies. Sustainable economic growth creates opportunities for businesses and individuals alike.</p>
      </div>
    </Col>

    <Col md={4}>
      <div className='hover-card h-100 d-flex flex-column align-items-center justify-content-center gap-2 px-3 py-4 bg-light rounded-4 text-center'>
        <h3 style={{ fontWeight: "bold" }}>Job Creation</h3>
        <p className="mb-0">Industrial development and technological innovation generate employment across many sectors, including manufacturing, engineering, construction, research, transportation, and information technology. These opportunities help improve living standards and reduce unemployment.</p>
      </div>
    </Col>

   
    <Col md={4}>
      <div className='hover-card h-100 d-flex flex-column align-items-center justify-content-center gap-2 px-3 py-4 bg-light rounded-4 text-center'>
        <h3 style={{ fontWeight: "bold" }}>Technological Advancement</h3>
        <p className="mb-0">Innovation encourages scientific research and the development of new technologies that improve communication, transportation, healthcare, education, agriculture, and clean energy. Technological progress enables societies to solve complex challenges more effectively and improve quality of life worldwide.</p>
      </div>
    </Col>

    <Col md={12}>
      <div className='hover-card h-100 d-flex flex-column align-items-center justify-content-center gap-2 px-3 py-4 bg-light rounded-4 text-center'>
        <h3 style={{ fontWeight: "bold" }}>Sustainability</h3>
        <p className="mb-0">Sustainable infrastructure and industries reduce pollution, conserve natural resources, improve energy efficiency, and encourage responsible production practices. This supports long-term economic development while protecting the environment for future generations.</p>
      </div>
    </Col>
  </Row>
</>


</div>


<Footer />
    </div>
  )
}

export default About