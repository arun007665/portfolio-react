import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <main id="hero">
      
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="display-3 text-success">
               
               Arun <strong className="text-danger">Kumar</strong>
               </h3>
               
               <h5 className='display-5 text-danger'>
                  I'm a proffesional Fullstack Developer
               </h5>
               <Link to={`#`} target='_blank' className='btn btn-success f-1 mt-3'>
                <i className="bi bi-download text-dark"></i> Download CV</Link>
              
            
          </div>
        </div>
      </div>
    
    </main>
  )
}

export default Home
