import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
  <header>
    <ul>
      <li>
        <Link to="/">
  Home
        </Link>
      </li>
      <li>
        <Link to="/blog">
  Blog
        </Link>
      </li>
      <li>
        <Link to="/blog">
  Contact
        </Link>
      </li>
    </ul>
  </header>
);

export default Navbar;
