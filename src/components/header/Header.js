import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/hamzeh.png';
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Hamzeh Obeidat</h1>

        <h2 style={{fontSize: '12.8px'}} className="text-light">
          Software Engineer
        </h2>

        <CTA />
        <HeaderSocials />
        <div className="me">
          <img className="hamzeh_img" src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
