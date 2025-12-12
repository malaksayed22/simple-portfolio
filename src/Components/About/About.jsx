import React from 'react'
import '../Home/Home.css'

export default function About() {
  return (
    <>
    <div className="main w-100">
        <div className="content text-center position-absolute top-50 start-50 translate-middle">
            <h1 className='text-light fw-bolder'>ABOUT COMPONENT</h1>
            <div className="d-flex justify-content-center align-items-center">
                <div className="line bg-light"></div>
                <i className="icon bi bi-star-fill text-light fs-5 mx-3"/>
                <div className="line bg-light"></div>
            </div>
                <div className="row mt-3">
                    <div className="col-6 text-light">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-6 text-light">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
               </div>
        </div>
    </div>
    </>
  )
}
