import './All.css';
import React, { useReducer } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Hader() {
  const user = JSON.parse(localStorage.getItem('userInf'))
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate('/register');

  }
  return (
    <div>
      {/* <h1>Header Page</h1> */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto nav-bar-wrapper">
            {
              localStorage.getItem("userInf") ?
                <>
                  <Link to='/add'>Add Product</Link>
                  <Link to='/update'>Update Product</Link>


                </>
                :
                <>



                  <Link to='/login'>Login</Link>
                  <Link to='/register'>Register</Link>
                </>
            }



          </Nav>
        </Container>
        {
          localStorage.getItem("userInf") ?<>
            <Nav>
              <NavDropdown title={user && user.name} >
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            </>
            :<></>
        }
      </Navbar>
    </div>
  )
}

export default Hader
