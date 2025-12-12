import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>
    <div className="footer w-100 overflow-auto position-relative">
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-4 text-center text-light">
                    <h2>LOCATION</h2>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>            
                <div className="col-4 text-center text-light">
                    <h2>AROUND THE WEB</h2>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="shape pt-1"><i className="bi bi-facebook"></i></div>
                        <div className="shape pt-1"><i className="bi bi-twitter"></i></div>
                        <div className="shape pt-1"><i className="bi bi-linkedin"></i></div>
                        <div className="shape pt-1"><i className="bi bi-google"></i></div>
                    </div>
                </div>      
                <div className="col-4 text-center text-light">
                    <h2>ABOUT FREELANCER</h2>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>                       
            </div>
        </div>
        <div className="footer-end position-absolute text-center">
            <p className='text-light mt-4'>Copyright © Your Website 2025</p>
        </div>
    </div>
    </>
  )
}
