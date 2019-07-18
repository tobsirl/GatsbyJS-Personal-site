import React from 'react';

import Footer from './Footer';
import avatar from '../assets/images/avatar.png';

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="/" className="image avatar">
            <img src={avatar} alt="Personal" />
          </a>
          <h1>
            <strong>
              Hi, I&apos;m Paul Tobin.
              {' '}
              <br />
            </strong>
            {' '}
            An Enthusiastic Software Engineer.
            <br />
            Proficient in
            {' '}
            <strong>
              JavaScript,
              {' '}
              <br />
              Node.js and React.
            </strong>
          </h1>
        </div>
        <Footer />
      </header>
    );
  }
}

export default Header;
