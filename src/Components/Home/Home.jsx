import React from 'react'
import './Home.css'
import logo from '../../assets/logo.png'
export default function Home() {
  return (
    <>
    <div className="main w-100 overflow-auto">      
        <div className="content text-center mt-5 pt-5">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <h1 className='text-light fw-bolder'>START FRAMEWORK</h1>
            <div className="d-flex justify-content-center align-items-center">
                <div className="line bg-light"></div>
                <i className="icon bi bi-star-fill text-light fs-5 mx-3"/>
                <div className="line bg-light"></div>
            </div>
            <p className='text-light mt-2'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
    </>
  )
}
