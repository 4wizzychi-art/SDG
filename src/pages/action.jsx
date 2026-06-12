import React from 'react'
import Button from '../Components/button'
import { Link } from 'react-router-dom'
import { BiSolidRightArrowAlt } from 'react-icons/bi'

const Action = () => {
  return (
    <div style={{
        backgroundColor:"black"
    }}>

<section className="container py-5">

    <h2 className="text-center mb-5" style={{
        color:"white"
    }}>
        How You Can Contribute
    </h2>

    <div className="row g-4">

        <div className="col-lg-4 col-md-6">
            <div className="action-card">
                <h3>Individuals</h3>

                <ul>
                    <li>Support STEM education</li>
                    <li>Promote digital literacy</li>
                    <li>Advocate for internet access</li>
                    <li>Use sustainable technologies</li>
                </ul>
            </div>
        </div>

        <div className="col-lg-4 col-md-6">
            <div className="action-card">
                <h3>Companies</h3>

                <ul>
                    <li>Invest in R&D</li>
                    <li>Support startups</li>
                    <li>Expand connectivity</li>
                    <li>Build sustainable industries</li>
                </ul>
            </div>
        </div>

        <div className="col-lg-4">
            <div className="action-card">
                <h3>Governments</h3>

                <ul>
                    <li>Invest in infrastructure</li>
                    <li>Promote innovation</li>
                    <li>Fund broadband projects</li>
                    <li>Create supportive policies</li>
                </ul>
            </div>
        </div>

    </div>

</section>

<section className="org-section py-5">

    <div className="container">

        <h2 className="text-center mb-5"  style={{
        color:"white"
    }}>
            Partner Organizations
        </h2>

        <div className="row g-4">

            <div className="col-md-3">
                <a href="https://unglobalcompact.org"
                   className="org-card">
                    UN Global Compact
                </a>
            </div>

            <div className="col-md-3">
                <a href="https://www.itu.int"
                   className="org-card">
                    ITU
                </a>
            </div>

            <div className="col-md-3">
                <a href="https://www.unido.org"
                   className="org-card">
                    UNIDO
                </a>
            </div>

            <div className="col-md-3">
                <a href="https://sdgs.un.org/goals"
                   className="org-card">
                    UN SDGs
                </a>
            </div>

        </div>

    </div>

</section>

<section className="newsletter-section">

    <div className="container text-center">

        <h2  style={{
        color:"white"
    }}>Stay Updated</h2>

        <p  style={{
        color:"white"
    }}>
            Receive SDG 9 news and innovation updates.
        </p>

        <div className="row justify-content-center">

            <div className="col-lg-6 mb-4">

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
Back to Global Progress?
<BiSolidRightArrowAlt className='info_arrow' />

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

export default Action