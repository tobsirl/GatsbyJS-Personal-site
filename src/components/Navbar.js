import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
  <header id="navbar">
    <ul>
      <li>
        <Link to="/">
  Home
        </Link>
      </li>
      <li>
        <Link to="/blogs">
  Blogs
        </Link>
      </li>
      <li>
        <Link to="/contact">
  Contact
        </Link>
      </li>
    </ul>
  </header>
);

export default Navbar;
