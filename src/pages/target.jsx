import React from 'react'
import Carding from '../Components/carding'
// import target_bg from '../images/target_bg.jpg'
import { Row, Col } from 'react-bootstrap'
import { FaBowlFood } from 'react-icons/fa6'
import { MdEnergySavingsLeaf, MdFamilyRestroom, MdOutlineWorkspaces } from 'react-icons/md'
import { TbHeartRateMonitor } from 'react-icons/tb'
import { FaBookReader } from 'react-icons/fa'
import { IoIosWater } from 'react-icons/io'
import { LiaIndustrySolid } from 'react-icons/lia'
import Button from '../Components/button'
import { Link } from 'react-router-dom'
import { BiSolidRightArrowAlt } from 'react-icons/bi'

const Target = () => {
  return (
   <div style={{
      // backgroundImage: `url(${target_bg})`,
      background:"radial-gradient(circle,rgba(199, 199, 199, 1) 11%, rgba(247, 247, 247, 1) 100%)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment:"fixed",
        minHeight: '100vh',
        width:"100%"
   }}>

     <div className='container d-flex flex-column align-items-center justify-content-center pt-5' >
{/* <h1 style={{
    fontSize:"50px",
    color:"white",
    textDecorationLine:"underline",
    fontFamily:"Montserrat, sans-serif",
}}>
    9 Key Targets & Indicators.
</h1> */}
<div className="container py-5">
  <div className="text-center mx-auto" style={{ maxWidth: "900px" }}>
    
    {/* <span
      className="badge px-3 py-2 mb-5 text-center align-items-center d-flex justify-content-center"
      style={{
        // backgroundColor: "#F36D25",
        fontSize:"clamp(1rem, 5vw, 4rem)"
      }}
    >
      Sustainable Development Goals
    </span> */}

    <h1
      className="fw-bold mb-4"
      style={{
        fontSize: "clamp(1rem, 5vw, 4rem)",
      }}
    >
      9 Goals. One Shared Future.
    </h1>

    <p
      className="lead text-secondary"
      style={{
        lineHeight: "1.8",
      }}
    >
      The Sustainable Development Goals (SDGs) are a global blueprint
      designed to end poverty, protect the environment, and improve the
      quality of life for everyone. Each goal addresses a critical challenge
      facing humanity and encourages collective action toward a more
      sustainable future.
    </p>

    <div className="row mt-5 g-4">
      <div className="col-md-4">
        <div className="p-4 shadow-sm rounded h-100 bg-light">
          <h3>🌍</h3>
          <h5>Protect the Planet</h5>
          <p className="mb-0 text-muted">
            Combat climate change, conserve resources, and safeguard
            ecosystems.
          </p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="p-4 shadow-sm rounded h-100 bg-light">
          <h3>🤝</h3>
          <h5>Improve Lives</h5>
          <p className="mb-0 text-muted">
            Ensure access to education, healthcare, food, and clean water.
          </p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="p-4 shadow-sm rounded h-100 bg-light">
          <h3>📈</h3>
          <h5>Promote Prosperity</h5>
          <p className="mb-0 text-muted">
            Create opportunities for economic growth and decent work.
          </p>
        </div>
      </div>
    </div>

  </div>
</div>
<div className='d-flex flex-column'>
<div className="align-items-center justify-content-center gap-1 pt-5">
<Row className="g-4">
    <Col md={3}>
  <Carding className="target_card" cardTitle="1">
    <div className="d-flex align-items-center justify-content-between">
      <p className="m-0">
        End poverty in all its forms everywhere
      </p>
      <MdFamilyRestroom style={{ fontSize: "110px",

        color:"purple"
       }} />
    </div>
  </Carding>
</Col>

<Col md={3}>
  <Carding className="target_card" cardTitle="2">
    <div className="d-flex align-items-center justify-content-between">
      <p className="m-0">
        End hunger, achieve food security and improved nutrition and promote sustainable agriculture
      </p>
      <FaBowlFood style={{ fontSize: "110px",
        color:"brown"
       }} />
    </div>
  </Carding>
</Col>

<Col md={3}>
  <Carding className="target_card" cardTitle="3">
    <div className="d-flex align-items-center justify-content-between">
      <p className="m-0">
        Ensure healthy lives and promote well-being for all at all ages
      </p>
      <TbHeartRateMonitor style={{ fontSize: "110px",
        color:"red"
       }} />
    </div>
  </Carding>
</Col>

<Col md={3}>
  <Carding className="target_card" cardTitle="4">
    <div className="d-flex align-items-center justify-content-between">
      <p className="m-0">
        Ensure quality education for all and promote lifelong learning
      </p>
      <FaBookReader style={{ fontSize: "110px",
        color:"blue"
       }} />
    </div>
  </Carding>
</Col>


<Col md={3}>
  <Carding className="target_card" cardTitle="5">
<div className="d-flex align-items-center justify-content-between">
  <p className="m-0">Achieve gender equality and empower all women and girls</p>
  <MdFamilyRestroom style={{ fontSize: "110px",
    color:"pink"
   }} />
</div>
</Carding>
</Col>


  <Col md={3}>
    <Carding className="target_card" cardTitle="6">
      <div className="d-flex align-items-center justify-content-between">
        <p className="m-0">
          Ensure availability and sustainable management of water and sanitation for all
        </p>
        <IoIosWater style={{ fontSize: "110px",
          color:"cyan"
         }} />
      </div>
    </Carding>
  </Col>


<Col md={3}>
  <Carding className="target_card" cardTitle="7">
<div className="d-flex align-items-center justify-content-between">
  <p className="m-0">Ensure access to affordable, reliable, sustainable and modern energy for all</p>
  <MdEnergySavingsLeaf style={{ fontSize: "110px",
    color:"green"
   }} />
</div>
</Carding>
</Col>

<Col md={3}>
  <Carding className="target_card" cardTitle="8">
<div className="d-flex align-items-center justify-content-between">
  <p className="m-0">Promote sustained economic growth, full and productive employment and decent work for all</p>
<MdOutlineWorkspaces style={{ fontSize: "110px",
  color:"orange"
 }} />
</div>
</Carding>
</Col>

<Col md={12} className='align-items-center'>
  <Carding className="target_card" cardTitle="9">
    <div className="d-flex align-items-center justify-content-between">
      <p className="m-0">
        Build resilient infrastructure, and sustainable industrialization and foster innovation
      </p>
      <LiaIndustrySolid style={{ fontSize: "110px",
        color:"gray"
       }} />
    </div>
  </Carding>
</Col>
</Row>


</div>
</div>
    </div>

<div className="container py-5">
  <div className="text-center mb-5">
    <h2 className="fw-bold"  style={{
        color:"white"
      }}>Why These Targets Matter</h2>
    <p className="lead"  style={{
        color:"white"
      }}>
      The targets of SDG 9 are designed to create a world where innovation,
      industry, and infrastructure work together to improve lives and drive
      sustainable economic growth.
    </p>
  </div>

  <Row className="g-4">
    <Col lg={4} md={6}>
      <div className="h-100 p-4 shadow-sm rounded bg-light">
        <h4>🏗️ Strong Infrastructure</h4>
        <p>
          Roads, bridges, internet networks, electricity systems, and transport
          facilities form the backbone of economic development. Reliable
          infrastructure allows businesses to grow, improves access to
          education and healthcare, and connects communities to opportunities.
        </p>
      </div>
    </Col>

    <Col lg={4} md={6}>
      <div className="h-100 p-4 shadow-sm rounded bg-light">
        <h4>🏭 Sustainable Industries</h4>
        <p>
          Industries create jobs, produce goods, and contribute to national
          income. SDG 9 encourages industries to adopt environmentally
          responsible practices that reduce pollution while increasing
          productivity and economic growth.
        </p>
      </div>
    </Col>

    <Col lg={4} md={12}>
      <div className="h-100 p-4 shadow-sm rounded bg-light">
        <h4>💡 Innovation & Technology</h4>
        <p>
          Research, technology, and innovation help solve global challenges.
          Investments in science and innovation lead to breakthroughs in
          healthcare, agriculture, communication, and renewable energy.
        </p>
      </div>
    </Col>
  </Row>
</div>

<div className="container py-5">
  <div className="row align-items-center g-4">
    <div className="col-lg-6">
      <h2 className="fw-bold mb-3 lead text-secondary" style={{
        // color:"white"
      }}>
        How SDG 9 Impacts Everyday Life
      </h2>

      <p className='lead text-secondary' style={{
        // color:"white"
      }}>
        The benefits of SDG 9 can be seen in our daily lives. Better roads
        reduce travel time, reliable internet enables digital learning and
        remote work, and modern industries create employment opportunities.
      </p>

      <p className='lead text-secondary' style={{
        // color:"white"
      }}>
        By investing in resilient infrastructure and innovation, countries can
        strengthen their economies, improve living standards, and ensure that
        technological progress benefits everyone.
      </p>

      <p className='lead text-secondary' style={{
        // color:"white"
      }}>
        Achieving SDG 9 is essential for building inclusive societies where
        people have access to opportunities regardless of their location or
        background.
      </p>
    </div>

    <div className="col-lg-6">
      <div className="p-4 rounded shadow-sm bg-light">
        <h4 className="mb-3">Key Focus Areas</h4>

        <ul className="list-group">
          <li className="list-group-item">
            Expand affordable internet access
          </li>
          <li className="list-group-item">
            Support small-scale industries and businesses
          </li>
          <li className="list-group-item">
            Increase investment in research and development
          </li>
          <li className="list-group-item">
            Improve transportation and logistics networks
          </li>
          <li className="list-group-item">
            Promote environmentally sustainable industrialization
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>


<section className="py-5 bg-light">

    <div className="container text-center">

        <h2>Spread the Message</h2>

        <p>
            Share SDG 9 with your friends and network.
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-3">

            <button className="btn btn-primary">
                Facebook
            </button>

            <button className="btn btn-info">
                X
            </button>

            <button className="btn btn-secondary">
                LinkedIn
            </button>

            <button className="btn btn-success">
                Copy Link
            </button>

        </div>

    </div>

</section>
   </div>
  )
}

export default Target