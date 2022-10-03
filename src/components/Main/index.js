/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from 'react';
import './styles.scss';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';




function Main() {
    useEffect(() => {
      window.scrollTo({
          // eslint-disable-next-line no-undef
          top: 0,
          behavior: 'smooth',
        })
  }, [])
  return (
    <>
    
    <h2 className="col-2-small title_section_main">Nos entraîneurs diplomés d'état</h2>
        <div className="container_fl">
        <div className="flex1">
          <div className="cont_image">
            <figure>
            <img src="https://www.salindrestennis.fr/images/mika.jpg" className="image" />
            <figcaption>Mikaël Sebagh</figcaption>
            </figure>
            </div>
            <p>&#10078;Bonjour,</p>

<p align="justify">J'ai débuté le tennis à l'age de 9 ans au Tennis club de Deaux et après quelques essais
dans des clubs du Grand bassin Alésien, c'est finalement à 17 ans que j'ai rejoins le club de l'AS Salindres.</p>
    <p align="justify">Compétiteur (2 ème Série depuis 25 ans), le club m'a permis de jouer au niveau d'équipe nationale et d'accentuer cet engouement pour ce sport.<br/>
      Après l'obtention d'une licence S.T.A.P.S, c'est finalement la passion pour le tennis et mes années d'éducateur qui m'ont naturellement dirigé à passer la formation de D.E à Montpellier en 2001.<br/>
      Dimplôme d'état en poche, je suis enseignant depuis 20 ans à l'AS Salindres.</p>
    <p align="justify">Avec l'aide active des membres du bureau, j'ai créé une école compétition axée principalement sur la formation des jeunes joueurs, avec entre-autre la mise en place d'un groupe Avenir Club.<br/>
      Labéllisé &quot;Club Formateur Régional&quot;, ces diverses mesures ont permis durant plusieurs années consécutives aux jeunes joueurs d'être champions du Gard par équipe.</p>
    <p align="justify">Gràce à mon parcours, j'adapte mon enseignement et ma pédagogie aux envies de chaque adhérent; du loisir pour certains à la compétition pour d'autres.<br/>
      Pour celà, je propose des cours collectifs, individuels, en binôme, ou des stages pendant les vacances.</p>
    <p align="justify">Outre l'enseignement du tennis, je coordonne l'équipe pédagogique, j'organise les plateaux Galaxie pour les plus jeune et dirige des animations.<br/>
      De manière générale, j'attache beaucoup d'importance au respect, à l'esprit de combativité et à la transmission de ma passion pour le tennis.</p>
    <p align="justify">Alors, 
    A vos raquettes, et vivement de vous retrouver sur les courts pour partager des moments de sueur et de convivialité.&#10078;</p>
    <hr />
             </div>
        

          <div className="flex2">
          <div className="cont_image">
          <figure>
          <img src="https://www.salindrestennis.fr/images/nouveauprof.jpg" className="image" />
            <figcaption><span className="name_prof">Julien Papazoff</span></figcaption>
            </figure>
            
            </div>
            <p>&#10078;Bonjour,</p>
                       <p>Jeune joueur de tennis rep&eacute;r&eacute; par la ligue &Icirc;le de France, puis Languedoc Roussillon de 9 &agrave; 12 ans, j&rsquo;ai fait mes premi&egrave;res armes au Tennis Club de la Barte &agrave; B&eacute;ziers avec pr&eacute;paration au Dipl&ocirc;me d'Etat tennis que j&rsquo;ai obtenu en 2003. J&rsquo;ai aussi pass&eacute; les examens du Juge arbitre par &eacute;quipes et juge arbitre de tournoi de niveau 2.  En 2017, j&rsquo;ai obtenu le dipl&ocirc;me de pr&eacute;parateur physique module A et B.</p>
                       <p>Mon 1er poste d'enseignant fut &agrave; St Hippolyte du Fort o&ugrave; j&rsquo;ai cr&eacute;&eacute; une &eacute;cole de comp&eacute;tition.  J&rsquo;ai ensuite &eacute;t&eacute; enseignant au TC Chauny (02-Aisne) o&ugrave; j&rsquo;ai aussi cr&eacute;&eacute; une &eacute;cole de comp&eacute;tition et d'&eacute;quipe jeunes dans toutes les cat&eacute;gories d'&acirc;ges.  En 2017, j&rsquo;ai obtenu le dipl&ocirc;me de pr&eacute;parateur physique module A et B.  Mon dernier poste &eacute;tait &agrave; Assas o&ugrave; j&rsquo;ai mis en place des actions pour d&eacute;velopper la comp&eacute;tition et la vie du club. Notamment, les entrainements physique et Fit tennis.</p>
                       <p>Mon r&ocirc;le &agrave; l&rsquo;AS Salindres Tennis est de pr&eacute;parer les enfants &agrave; la comp&eacute;tition, leur apprendre &agrave; compter, &agrave; se placer, &agrave; mettre en place des sch&eacute;mas tactiques. J&rsquo;accompagne les enfants lors des rencontres par &eacute;quipes, autant que possible, mais aussi lors de tournoi Galaxie pour les plus jeunes. Je propose aussi des cours collectifs pour les adultes, ainsi que des cours de physique pour les grands et les petits et de Fit tennis pour les femmes.  Je propose aussi des cours individuels et bin&ocirc;mes.  En tant que JAT, je dirige les animations du club, tels que le double &agrave; la m&ecirc;l&eacute;e, la journ&eacute;e jeu et match, les tournois internes, les doubles, etc&hellip;.  Je mets en place des stages avec accompagnement en tournoi pendant les vacances scolaires.</p>
                       <p>Je suis une personne qui aime les valeurs, l'engagement et j'ai la passion du tennis. J'aime me renseigner continuellement sur les nouveaut&eacute;s dans mon sport et m'implique dans la mise en place d'un enseignement tourn&eacute; vers le jeu, la pr&eacute;paration &agrave; la comp&eacute;tition et les analyses n&eacute;cessaires &agrave; la progression des joueurs.&#10078;<br /></p>
                       <hr />
          
                      </div>
        </div>
       </>
  );
}

export default Main;
