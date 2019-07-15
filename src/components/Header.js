import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="Personal Picture" />
          </a>
          <h1>
            <strong>
              Hi, I&apos;m Paul Tobin. <br />
            </strong>{' '}
            An Enthusiastic Software Engineer.
            <br />
            Proficient in JavaScript, <br />
            Node.js and React.
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
