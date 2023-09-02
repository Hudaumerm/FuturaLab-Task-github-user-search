import React from 'react'
import './NavBar.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import SearchBar from '../SearchBar/SearchBar'

function NavBar() {
  return (
    <div>
        <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">GitHub Users</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ml-auto">
            
            <SearchBar/>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  

    </div>
  )
}

export default NavBar