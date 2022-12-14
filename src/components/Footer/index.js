import React from 'react';
import './styles.scss';
import gmaps from 'src/assets/images/gmap.png';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <div className="footer" id="footer">
      <div className="footer_container">
        <div id="coordonnees" className="contacts">
          <h2>Nous contacter</h2>
          {/* <img src="https://www.tcbalma.fr/cache/images/f19166198adeeeff0df760041a1cf937_1e120ec2ae4ef1b9dc17e801a0c96139.jpg" alt="" /> */}
          <div className="secretariat">Présidente - Delphine GARRE</div>
          <div className="telephone"><span id="e319785452"><a href="tel:0667091166" itemProp="phone">06 67 09 11 66</a></span></div>
          <div className="email"><span id="e319785452"><a href="mailto:salindres.tennis@orange.fr">salindres.tennis@orange.fr</a></span></div>
          <div className="adresse">Complexe sportif du Frigoulou - 30340 Salindres</div>
          <div id="link_admin"><Link to="/login">Accès Admin</Link></div>
          {/* <img src="https://counter9.stat.ovh/private/compteurdevisite.php?c=hw3jqazce8w75me6adsfhxlj3ank9e9p" border="0" title="compteur site sans pub" alt="compteur site sans pub"></img> */}
          <img src="http://www.mon-compteur.fr/html_c02genv2-70845-5" border="0" />

        </div>
        <div className="gmap">
          <a href="https://www.google.com/maps/place/As+Salindres+Tennis/@44.1656946,4.1588741,17z/data=!4m5!3m4!1s0x12b444af026d3b7b:0x853a4463a488a269!8m2!3d44.1656379!4d4.1587924" target="_blank" rel="noreferrer"><img src={gmaps} className="map" /></a>
        </div>
        {/* <div className="footer_name">As Salindres Tennis</div>
      <div className="footer_mail">Salindres.tennis@orange.fr</div>
      <div className="footer_tel">06.67.09.11.66</div> */}
      </div>
    </div>
  );
}

export default Footer;
