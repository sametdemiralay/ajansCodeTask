import React from "react";
import {
 Nav,
 FormControl,
 Button,
 Navbar,
 InputGroup,
} from "react-bootstrap";
import LOGO from "../images/logo.png";
import SEARCH from "../images/search.png";
import "./style/navbarStyle.css";

export const NavbarSection = () => {
 return (
  <Navbar
   collapseOnSelect
   expand="lg"
   variant="dark"
   className="navbarContainer"
   fixed="top"
  >
   <Navbar.Brand href="/">
    <img
     src={LOGO}
     width="200"
     height="60"
     className="d-inline-block align-top"
     alt="React Bootstrap logo"
     className="logo"
    />
   </Navbar.Brand>
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
     <Nav.Link className="navbarItem" href="/">
      Anasayfa
     </Nav.Link>
     <Nav.Link className="navbarItem" href="/hakkimizda">
      Hakkımızda
     </Nav.Link>
     <Nav.Link className="navbarItem" href="/urunler">
      Ürünler
     </Nav.Link>
     <Nav.Link className="navbarItem" href="/iletisim">
      İletişim
     </Nav.Link>
    </Nav>
    <Nav>
     <InputGroup className="mb-3" className="searchBar">
      <FormControl
       placeholder="Ara..."
       aria-label="Recipient's username"
       aria-describedby="basic-addon2"
       className="searchItem"
      />
      <InputGroup.Append>
       <Button variant="secondary" className="searchButton p-0">
        <img
         src={SEARCH}
         width="20"
         height="20"
         className="d-inline-block align-top"
         alt="React Bootstrap logo"
        />
       </Button>
      </InputGroup.Append>
     </InputGroup>
    </Nav>
   </Navbar.Collapse>
  </Navbar>
 );
};
