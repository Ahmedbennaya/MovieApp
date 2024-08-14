import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import './NavbarComponent.css'; // Optional: Add custom styles if needed
import Addmovie from './Addmovie';

const NavbarComponent = ({ movies = [], onSearch = () => {} }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Ensure `movies` is an array before filtering
    const filteredMovies = Array.isArray(movies) ? movies.filter(movie => 
      movie.Title.toLowerCase().includes(query)
    ) : [];

    onSearch(filteredMovies);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/">Films App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Addmovie/>
    </Navbar>
  );
};

export default NavbarComponent;
