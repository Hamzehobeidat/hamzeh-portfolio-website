import React, {useState} from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBookAlt} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';

const Nav = () => {
  const [activeNav, setActiveNave] = useState('#');
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNave('#')}
        className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNave('#about')}
        className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNave('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}>
        <BiBookAlt />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNave('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}>
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNave('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
