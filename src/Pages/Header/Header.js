import userEvent from "@testing-library/user-event";
import React from "react";
import { Container, Nav, Navbar,Button } from "react-bootstrap";
import { Link  } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'; 
import useFirebase from "../../hooks/useFirebase";

const Header = () => {
    const {user, logOut} = useFirebase()
  return (
    <div>
      <Navbar sticky="top"  collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as= {HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as= {HashLink} to="/home#service">Services</Nav.Link>
            <Nav.Link as ={HashLink} to="/home#expert">Our Experts</Nav.Link>
           {user?.email?
           <Button onClick={logOut}>Logout</Button>: <Nav.Link as ={Link} to="/login">Login</Nav.Link>
           }
            
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
