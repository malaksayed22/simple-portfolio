import React from 'react'
import '../Portfolio/Portfolio.css'
import './Contacts.css'

export default function Contacts() {
  return (
    <>
    <div className="container mt-5 text-center">    
      <h1>CONATCT SECTION</h1>  
      <div className="d-flex justify-content-center align-items-center">
        <div className="line"></div>
        <i className="icon bi bi-star-fill fs-5 mx-3"/>
        <div className="line"></div>
      </div>
      <form className='d-flex flex-column align-items-center'>
        <div className="mb-5 w-50">
          <input type="email" className="border-bottom-only form-control rounded-3" id="exampleInputEmail1" placeholder='userName'/>
        </div>        
        <div className="mb-5 w-50">
          <input type="email" className="border-bottom-only form-control rounded-3" id="exampleInputEmail1" placeholder='userAge'/>
        </div>        
        <div className="mb-5 w-50">
          <input type="email" className="border-bottom-only form-control rounded-3" id="exampleInputEmail1" placeholder='userEmail'/>
        </div>        
        <div className="mb-3 w-50">
          <input type="email" className="border-bottom-only form-control rounded-3" id="exampleInputEmail1" placeholder='userPassword'/>
        </div>     
        <button type="button" className="btn text-light mb-5 no-hover">Send Message</button>          
      </form>
    </div>
    </>
  )
}
