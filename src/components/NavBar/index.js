import React, { useState } from 'react';

import './styles.scss';
// import { StyledOffCanvas, Menu, Overlay } from 'styled-off-canvas';
// import { faBars, faTimes, faAt } from '@fortawesome/free-solid-svg-icons';
// import { taggle } from 'src/functions';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledOffCanvas
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      width="25%"
      height="60%"
      position="left"
      menuBackground="transparent"
      overlayBackground="#000"
    >

      <button
        type="button"
        className="button_menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        {(isOpen === false) ? <FontAwesomeIcon icon={faBars} size="2x" className="test" /> : <FontAwesomeIcon icon={faTimes} transform="down-2" size="2x" />}
      </button>

      <Menu>
        <ul className="ulmenu">
          <li className="limenu">
            <a href="/about">Accueil</a>
          </li>
          <li className="limenu">
            <a href="/contact">Contact</a>
          </li>
          <li className="limenu">
            <a href="/about">Le Club</a>
          </li>
          <li className="limenu">
            <a href="/about">Tarifs</a>
          </li>
          <li className="limenu">
            <a href="/about">Entrainements</a>
          </li>
          <li className="limenu">
            <a href="/about">Covids</a>
          </li>
          <li className="limenu">
            <a href="/about">Partenaires</a>
          </li>
          <li className="limenu">
            <a href="/about">Photos</a>
          </li>
        </ul>
      </Menu>
      <Overlay />

    </StyledOffCanvas>

  );
};

export default NavBar;
