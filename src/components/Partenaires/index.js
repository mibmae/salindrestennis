import React from 'react';
import './styles.scss';
// import agglo from '../../public/img/agglo.png'
import alsat from "../../../public/img/alsat.png"
import agglo from "../../../public/img/agglo.png"
import innovation30 from "../../../public/img/innovation30.jpg"
import intersport from "../../../public/img/intersport.png"
import laurent from "../../../public/img/laurent.jpg"
import platine from "../../../public/img/logo platine.jpg"
import technifibre from "../../../public/img/logo technifibre.jpg"
import logo30 from "../../../public/img/logogard.jpg"
import logocomite from "../../../public/img/comite.jpg"
import logoligue from "../../../public/img/logoligue.jpg"
import logooccitanie from "../../../public/img/logo-occitanie.png"
import logoprothese from "../../../public/img/logoprothese.png"
import logoseat from "../../../public/img/logoseat.jpg"
import salindres from "../../../public/img/salindres.jpg"
import webmg from "../../../public/img/webmg.jpg"
import yesss from "../../../public/img/yess.png"


function Partenaires() {
  return (
   <div className="logos_container">
    
    <div className="logo1">
    <div className="logo_title">
        <h2>Nos partenaires</h2>
    </div>
    <a href="https://www.comitetennisgard.fr/" target="_blank"><img className="img_partenaire" src={logocomite} /></a>
    <a href="https://www.fft.fr/" target="_blank"><img className="img_partenaire" src={logoligue} /></a>
    <a href="https://www.laregion.fr/" target="_blank"><img className="img_partenaire" src={logooccitanie} /></a>
    <a href="http://www.salindres.fr/" target="_blank"><img className="img_partenaire" src={salindres} /></a>
    <a href="https://innovation30.jimdo.com/" target="_blank"><img className="img_partenaire" src={innovation30} /></a>
    <a href="https://www.intersport.fr/" target="_blank"><img className="img_partenaire" src={intersport} /></a>
    <a href="https://www.immo-reseau.com/" target="_blank"><img className="img_partenaire" src={laurent} /></a>
    <a href="https://www.tecnifibre.fr/" target="_blank"><img className="img_partenaire" src={technifibre} /></a>
    </div>
    <div className="logo2">
    <a href="https://www.gard.fr/" target="_blank"><img className="img_partenaire" src={logo30} /></a>
    <a href="https://www.webmg.fr/" target="_blank"><img className="img_partenaire" src={webmg} /></a>
    <a href="https://seat-ales.com/" target="_blank"><img className="img_partenaire" src={logoseat} /></a>
    <a href="https://alsat-habitat.fr/" target="_blank"><img className="img_partenaire" src={alsat} /></a>
    <a href="https://www.ales.fr/" target="_blank"><img className="img_partenaire" src={agglo} /></a>
        <img className="img_partenaire" src={logoprothese} />
        {/* <img className="img_partenaire" src={logoseat} /> */}
    <a href="https://www.facebook.com/groups/210601767211872" target="_blank"><img className="img_partenaire" src={platine} /></a>
       
    <a href="https://www.yesss-fr.com/" target="_blank"><img className="img_partenaire" src={yesss} /></a>
    </div>
  </div>
 );
}

export default Partenaires;
