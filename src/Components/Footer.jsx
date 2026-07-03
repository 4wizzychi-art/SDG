import React from 'react'
import info_bg from '../images/info-bg.jpg'
import SDG_icon from '../images/SDG_icon.png'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="mt-5" style={{
      position:"relative"
    }}>

            <section className="py-5 " style={{
                backgroundColor:"black",
               opacity:"80%",
            }} >

       <div className="container-fluid py-5 px-5">
<Row className='flex justify-between gap-4'>
  <Col md={4}  className=" justify-content-center items-center text-md flex flex-column text-white">
    <img src={SDG_icon} alt="sdg" className="img-fluid" style={{ width: "100px" }} />
    <p className="mt-3 " style={{ color: "white" }}>
      Sustainable Development <br /> Goal 9: Industry, Innovation, <br /> and Infrastructure
    </p>
  </Col>
  <Col md={3} className=" text-md flex flex-column">
    <h5 style={{ color: "white" }}>Quick Links:</h5>

            <ul className='gap-5 flex-column flex-column items-start justify-center' style={{
              listStyle:"none"
            }}>
              <li className='mt-3'>
                  <Link className="footer-link " to="/">
                Home
              </Link>
              </li>
        
   <li className='mt-3'>
                  <Link className="footer-link " to="/about">
                About
              </Link>
              </li>

          <li className='mt-3'>
               <Link className="footer-link mt-3" to="/progress">
                Progress
              </Link>
           </li>
    
              <li className='mt-3'>
                <Link className="footer-link mt-3" to="/target">
                Targets
              </Link>
            </li>

 
    <li className='mt-3'>
                <Link className="footer-link mt-3" to="/action">
                Actions
              </Link>
            </li>
            </ul>
          
  </Col>
  <Col md={4} className="text-end text-md flex flex-column">
  <section className="newsletter-section">

    <div className="container text-center">

        <h3 style={{
        color:"white"
    }}>Stay Updated</h3>

        <p  style={{
        color:"white"
    }}>
            Receive SDG 9 news and innovation updates.
        </p>

        <div className="flex justify-content-center">

            <div className="mb-4">

                <div className="input-group">

                    <input
                        type="email"
                        className="form-control "
                        placeholder="Enter your email"
                    />

                    <button
                        className="btn btn-primary"
                    >
                        Subscribe
                    </button>

                </div>

            </div>

        </div>

    </div>

</section>
  </Col>
</Row>
       </div>
      </section>
    </div>
  )
}

export default Footer