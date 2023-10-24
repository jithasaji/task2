import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Landingpage() {
  return (
    <>
      <Row className='mt-5 mb-5 align-items-center justify-content-between'>
        <Col></Col>
        <Col lg={4}>
          <h3 className='mb-3'> <span className='text-warning'>Bookish Media</span></h3>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae arcu neque. Aenean aliquam arcu in fermentum volutpat. Proin tempor egestas iaculis. Vivamus rhoncus, est a ornare vulputate, sapien ipsum aliquet dui, ut fringilla orci arcu sit amet lorem. Nullam imperdiet aliquam ligula, quis cursus sem. Vestibulum eu venenatis felis.</p>
          <button  className='btn btn-info mt-5 fw-bolder'>Get Started</button>
        </Col>
        <Col></Col>
        <Col className='ps-5' lg={6}>
          <img className='img-fluid ms-5 ps-5' src="https://www.pexels.com/photo/stack-of-books-on-white-table-7171398/" alt="landing" />
        </Col>
      </Row>
      <div className ='container mt-5 mb-5 d-flex flex-column align-items-center justify-content-center '>
        <h3>Features</h3>
        <div className='cards w-100 mt-5 d-flex align-items-center justify-content-between' >
        </div> 
        </div> 
        </>
          )
}

          export default Landingpage
