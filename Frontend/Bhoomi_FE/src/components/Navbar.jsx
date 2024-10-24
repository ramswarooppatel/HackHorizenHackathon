import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.customNavbar}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="brand-text">Bhumi</span>
          <span className="brand-icon">🌿</span>
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <Link className="nav-link" to="/features">Features</Link>
            <Link className="nav-link" to="/pricing">Pricing</Link>
            <Link className="nav-link" to="/about">About</Link>
          </div>
        </div>
        <form className="d-flex search-form" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
