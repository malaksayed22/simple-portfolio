import React from 'react'
import './Portfolio.css'
import photo1 from '../../assets/poert1.png'
import photo2 from '../../assets/port2.png'
import photo3 from '../../assets/port3.png'

export default function Portfolio() {
  return (
    <>
    <div className="main2 bg-light overflow-auto">

      <div className="content bg-light mt-5 w-100 text-center">
        <h1 className='fw-bolder'>PORTFOLIO COMPONENT</h1>
        <div className="d-flex justify-content-center align-items-center">
          <div className="line"></div>
          <i className="icon bi bi-star-fill fs-5 mx-3"/>
          <div className="line"></div>
        </div>
          <div className="row m-5 mt-3">
            <div className="col-4">
              <div className="portfolio-card position-relative">
                <img src={photo1} alt="photo" className="portfolio-img" />
                <div className="overlay">
                  <i className="bi bi-plus overlay-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="portfolio-card position-relative">
                <img src={photo2} alt="photo" className="portfolio-img" />
                <div className="overlay">
                  <i className="bi bi-plus overlay-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="portfolio-card position-relative">
                <img src={photo3} alt="photo" className="portfolio-img" />
                <div className="overlay">
                  <i className="bi bi-plus overlay-plus"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-5 mt-3">
            <div className="col-4">
              <div className="portfolio-card position-relative">
                <img src={photo1} alt="photo" className="portfolio-img" />
                <div className="overlay">
                  <i className="bi bi-plus overlay-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="portfolio-card position-relative">
                <img src={photo2} alt="photo" className="portfolio-img" />
                <div className="overlay">
                  <i className="bi bi-plus overlay-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="portfolio-card position-relative">
                <img src={photo3} alt="photo" className="portfolio-img" />
                <div className="overlay">
                  <i className="bi bi-plus overlay-plus"></i>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    
    </>
  )
}
