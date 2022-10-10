import React, { useEffect, useState } from 'react';
import './styles.scss';
import Navbar from 'src/components/NavBar';
import Logo from 'src/assets/images/logot.png';
// import Link from 'react-router';
import { Link } from 'react-router-dom';
import { StyledOffCanvas, Menu as Menue, Overlay } from 'styled-off-canvas';
import {
  Menu,
  MenuItem,
  MenuButton,
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import store from 'src/store';
import { FaFacebookF } from 'react-icons/fa';
import { BsSnapchat, BsInstagram } from 'react-icons/bs';
import { BiDownArrow } from 'react-icons/bi';
import { IoMdArrowDropdown } from 'react-icons/io';

import { slide as MenuD } from 'react-burger-menu';

function Header() {
  const menuBtn = document.querySelector('.menu-btn');
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // let menuOpen = false;

    const menuBtn = document.querySelector('.menu-btn');
    // console.log(menuBtn)
    if (menuBtn !== null) {
      menuBtn.addEventListener('click', () => {
      // console.log(menuBtn.style);
        if (!isOpen) {
          menuBtn.classList.add('open');
        }
        else {
          menuBtn.classList.remove('open');
        }
      });
    }
  }, [isOpen]);

  const handleResize = () => {
    if (window.screen.width < 600) {
      // document.getElementById('menuMob').style.display = 'flex';
      console.log(document.getElementById('menuMob'));
    }
    console.log('resize');
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize, false);
  }, []);

  const closeMenu = () => {
    setIsOpen(!isOpen);
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.classList.remove('open');
  };

  return (
    <div className="header">
      {/* <Navbar pageWrapId="page-wrap" outerContainerId="outer-container" /> */}
      <div className="header_container">
        {/* <div className="header_logo"> */}
        <img className="header_logo" src={Logo} alt="logo" />
        {/* </div> */}
        <nav className="menu">
          <Link to="/"><MenuButton className="myButton">Accueil</MenuButton></Link>
          <Menu menuButton={<MenuButton className="myButton">Le Club <IoMdArrowDropdown /> </MenuButton>} transition>
            <Link to="/presentation"> <MenuItem>Présentation</MenuItem></Link>
            <Link to="/historique"><MenuItem>Historique</MenuItem></Link>
            {/* <MenuItem>Close Window</MenuItem> */}
          </Menu>

          <Menu menuButton={<MenuButton className="myButton">Tarifs <IoMdArrowDropdown /></MenuButton>} transition>
            <Link to="/cotisations"> <MenuItem>Cotisations</MenuItem></Link>
            <Link to="/entrainements"><MenuItem>Entrainements</MenuItem></Link>
            {/* <MenuItem>Close Window</MenuItem> */}
          </Menu>
          <Link to="/contacts"><MenuButton className="myButton">Contacts</MenuButton></Link>
          <Link to="/equipes"><MenuButton className="myButton">Equipes</MenuButton></Link>
          {store.getState().Tennis.logged === true ? (
            <Link to="/admin"><MenuButton className="myButton">Admin</MenuButton></Link> /// changer LINK pour prendre le bouton entier
          ) : ('')}
          <div className="header_logos_container">
            <span className="socialfb"><a href="https://www.facebook.com/tc.salindres" target="_blank" rel="noreferrer"><FaFacebookF /></a></span>
            <span className="socialsnap"><a href="https://www.snapchat.com/add/asstennis30340" target="_blank" rel="noreferrer"><BsSnapchat /></a></span>
            {/* <span className="social"><a href="https://www.instagram.com/assalindrestennis/" target="_blank" rel="noreferrer"><BsInstagram /></a></span> */}
            <span className="social"><a href="https://www.instagram.com/assalindrestennis/" target="_blank" rel="noreferrer"><img className="logo_social" src="https://static.cdninstagram.com/rsrc.php/v3/yG/r/De-Dwpd5CHc.png" /></a></span>
          </div>
  
        </nav>
        { (window.screen.width < 900) && (
        <StyledOffCanvas
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
           // width="100%"
          position="left"
          closeOnEsc
          height="80%"
        >
          <div
            className="menu-btn"
            id="menuMob"
            data-aos="fade-down"
            data-aos-duration="1500"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="menu-btn__burger" />
          </div>
          {/* <button
             type="button"
             className="menu-btn"
             onClick={() => setIsOpen(!isOpen)}
           >
             {(isOpen === false) ? <FontAwesomeIcon icon={faBars} size="2x" className="test" /> : <FontAwesomeIcon icon={faTimes} transform="down-2" size="2x" />}
           </button> */}
          <Menue className="fond">
            {/* <img src={mylogo} alt="logo" className="logo_header_nav_img" /> */}
            <img className="header_logo" src={Logo} alt="logo" />
            <ul className="rien menu_mob">
              <li>
                <span className="titles">
                  <Link to="/"><MenuButton className="myButton_menu" onClick={() => closeMenu()}>Accueil</MenuButton></Link>

                  <Menu menuButton={<MenuButton className="myButton_menu">Le Club <IoMdArrowDropdown /></MenuButton>} transition>
                    <Link to="/presentation"><MenuItem className="menuMob" onClick={() => closeMenu()}>Présentation</MenuItem></Link>
                    <Link to="/historique"><MenuItem onClick={() => closeMenu()}>Historique</MenuItem></Link>
                    {/* <MenuItem>Close Window</MenuItem> */}
                  </Menu>
                </span>
              </li>
              <li>
                <span className="menu_subtitle ">
                  <Menu menuButton={<MenuButton className="myButton_menu">Tarifs <IoMdArrowDropdown /></MenuButton>} transition>
                    <Link to="/cotisations"><MenuItem onClick={() => closeMenu()}>Cotisations</MenuItem></Link>
                    <Link to="/entrainements"><MenuItem onClick={() => closeMenu()}>Entrainements</MenuItem></Link>
                    {/* <MenuItem>Close Window</MenuItem> */}
                  </Menu>
                  <Link to="/contacts" onClick={() => closeMenu()}><MenuButton className="myButton_menu">Contacts</MenuButton></Link>
                  <Link to="/equipes" onClick={() => closeMenu()}><MenuButton className="myButton_menu">Equipes</MenuButton></Link>
                </span>
                {store.getState().Tennis.logged === true ? (
                 <Link to="/admin"> <MenuButton onClick={() => closeMenu()} className="myButton_menu">Admin</MenuButton></Link>

                ) : ('') }
              </li>
            </ul>
            <div className="followus">Suivez-nous !</div>
            <div className="menu_logos_container">
              
            <span className="socialfbmenu"><a href="https://www.facebook.com/tc.salindres" target="_blank" rel="noreferrer"><FaFacebookF /></a></span>
            <span className="socialsnapmenu"><a href="https://www.snapchat.com/add/asstennis30340" target="_blank" rel="noreferrer"><BsSnapchat /></a></span>
            {/* <span className="social"><a href="https://www.instagram.com/assalindrestennis/" target="_blank" rel="noreferrer"><BsInstagram /></a></span> */}
            <span className="socialmenu"><a href="https://www.instagram.com/assalindrestennis/" target="_blank" rel="noreferrer"><img className="logo_social_mob" src="https://static.cdninstagram.com/rsrc.php/v3/yG/r/De-Dwpd5CHc.png" /></a></span>
          </div>
          </Menue>
          {/* <Overlay /> */}
        </StyledOffCanvas>
        )}

      </div>
    </div>
  );
}

export default Header;
