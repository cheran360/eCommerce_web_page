import React from "react";
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import{ LinkContainer } from "react-router-bootstrap";
import SearchBox from './SearchBox'
import { useDispatch,useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Header = () => {

  const userLogin = useSelector((state) =>state.userLogin);
  const { userInfo } = userLogin; 
  const dispatch = useDispatch(); 

  const logoutHandler = () =>{
    dispatch(logout());
  }

  return (
    <header>
      <Navbar className="main-nav" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
          <Navbar.Brand><h4>amAze</h4></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <SearchBox />
            <Nav className="ml-auto" style={{marginLeft:30}}>
              <LinkContainer to='/cart'>
              <Nav.Link><span>cart</span></Nav.Link>
              </LinkContainer>
              { userInfo ? (
                <NavDropdown title = {userInfo.name} id='username'>
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ):(
                <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              )}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title = 'admin' id='adminmenue'>
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/admin/productList">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/admin/orderList">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>

                  
                </NavDropdown>
              )}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
