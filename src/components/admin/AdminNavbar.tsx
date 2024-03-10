import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import logo from "../../assets/logo.png";
import { useNavigate } from 'react-router-dom';

export default function AdminNavbar(data: any) {
    
    const navigate = useNavigate()
  return (
    <Navbar bg="success" expand="lg" className=''>
      <Navbar.Brand><img src={logo} alt="Logo" height={40} onClick={()=>{navigate('/admin/dashboard')}} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
      <Navbar.Collapse id="navbarNavAltMarkup">
        <Nav className="mx-auto">
          <Nav.Link className={`fs-5 m-2 ${data.option === "dashboard" ? 'text-light' : ''}`} onClick={()=>{navigate('/admin/dashboard')}}>
            Dashboard
          </Nav.Link>
          <Nav.Link className={`fs-5 m-2 ${data.option === "package" ? 'text-light' : ''}`} onClick={()=>{navigate('/admin/product')}}>Packages</Nav.Link>
          <Nav.Link className={`fs-5 m-2 ${data.option === "blog" ? 'text-light' : ''}`}  onClick={()=>{navigate('/admin/blog')}}>Blogs</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
