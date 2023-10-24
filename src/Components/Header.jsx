import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>BOOKISH MEDIA</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded ms-5'>
              <Link to={'/wishlist'} className='d-flex align-items-center' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
                <i class='me-2'></i>
                SELL
                <Badge className='ms-2 rounded bg-light'></Badge>
              </Link>
            </Nav.Link>
            <Nav.Link className='btn border rounded ms-5'>
              <Link to={'/cart'} className='d-flex align-items-center' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
                <i className=' me-2'></i>
                BUY
                <Badge className='ms-2 rounded bg-light'></Badge>

              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header