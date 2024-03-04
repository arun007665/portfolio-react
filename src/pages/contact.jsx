import React from 'react'

function Contact() {
  return (
    <section id='contact'>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="display-3 text-success">Contact Me</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="card mt-5">
              <div className="card-header">
                <h6 className="display-6 text-center text-success">My Info</h6>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Location</strong>
                    <span className='text-success float-end'>Bengluru</span>
                  </li>
                  <li className="list-group-item">
                    <strong>Email</strong>
                    <span className='text-success float-end'>Arunkalavathi838@gmail.com</span>
                  </li>
                  <li className="list-group-item">
                    <strong>Mobile</strong>
                    <span className='text-success float-end'>+91 9066191793</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="card mt-3">
              <div className="card-body">
                <form autoComplete='off' >
                  <div className="form-group mt-2">
                    <div className="row">
                      <div className="col md-6 col-lg-6 col-sm-12">
                        <input type="text" name="name" id="name" className="form-control" placeholder='Your name' required />
                      </div>
                      <div className="col md-6 col-lg-6 col-sm-12">
                        <input type="email" name="email" id="email" className="form-control" placeholder='your email' required />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-2">
                    <input type="text" name="subject" id="subject" className="form-control" placeholder='Enter your Subject Here' required />
                  </div>


                  <div className="form-group mt-2">
                    <textarea name="" id="" cols="30" rows="6" className='form-control' placeholder='Message here' required></textarea>
                  </div>
                  <div className="form-control mt-2 ">
                    <input type="submit" value="Send" className="btn btn-success" />
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
