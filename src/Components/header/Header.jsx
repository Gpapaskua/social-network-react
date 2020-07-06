import React  from 'react';
import './Header.css';

const Header = () => {
    return (
      <div className="navbar">
      <nav className="navbar fixed-top navbar-light bg-dark">
      <a className="navbar-brand" href="/"><span id="home">Home</span></a>
    </nav>
    </div>
    );
}

export default Header;