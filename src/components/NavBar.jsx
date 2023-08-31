import React, { useEffect, useState } from 'react';
import logo from '../assets/img/bglogo.png';
import '../styles/components/NavBar.sass';

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onActive = (value) => {
    setActiveLink(value);
  };

  return (
    <nav className={scrolled ? 'nav-container scrolled ' : 'nav-container'}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul>
        <li><a className={activeLink === 'home' ? 'active' : 'navbar'} href="#home" onClick={() => onActive('home')}>Home</a></li>
        <li><a className={activeLink === 'projects' ? 'active' : 'navbar'} href="#projects" onClick={() => onActive('projects')}>Projectos</a></li>
        <li><a className={activeLink === 'contact' ? 'active' : 'navbar'} href="#contact" onClick={() => onActive('contact')}>Contato</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
