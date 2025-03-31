import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li><Link to="/">Page 1</Link></li>
          <li><Link to="/page2">Page 2</Link></li>
          <li><Link to="/page3">Page 3</Link></li>
          <li><Link to="/page4">Page 4</Link></li>
          <li><Link to="/page5">Page 5</Link></li>
        </ul>

        <div className="navbar-action">
          <a
            href="https://jamesbuckhouse.substack.com/"
            className="navbar-newsletter"
            target="_blank"
            rel="noopener noreferrer"
          >
            📰 Newsletter
          </a>
        </div>

        <div className="navbar-hamburger" onClick={toggleMenu} ref={hamburgerRef}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-mobile-menu ${isOpen ? 'active' : ''}`} ref={menuRef}>
        <li><Link to="/" onClick={closeMenu}>Page 1</Link></li>
  <li><Link to="/page2" onClick={closeMenu}>Page 2</Link></li>
  <li><Link to="/page3" onClick={closeMenu}>Page 3</Link></li>
  <li><Link to="/page4" onClick={closeMenu}>Page 4</Link></li>
  <li><Link to="/page5" onClick={closeMenu}>Page 5</Link></li>
          <li>
            <a 
              href="https://jamesbuckhouse.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              📰 Newsletter
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;