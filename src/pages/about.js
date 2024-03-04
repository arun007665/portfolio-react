import React from 'react'
import { Link } from 'react-router-dom'
import img1 from './../img1.jpg'

function About() {
  return (
    <div>
      return(
        <section id="about">
          <div className='container mt-5'>
            <div className='row'>
              <div  className='col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-sm-12  text-center'>
                <h4 className='display-4 text-success'>
                About Me
                </h4>
                <p className='text-dark'>
                Recently  graduated  and passionate about web devlopment, equipped with strong dkills like react and node. Proactive and detail-oriented, committed to delivering high-quality work. Thrives in collaborative environments, valuing diverse perspectives. Eager to contribute to meaningful projects and further develop skills while embracing new challenges.
                </p>
                <Link to={`#`} target="_blank" className="btn btn-success">
                  <i className="bi bi-download text-dark"></i>
                  Download Cv
                </Link>
              </div>
            </div>
            <div className="row m-4">
              <div col-md-4 className="col-lg-4 col-sm-12">
                <div className="card">
                  <img src={img1} alt="no-image" className='card-img-top' height={400} />
                </div>
              </div>
              <div className="col-md-8 col-lg-8 col-sm-12">
                <div className="card">
                  <div className="card-body text-center">
                    <h6 className="text-success display-6">I'm Professional Full Stack Developer</h6>
                    <p className="small text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, fugiat.</p>
                  </div>
                </div>
                <div className="card mt-2 mb-2">
                  <div className="card-body">
                    <li className="list-group">
                      <div className="list-group-item border-0">
                        <strong className="text-success"><i className="bi bi-phone"></i>Mobile</strong>
                        <span className="float-end">+91 9066191793</span>
                      </div>
                    </li>
                    <li className="list-group">
                      <div className="list-group-item border-0">
                        <strong className="text-success"><i className="bi bi-envelope"></i>Email</strong>
                        <span className="float-end">Arunkalavathi838@gmail.com</span>
                      </div>
                    </li>
                    <li className="list-group-item btn-group text-center border-0">
                      <Link to={`#`} target='_blank' className='btn btn-primary btn-sm'>
                        <i className="bi bi-facebook"></i>
                        Facebook
                      </Link>
                      <Link to={`#`} target='_blank' className='btn btn-info btn-sm'>
                        <i className="bi bi-linkedin"></i>
                        Linkedin
                      </Link>
                      <Link to={`#`} target='_blank' className='btn btn-dark btn-sm'>
                        <i className="bi bi-github"></i>
                        github
                      </Link>
                      <Link to={`#`} target='_blank' className='btn btn-warning btn-sm'>
                        <i className="bi bi-instagram"></i>
                        instagram
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-12 text-center">
                <div className="p-3 m-3">
                  <div className="text-success display-6 text-center">My Skills</div>
                </div>
              </div>
            </div>

            <div className="row m-4">
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div>
                  <p className="lead text-success">Html</p>
                  <div className="progress">
                    <div className="progress bar bg-success" style={{width:"90%"}}>90%</div>
                  </div>
                </div>
                <div>
                  <p className="lead text-success">Css</p>
                  <div className="progress">
                    <div className="progress bar bg-success" style={{width:"85%"}}>85%</div>
                  </div>
                </div>
                <div>
                  <p className="lead text-success">Javascript</p>
                  <div className="progress">
                    <div className="progress bar bg-success" style={{width:"85%"}}>85%</div>
                  </div>
                </div>
                <div>
                  <p className="lead text-success">React</p>
                  <div className="progress">
                    <div className="progress bar bg-success" style={{width:"85%"}}>85%</div>
                  </div>
                </div>


              </div>
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div>
                  <p className="lead text-success">node-js</p>
                  <div className="progress">
                    <div className="progress bar bg-success" style={{width:"90%"}}>90%</div>
                  </div>
                </div>
                <div>
                  <p className="lead text-success">express-js</p>
                  <div className="progress">
                    <div className="progress bar bg-success" style={{width:"50%"}}>85%</div>
                  </div>
                </div>
                <div>
                  <p className="lead text-success">mongo-db</p>
                  <div className="progress">
                    <div className="progress bar bg-success" style={{width:"50%"}}>85%</div>
                  </div>
                </div>
                <div>
                  <p className="lead text-success">mysql</p>
                  <div className="progress">
                    <div className="progress bar bg-success" style={{width:"50%"}}>85%</div>
                  </div>
                </div>


              </div>
            </div>
            
          </div>
        </section>
      )
    </div>
  )
}

export default About



