import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{ width: '100%', height: '300px' }}>
      <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap'>
        <div className='w-50 website d-flex flex-column'>
          <h4><i className="fa-solid fa-cloud-arrow-up" style={{ color: '#ffffff' }}></i>{' '}Buy books online? How can i sell my books? ....</h4>
          <br></br>
          <br></br>
          <h6>
            BOOKISH MEDIA is the fastest way to Buy and Sell Books <br></br>
            across all popular indian book store.
          </h6>
          <br></br>
        </div>
        <div className='links d-flex flex-column'>
          <h4>Links</h4>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          <Link to={'/Landingpage'} style={{ textDecoration: 'none', color: 'white' }}>Landingpage</Link>
        </div>
        <div className='guides d-flex flex-column'>
          <h4>Guides</h4>
          <Link to={'https://react.dev/'} style={{ textDecoration: 'none', color: 'white' }}>React</Link>
          <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</Link>
          <Link to={'https://reactrouter.com/en/main'} style={{ textDecoration: 'none', color: 'white' }}>Routing</Link>
        </div>
        <div className='contact d-flex flex-column'>
          <h4>Contact Us</h4>
          <div>
          </div>
          <div>
            <Link to={'/'} className='mx-2' style={{ textDecoration: 'none', color: 'black' }}>
              <i className="fa-brands fa-linkedin" style={{ color: 'black' }}></i></Link>
            <Link to={'/'} className='mx-3' style={{ textDecoration: 'none', color: 'black' }}>
              <i className="fa-brands fa-twitter" style={{ textDecoration: 'none', color: 'black' }}></i></Link>
            <Link to={'/'} className='mx-3' style={{ textDecoration: 'none', color: 'black' }}>
              <i className="fa-brands fa-facebook-f" style={{ textDecoration: 'none', color: 'black' }}></i></Link>
            <Link to={'/'} className='mx-2' style={{ textDecoration: 'none', color: 'black' }}>
              <i className="fa-regular fa-envelope" style={{ textDecoration: 'none', color: 'black' }}></i></Link>

          </div>
        </div>

      </div>
      <p className='mt-5'>Copyright © 2023 BOOKISH MEDIA.Built with React.</p>
    </div>
  )
}

export default Footer
