import React from 'react'
import Carding from '../Components/carding'
import target_bg from '../images/target_bg.jpg'
import { Row, Col } from 'react-bootstrap'
import { FaBowlFood, FaMillSign } from 'react-icons/fa6'
import { GiFamilyTree } from 'react-icons/gi'
import { MdEnergySavingsLeaf, MdFamilyRestroom, MdOutlineWorkspaces } from 'react-icons/md'
import { TbHeartRateMonitor } from 'react-icons/tb'
import { FaBookReader } from 'react-icons/fa'
import { IoIosWater } from 'react-icons/io'
import { LiaIndustrySolid } from 'react-icons/lia'
import { BiSolidRightAlt } from 'react-icons/bi'
import Button from '../Components/button'
import { Link } from 'react-router-dom'

const Target = () => {
  return (
   <div style={{
      backgroundImage: `url(${target_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment:"fixed",
        minHeight: '100vh',
        width:"100%"
   }}>

     <div className='container d-flex flex-column align-items-center justify-content-center pt-5' >
<h1 style={{
    fontSize:"50px",
    color:"white",
    textDecorationLine:"underline",
    fontFamily:"Montserrat, sans-serif",
}}>
    9 Key Targets & Indicators.
</h1>
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

<Col md={3} className='align-items-center'>
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
    <Link to="/progress" className='align-items-center d-flex justify-content-center py-5'
    style={{
      textDecorationLine:"none"
    }}
    >
<Button  className="info_btn" style={{
  // backgroundColor:"white",
  color:"#F36D25",
}}
fontsize="20px"
padding="9px 50px"
btncolor="#F36D25"
bgradius="32px"
>
Global Progress?
<BiSolidRightAlt className='info_arrow' />

</Button>
</Link>
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