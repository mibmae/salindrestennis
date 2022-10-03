import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons';

function Objectifs() {
  return (
   <div>
        <><h2 className="col-2-small title_section">Objectifs du club</h2></>
        {/* <div className="containers_objectif"> */}
       
        <div className="container_fl">
	 <div className="flex1">
                <h3><FontAwesomeIcon icon={faRocket}  /> Compétition</h3>
                <p>L'As Salindres tennis est un club compétiteur</p>
                <p>Chez les hommes, en 2020, le club a engagé 20 equipes toutes catégories confondues dont 1 équipe régionale Excellence et 1 équipe régionale Honneur.</p>
                <p>Chez les dames, 8 équipes, toutes catégories confondues dont une équipe départementale 2eme division.</p>
         </div>										
	 <div className="flex2">
                <h3><FontAwesomeIcon icon={faRocket}  /> Nouveautés</h3>
                <p>Pour la saison 2023, le club proposera à ses adhérents :</p>
                <ul className="nopuce">
                        <li>1 tournoi interne adultes</li>
                        <li>1 tournoi interne jeunes</li>
                        <li>1 tournoi de doubles hommes</li>
                        <li>1 tournoi de doubles dames</li>
                        <li>1 tournoi de doubles mixtes</li>
                        <li>Des TMC pour les jeunes</li>
                        <li>Des tournois Galaxie pour les plus jeunes afin de leur faire découvrir le plaisir de la compétition</li>
                        <li>Doubles à la mélée</li>
                        <li>Jeux et Matchs</li>
                </ul>
                <p></p>
                {/* <p>Chez les dames, 8 équipes, toutes catégories confondues dont une équipe départementale 2eme division.</p> */}
         </div>
         </div>
         <div className="container_fl_sansmt">
         <div className="flex1">
                <h3><FontAwesomeIcon icon={faRocket}  /> Jeunesse</h3>
                <p>L'AS Salindres tennis, c est aussi 7 équipes jeunes qui commence avec les 8/9/10 ans jusqu'aux 17/18 ans.</p>
                </div>										
         <div className="flex2">
                <h3><FontAwesomeIcon icon={faRocket}  /> Loisirs</h3>
                <p>Malgré son esprit compétiteur, l'AS Salindres tennis est aussi un club de loisirs où petits et grands aiment venir jouer dans un esprit convivial avec de nombreuses animations telles que, le double à la mêlée, la journée jeu et match, etc...</p>
                </div>										
        </div>
</div>
 );
}

export default Objectifs;
