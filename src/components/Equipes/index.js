import React, { useEffect, useState } from 'react';
import './styles.scss';
import moment from 'moment';
import Moment from 'react-moment';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { generateUniqueKey } from 'src/functions';
import { IoMdArrowDropdown, IoIosMan, IoIosWoman } from 'react-icons/io';
import { BsFillTrophyFill } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';
import { FcCalendar } from 'react-icons/fc';
import { AiOutlineWoman, AiOutlineMan } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { TailSpin, RotatingLines } from 'react-loader-spinner';


function Equipes() {

  const [equipesF, setEquipesf] = useState([]);
  const [equipesH, setEquipeh] = useState([]);
  const [equipesHplus, setEquipeHplus] = useState([]);
  const [equipesFplus, setEquipeFplus] = useState([]);
  const [equipesGarcon, setEquipeGarcon] = useState([]);
  const [equipesFille, setEquipeFille] = useState([]);
  const [rencontres, setrencontres] = useState([]);
  const [agenda, setAgenda] = useState([]);
  const [allMatchs, setAllMatchs] = useState([]);
  const [matchsPerMonths, setMatchsPerMonths] = useState([]);
  const [essai, setEssai] = useState([]);
  const [test, setTest] = useState([]);
  const [matchPerDate, setMatchPerDate] = useState([]);
  const [listeMatch, setListeMatch] = useState();
const [categories, setCategories] = useState([]);
const [date, setDate] = useState([]);
const [equipes, setEquipes] = useState([]);
const [nbEquipesF, setNbequipesF] = useState([]);
const [nbEquipesH, setNbequipesH] = useState([]);
const [nbEquipesGarcon, setNbequipesGarcon] = useState([]);
const [nbEquipesFilles, setNbequipesFilles] = useState([]);
const [idEquipes, setIdEquipes] = useState([]);
const [prochainMatch, setProchainMatch] = useState([]);
const [loading, setLoading] = useState(false);
const [matchDimanchePro, setMatchDimanchePro] = useState([]);
const [matchSamediPro, setMatchSamediPro] = useState([]);
const [matchLundiPro, setMatchLundiPro] = useState([]);
const [matchMardiPro, setMatchMardiPro] = useState([]);
const [dateSamediPro, setDateSamediPro] = useState([]);
const [dateDimanchePro, setDateDimanchePro] = useState([]);
const [dateLundiPro, setDateLundiPro] = useState([]);
const [dateMardiPro, setDateMardiPro] = useState([]);
const [equipesInfosCompletes, setEquipesInfosCompletes] = useState([]);
const [capitaines, setCapitaines] = useState([]);
  moment().locale('fr')

  const displayProgSemaine = () => (
    <div className="programmeSe">
          <div className="matchofweek"><FcCalendar /> Matchs de la semaine :</div>
  
          {matchSamediPro.length > 0 ? (
            <div className="calendar_title" onClick={() => showHideProg('samedi')}>{moment(dateSamediPro).locale('fr').format("dddd Do MMMM yyyy").toLowerCase().replace(/^./, moment(dateSamediPro).locale('fr').format("dddd Do MMMM yyyy").toLowerCase()[0].toUpperCase())} ({matchSamediPro.length})<IoMdArrowDropdown id="arrowSamedi" className="arrow" /></div>
          ) : ('')}
          <div className="daysOfMatch" id="samedi">
          {matchSamediPro.filter((e) => e.homologation.sexe === 'F').map((f) => <div key={generateUniqueKey(f)} className="programme_item">{f.homologation.libelle.toLowerCase().replace(/^./, f.homologation.libelle.toLowerCase()[0].toUpperCase())} - {f.isAtHome === true ? (`${f.clubEquipe1Nom} reçoit ${f.clubEquipe2Nom}`) : (`${f.clubEquipe2Nom} se déplace chez ${f.clubEquipe1Nom}`)} </div>)}
          {matchSamediPro.filter((e) => e.homologation.sexe === 'H').map((f) => <div key={generateUniqueKey(f)} className="programme_item">{f.homologation.libelle.toLowerCase().replace(/^./, f.homologation.libelle.toLowerCase()[0].toUpperCase())} - {f.isAtHome === true ? (`${f.clubEquipe1Nom} reçoit ${f.clubEquipe2Nom}`) : (`${f.clubEquipe2Nom} se déplace chez ${f.clubEquipe1Nom}`)} </div>)}
          </div>
  
          {matchDimanchePro.length > 0 ? (
            <div className="calendar_title" onClick={() => showHideProg('dimanche')}>{moment(dateDimanchePro).locale('fr').format("dddd Do MMMM yyyy").toLowerCase().replace(/^./, moment(dateDimanchePro).locale('fr').format("dddd Do MMMM yyyy").toLowerCase()[0].toUpperCase())} ({matchDimanchePro.length})<IoMdArrowDropdown className="arrow" /></div>
          ) : ('')}
          <div className="daysOfMatch" id="dimanche">
          {/* matchDimanchePro.filter((e) => e.homologation.sexe === 'F') */}
            {matchDimanchePro.filter((e) => e.homologation.sexe === 'F').map((f) => <div key={generateUniqueKey(f)} className="programme_item">{f.homologation.libelle.toLowerCase().replace(/^./, f.homologation.libelle.toLowerCase()[0].toUpperCase())} - {f.isAtHome === true ? (`${f.clubEquipe1Nom} reçoit ${f.clubEquipe2Nom}`) : (`${f.clubEquipe2Nom} se déplace chez ${f.clubEquipe1Nom}`)} </div>)}
            {matchDimanchePro.filter((e) => e.homologation.sexe === 'H').map((f) => <div key={generateUniqueKey(f)} className="programme_item">{f.homologation.libelle.toLowerCase().replace(/^./, f.homologation.libelle.toLowerCase()[0].toUpperCase())} - {f.isAtHome === true ? (`${f.clubEquipe1Nom} reçoit ${f.clubEquipe2Nom}`) : (`${f.clubEquipe2Nom} se déplace chez ${f.clubEquipe1Nom}`)} </div>)}
          </div>
          {matchLundiPro.length > 0 ? (
            <div className="calendar_title" onClick={() => showHideProg('lundi')}>{moment(dateLundiPro).locale('fr').format("dddd Do MMMM yyyy").toLowerCase().replace(/^./, moment(dateLundiPro).locale('fr').format("dddd Do MMMM yyyy").toLowerCase()[0].toUpperCase())} ({matchLundiPro.length})<IoMdArrowDropdown className="arrow" /></div>
          ) : ('')}
          <div className="daysOfMatch" id="lundi">
            {matchLundiPro.filter((e) => e.homologation.sexe === 'F').map((f) => <div key={generateUniqueKey(f)} className="programme_item">{f.homologation.libelle.toLowerCase().replace(/^./, f.homologation.libelle.toLowerCase()[0].toUpperCase())} <IoIosWoman /> - {f.isAtHome === true ? (`${f.clubEquipe1Nom} reçoit ${f.clubEquipe2Nom}`) : (`${f.clubEquipe2Nom} se déplace chez ${f.clubEquipe1Nom}`)} </div>)}
            {matchLundiPro.filter((e) => e.homologation.sexe === 'H').map((f) => <div key={generateUniqueKey(f)} className="programme_item">{f.homologation.libelle.toLowerCase().replace(/^./, f.homologation.libelle.toLowerCase()[0].toUpperCase())} <IoIosMan /> - {f.isAtHome === true ? (`${f.clubEquipe1Nom} reçoit ${f.clubEquipe2Nom}`) : (`${f.clubEquipe2Nom} se déplace chez ${f.clubEquipe1Nom}`)} </div>)}
          </div>
  
          {matchMardiPro.length > 0 ? (
            <div className="calendar_title" onClick={() => showHideProg('mardi')}>{moment(dateMardiPro).locale('fr').format("dddd Do MMMM yyyy").toLowerCase().replace(/^./, moment(dateMardiPro).locale('fr').format("dddd Do MMMM yyyy").toLowerCase()[0].toUpperCase())} ({matchMardiPro.length})<IoMdArrowDropdown className="arrow" /></div>
          ) : ('')}
          <div className="daysOfMatch" id="mardi">
  
          {matchMardiPro.filter((e) => e.homologation.sexe === 'F').map((f) => <div key={generateUniqueKey(f)} className="programme_item">{f.homologation.libelle.toLowerCase().replace(/^./, f.homologation.libelle.toLowerCase()[0].toUpperCase())} <IoIosWoman /> - {f.isAtHome === true ? (`${f.clubEquipe1Nom} reçoit ${f.clubEquipe2Nom}`) : (`${f.clubEquipe2Nom} se déplace chez ${f.clubEquipe1Nom}`)} </div>)}
         
          {matchMardiPro.filter((e) => e.homologation.sexe === 'H').map((f) => <div key={generateUniqueKey(f)} className="programme_item">{f.homologation.libelle.toLowerCase().replace(/^./, f.homologation.libelle.toLowerCase()[0].toUpperCase())} <IoIosMan /> - {f.isAtHome === true ? (`${f.clubEquipe1Nom} reçoit ${f.clubEquipe2Nom}`) : (`${f.clubEquipe2Nom} se déplace chez ${f.clubEquipe1Nom}`)} </div>)}
          </div>
        </div>
  )

const getEquipes = () => {
    setLoading(true);
  fetch('https://gstennis.azurewebsites.net/api/equipes?codeClub=60300117&millesime=2023')
  .then((response) => response.json())
  .then((res) => {
    let arrayEquipes = [];
    res.hommes.map((e) => {
      arrayEquipes.push({
        id: e.id,
        homologation: e.homologation.id,
        division: e.division.id
      })
      // setEquipesInfosCompletes(equipesInfosCompletes => [...equipesInfosCompletes, arrayEquipes])
      setEquipesInfosCompletes(arrayEquipes)
    })
    res.femmes.map((e) => {
      arrayEquipes.push({
        id: e.id,
        homologation: e.homologation.id,
        division: e.division.id
      })
      // setEquipesInfosCompletes(equipesInfosCompletes => [...equipesInfosCompletes, arrayEquipes])
      setEquipesInfosCompletes(arrayEquipes)
    })
    res.hommesPlus.map((e) => {
      arrayEquipes.push({
        id: e.id,
        homologation: e.homologation.id,
        division: e.division.id
      })
      // setEquipesInfosCompletes(equipesInfosCompletes => [...equipesInfosCompletes, arrayEquipes])
      setEquipesInfosCompletes(arrayEquipes)
    })
    res.femmesPlus.map((e) => {
      arrayEquipes.push({
        id: e.id,
        homologation: e.homologation.id,
        division: e.division.id
      })
      // setEquipesInfosCompletes(equipesInfosCompletes => [...equipesInfosCompletes, arrayEquipes])
      setEquipesInfosCompletes(arrayEquipes)
    })
    res.filles.map((e) => {
      arrayEquipes.push({
        id: e.id,
        homologation: e.homologation.id,
        division: e.division.id
      })
      // setEquipesInfosCompletes(equipesInfosCompletes => [...equipesInfosCompletes, arrayEquipes])
      setEquipesInfosCompletes(arrayEquipes)
    })
    res.garcons.map((e) => {
      arrayEquipes.push({
        id: e.id,
        homologation: e.homologation.id,
        division: e.division.id
      })
      // setEquipesInfosCompletes(equipesInfosCompletes => [...equipesInfosCompletes, arrayEquipes])
      setEquipesInfosCompletes(arrayEquipes)
    })
    
    let array = [];
    res.femmes.map((e) => {
      array.push(e.id)
    })
    res.hommes.map((e) => {
      array.push(e.id)
    })
    res.hommesPlus.map((e) => {
      array.push(e.id)
    })
    res.femmesPlus.map((e) => {
      array.push(e.id)
    })
    res.filles.map((e) => {
      array.push(e.id)
    })
    res.garcons.map((e) => {
      array.push(e.id)
    })
    setIdEquipes(array)
    setEquipesf(res.femmes);
    setEquipeh(res.hommes);
    setEquipeHplus(res.hommesPlus)
    setEquipeFplus(res.femmesPlus)
    setEquipeFille(res.filles)
    setEquipeGarcon(res.garcons)
    setTimeout(() => document.getElementById('footer').style.display = 'block', 3000)
    setTimeout(() => document.getElementById('equipes').style.display = 'block', 3000)
    setTimeout(() => setLoading(false), 3500)
  })
}

useEffect(() => {
}, [matchDimanchePro])


const getAgenda = () => {
    fetch('https://gstennis.azurewebsites.net/api/agenda?codeClub=60300117&millesime=2023')
    .then((response) => response.json())
    .then((res) => {
      // const resultats = res.filter((item) => new Date(item.date).getMonth() === 9);
      const resultats = res.filter((item) => new Date(item.date).getMonth() === new Date().getMonth());
      console.log(resultats)
      setAgenda(resultats[0].agendaDays)
      // const test = data.filter((item) => new Date(item.date).getMonth() === 9);
    })
  }
const getAgendawe = () => {
    fetch('https://gstennis.azurewebsites.net/api/agenda?codeClub=60300117&millesime=2023')
    .then((response) => response.json())
    .then((res) => {
      const resultatsMonth = res.filter((item) => new Date(item.date).getMonth() === new Date().getMonth());
      const samedi = resultatsMonth[0].agendaDays.filter((match => (moment(match.date).format("DD/MM/YYYY") === moment().isoWeekday(6).format("DD/MM/YYYY"))))
      setDateSamediPro(samedi[0].date)
      setMatchSamediPro(samedi[0].agendaItems);
      const dimanche = resultatsMonth[0].agendaDays.filter((match => (moment(match.date).format("DD/MM/YYYY") === moment().isoWeekday(7).format("DD/MM/YYYY"))))
      setDateDimanchePro(dimanche[0].date)
      setMatchDimanchePro(dimanche[0].agendaItems);
      const lundi = resultatsMonth[0].agendaDays.filter((match => (moment(match.date).format("DD/MM/YYYY") === moment().isoWeekday(8).format("DD/MM/YYYY"))))
      setDateLundiPro(lundi[0].date)
      setMatchLundiPro(lundi[0].agendaItems);
      const mardi = resultatsMonth[0].agendaDays.filter((match => (moment(match.date).format("DD/MM/YYYY") === moment().isoWeekday(9).format("DD/MM/YYYY"))))
      setDateMardiPro(mardi[0].date)
      setMatchMardiPro(mardi[0].agendaItems);
    })
  }


const getProchainMatch = (id) => {
  fetch(`https://gstennis.azurewebsites.net/api/equipe?idEquipe=${id}&idHomologation=82328042&idDivision=115212`)
  .then((response => response.json()))
  .then((res) => {
    // let thisWeekSaturday = moment().isoWeekday(6).format("DD/MM/YYYY");
    const nextMatch = res.phases[0].rencontres.filter((equipe) => (equipe.equipe1.id === id || equipe.equipe2.id === id) && (moment(equipe.dateTheorique).isSameOrAfter(moment()))).filter((ppp) => moment(ppp.dateTheorique).isSameOrAfter(moment())).map((e) => e)
    if (nextMatch[0] !== undefined) {
    if (nextMatch[0].equipe1.id === id) {
      setProchainMatch(prochainMatch => [...prochainMatch, {id: nextMatch[0].equipe1.id, date: nextMatch[0].dateTheorique}])
    }
    if (nextMatch[0].equipe2.id === id) {
      setProchainMatch(prochainMatch => [...prochainMatch, {id: nextMatch[0].equipe2.id, date: nextMatch[0].dateTheorique}])
    }
  }
  });
  
 
}

  const getDatesByMonth = (id) => {
    fetch('https://gstennis.azurewebsites.net/api/agenda?codeClub=60300117&millesime=2023')

      .then((response) => response.json())
      .then((res) => {
    const October = res.filter((item) => new Date(item.date).getMonth() === id);
          const OctoberPerDate = October.map((match) => match.agendaDays)
          const MatchOctoberPerDate = OctoberPerDate[0].map((match) => match.agendaItems)
          MatchOctoberPerDate.forEach((e) => e.forEach((d) => {
            const found = date.find((dte) => dte === d.dateTheorique);
            if (!found) {
            date.push(d.dateTheorique)
           }
          }))
          MatchOctoberPerDate.map((c) => c.forEach((e) => matchPerDate.push(e)))
              
                  MatchOctoberPerDate.map((e) => e.map((t) => {
                    if (categories.find((cat) => cat === t.homologation.categorieAge.libelle) !== t.homologation.categorieAge.libelle) {
                      categories.push(t.homologation.categorieAge.libelle)
                    }
                    
                  }))
                  const journee = MatchOctoberPerDate.map((t) => t.map((re) => re));
                  journee.forEach((rencontres) => setListeMatch(rencontres))
                  
                  const tutu = categories.map((c) => MatchOctoberPerDate.map((e) => e.filter((t) => t.homologation.categorieAge.libelle === c)));
                  setTest([categories.map((c) => MatchOctoberPerDate.map((e) => e.filter((t) => t.homologation.categorieAge.libelle === c)))])
                  const len = tutu.length;
                  for(let i = 0; i < len; i++ ) tutu[i] && tutu.push(tutu[i]); 
                  tutu.splice(0 , len);

      })
  };

  useEffect(() => {
    // setTimeout(() => {
      document.getElementById('footer').style.display = 'none'
      getAgendawe();
      getAgenda();
      getEquipes();
      setTimeout(() => {
      const arrows = document.getElementsByClassName('arrow');
      for (let i = 0; i < arrows.length; i++) {
        arrows[i].style.transform = "rotate(0deg)"
      }
    }, 2000);
    // getDatesByMonth(9)
    document.getElementById('equipes').style.display = 'none'
  }, []);


  useEffect(() => {
    setNbequipesF(equipesF.length + equipesFplus.length)
    setNbequipesH(equipesH.length + equipesHplus.length)
    setNbequipesGarcon(equipesGarcon.length)
    setNbequipesFilles(equipesFille.length)
    // getEquipes()
  }, [equipesF]);
  useEffect(() => {
    if (idEquipes.length > 0) {
      idEquipes.map((e) => {
        getProchainMatch(e)
      })
    }
  }, [idEquipes]);

  const getInfosEquipes = (id, homologation, division) => {
    fetch(`https://gstennis.azurewebsites.net/api/equipe?idEquipe=${id}&idHomologation=${homologation}&idDivision=${division}`)
  .then((response) => response.json())
  .then((res) => {
res.phases[0].detailsEquipes.filter((capitaine) => capitaine.idEquipe === id).map((nom) => setCapitaines(capitaines => [...capitaines, {idEquipe: nom.idEquipe, capitaine: nom.correspondant.nom.substr(5)}]))
})
  }

  useEffect(() => {
    equipesInfosCompletes.map((e) => getInfosEquipes(e.id, e.homologation, e.division))
  }, [equipesInfosCompletes])
  useEffect(() => {
  }, [prochainMatch])
  useEffect(() => {
  }, [capitaines])
  
  const showHide = (id, title) => {
    const fleche = document.getElementById(id + "A");
    // if (fleche.style.transform === "rotate(0deg)") {
    // fleche.style.transform = "rotate(180deg)";
    // }
    // if (fleche.style.transform === "rotate(180deg)") {
    //   fleche.style.transform = "rotate(0deg)";

    // }
    
     if (document.getElementById(id).style.display === 'flex') {
      document.getElementById(id).style.display = 'none';
      if (window.screen.width < 500) {
        document.getElementById(title).classList.remove('sticky');
      }
      fleche.style.transform = "rotate(0deg)";
    } else {
      document.getElementById(id).style.display = 'flex';
      fleche.style.transform = "rotate(180deg)";

      if (window.screen.width < 500) {
        document.getElementById(title).classList.add('sticky');
      }
    }
   
  }
  const showHideProg = (id) => {

  //  document.getElementById('arrowSamedi').style.transform = 'rotate(180deg)'
     if (document.getElementById(id).style.display === 'block') {
      document.getElementById(id).style.display = 'none';
    } else {
      document.getElementById(id).style.display = 'block';
    }
  }

  

  return (
    <><div>
      {(loading) ? (<div className="loader_equipes" key="loader">
        <RotatingLines
          strokeColor="#F56A6A"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true} /><div className="chargement">Chargement ...</div></div>) : ('')}
    </div><div className="equipes" id="equipes">
        <div className="matchofweek"><RiTeamFill /> Nos équipes engagées en championnat </div>
        {(equipesF.length > 0) ? (
          <div className="equipes_title" id='titleFemme' onClick={() => showHide('efemme', 'titleFemme')}><IoIosWoman />Equipes Femmes : ({nbEquipesF}) <IoMdArrowDropdown id='efemmeA' className="arrow" /></div>
        ) : ('')}
        <div id="efemme" className="equipes_list">
          {(equipesF.length > 0 ? equipesF.map((e) => (
            <Card className="shadow" key={generateUniqueKey(e)} style={{ width: '18rem', height: '18rem', margin: '0 auto' }}>
              {/* <Card.Img variant="top" className="card_img" src={e.image} /> */}
              {/* <Card.Img variant="bottom" className="img_card" src="https://www.salindrestennis.fr/images/logo.png" /> */}
              <Card.Header className="card-header_equipes">{e.homologation.libelle.toLowerCase().replace(/^./, e.homologation.libelle.toLowerCase()[0].toUpperCase())}</Card.Header>

              <Card.Body>
                <span className="card_date">{e.nom}</span>
                {/* <Card.Title className="card_title_perso">{e.homologation.libelle}</Card.Title> */}
                <Card.Text>
                  <span>{e.phases[0].phase.phase.libelle.toLowerCase().replace(/^./, e.phases[0].phase.phase.libelle.toLowerCase()[0].toUpperCase())}</span>
                </Card.Text>
                <Card.Text>
                  <span className="resultats">{e.phases[0].rencontres.map(function (e) {
                    if (e === 'V') {
                      return <BsFillTrophyFill key={generateUniqueKey(e)} className="spaceafter_v" />;
                    }
                    if (e === 'D') {
                      return <ImCross key={generateUniqueKey(e)} className="spaceafter_d" />;
                    }
                    if (e === null) {
                      return '- ';
                    }

                  })}</span>
                </Card.Text>
                <Card.Text>
                  <span className="card_date">Prochain match: {prochainMatch.filter((d) => d.id === e.id).map((e) => moment(e.date).format("DD/MM/YYYY"))}</span>
                  <div className="capitaines" key={generateUniqueKey(e)}>Capitaine: {capitaines.filter((f) => f.idEquipe === e.id).map((d) => d.capitaine)} </div>

                </Card.Text>
              </Card.Body>
            </Card>
          )) : '')}
          {(equipesFplus.length > 0 ? equipesFplus.map((e) => (
            <Card className="shadow" key={generateUniqueKey(e)} style={{ width: '18rem', height: '18rem', margin: '0 auto' }}>
              {/* <Card.Img variant="top" className="card_img" src={e.image} /> */}
              {/* <Card.Img variant="bottom" className="img_card" src="https://www.salindrestennis.fr/images/logo.png" /> */}
              <Card.Header className="card-header_equipes">{e.homologation.libelle.toLowerCase().replace(/^./, e.homologation.libelle.toLowerCase()[0].toUpperCase())}</Card.Header>
              <Card.Body>
                <span className="card_date">{e.nom}</span>
                {/* <Card.Title className="card_title_perso"></Card.Title> */}
                <Card.Text>
                  <span>{e.phases[0].phase.phase.libelle.toLowerCase().replace(/^./, e.phases[0].phase.phase.libelle.toLowerCase()[0].toUpperCase())}</span>
                </Card.Text>
                <Card.Text>
                  <span className="resultats">{e.phases[0].rencontres.map(function (e) {
                    if (e === 'V') {
                      return <BsFillTrophyFill key={generateUniqueKey(e)} className="spaceafter_v" />;
                    }
                    if (e === 'D') {
                      return <ImCross key={generateUniqueKey(e)} className="spaceafter_d" />;
                    }
                    if (e === null) {
                      return '- ';
                    }

                  })}</span>
                </Card.Text>
                <Card.Text>
                  <span key={generateUniqueKey(e)} className="card_date">Prochain match: {prochainMatch.filter((d) => d.id === e.id).map((e) => moment(e.date).format("DD/MM/YYYY"))}</span>
                  <div className="capitaines" key={generateUniqueKey(e)}>Capitaine: {capitaines.filter((f) => f.idEquipe === e.id).map((d) => d.capitaine)} </div>

                </Card.Text>
              </Card.Body>
            </Card>
          )) : '')}
        </div>
        {(equipesH.length > 0) ? (
          <div className="equipes_title" id='titleHomme' onClick={() => showHide('ehomme', 'titleHomme')}><IoIosMan />Equipes Hommes : ({nbEquipesH}) <IoMdArrowDropdown id='ehommeA' className="arrow" /> </div>
        ) : ('')}
        <div id="ehomme" className="equipes_list">
          {(equipesH.length > 0 ? equipesH.map((e) => (
            <Card className="shadow" key={generateUniqueKey(e)} style={{ width: '18rem', height: '18rem', margin: '0 auto' }}>
              {/* <Card.Img variant="bottom" className="img_card" src="https://www.salindrestennis.fr/images/logo.png" /> */}
              <Card.Header className="card-header_equipes">{e.homologation.libelle.toLowerCase().replace(/^./, e.homologation.libelle.toLowerCase()[0].toUpperCase())}</Card.Header>

              <Card.Body>
                <span className="card_date">{e.nom}</span>
                {/* <Card.Title className="card_title_perso">{e.homologation.libelle}</Card.Title> */}
                <Card.Text>
                  <span>{e.phases[0].phase.phase.libelle.toLowerCase().replace(/^./, e.phases[0].phase.phase.libelle.toLowerCase()[0].toUpperCase())}</span>
                </Card.Text>
                <Card.Text>
                  <span className="resultats">{e.phases[0].rencontres.map(function (e) {
                    if (e === 'V') {
                      return <BsFillTrophyFill key={generateUniqueKey(e)} className="spaceafter_v" />;
                    }
                    if (e === 'D') {
                      return <ImCross key={generateUniqueKey(e)} className="spaceafter_d" />;
                    }
                    if (e === null) {
                      return '- ';
                    }

                  })}</span>
                </Card.Text>
                <Card.Text>
                  <span key={generateUniqueKey(e)} className="card_date">Prochain match: {prochainMatch.filter((d) => d.id === e.id).map((e) => moment(e.date).format("DD/MM/YYYY"))}</span>
                  <div className="capitaines" key={generateUniqueKey(e)}>Capitaine: {capitaines.filter((f) => f.idEquipe === e.id).map((d) => d.capitaine)} </div>
                </Card.Text>
                {/* <Button className="readmore"></Button> */}
              </Card.Body>
            </Card>
          )) : '')}
          {(equipesHplus.length > 0 ? equipesHplus.map((e) => (
            <Card className="shadow" key={generateUniqueKey(e)} style={{ width: '18rem', height: '18rem', margin: '0 auto' }}>
              {/* <Card.Img variant="bottom" className="img_card" src="https://www.salindrestennis.fr/images/logo.png" /> */}
              <Card.Header className="card-header_equipes">{e.id}{e.homologation.libelle.toLowerCase().replace(/^./, e.homologation.libelle.toLowerCase()[0].toUpperCase())}</Card.Header>

              <Card.Body>
                <span className="card_date">{e.nom}</span>
                {/* <Card.Title className="card_title_perso">{e.homologation.libelle}</Card.Title> */}
                <Card.Text>
                  <span>{e.phases[0].phase.phase.libelle.toLowerCase().replace(/^./, e.phases[0].phase.phase.libelle.toLowerCase()[0].toUpperCase())}</span>
                </Card.Text>
                <Card.Text>
                  <span className="resultats">{e.phases[0].rencontres.map(function (e) {
                    if (e === 'V') {
                      return <BsFillTrophyFill key={generateUniqueKey(e)} className="spaceafter_v" />;
                    }
                    if (e === 'D') {
                      return <ImCross key={generateUniqueKey(e)} className="spaceafter_d" />;
                    }
                    if (e === null) {
                      return '- ';
                    }

                  })}</span>
                </Card.Text>
                <Card.Text>
                  <span key={generateUniqueKey(e)} className="card_date">Prochain match: {prochainMatch.filter((d) => d.id === e.id).map((e) => moment(e.date).format("DD/MM/YYYY"))}</span>
                  <div className="capitaines" key={generateUniqueKey(e)}>Capitaine: {capitaines.filter((f) => f.idEquipe === e.id).map((d) => d.capitaine)} </div>
                </Card.Text>
                {/* <Button className="readmore"></Button> */}
              </Card.Body>
            </Card>
          )) : '')}
        </div>




        {/* {(nbEquipesFilles.length < 1) ? ( */}
        <div className="equipes_title" id="titleFille" onClick={() => showHide('efille', 'titleFille')}><IoIosMan />Equipes Filles : ({nbEquipesFilles}) <IoMdArrowDropdown id='efilleA' className="arrow" /> </div>
        {/* ) : ('')} */}
        <div id="efille" className="equipes_list">
          {(equipesFille.length > 0 ? equipesFille.map((e) => (
            <Card className="shadow" key={generateUniqueKey(e)} style={{ width: '18rem', height: '18rem', margin: '0 auto' }}>
              {/* <Card.Img variant="bottom" className="img_card" src="https://www.salindrestennis.fr/images/logo.png" /> */}
              <Card.Header className="card-header_equipes">{e.homologation.libelle.toLowerCase().replace(/^./, e.homologation.libelle.toLowerCase()[0].toUpperCase())}</Card.Header>

              <Card.Body>
                <span className="card_date">{e.nom}</span>
                {/* <Card.Title className="card_title_perso">{e.homologation.libelle}</Card.Title> */}
                <Card.Text>
                  <span>{e.phases[0].phase.phase.libelle}</span>
                </Card.Text>
                <Card.Text>
                  <span className="resultats">{e.phases[0].rencontres.map(function (e) {
                    if (e === 'V') {
                      return <BsFillTrophyFill className="spaceafter_v" />;
                    }
                    if (e === 'D') {
                      return <ImCross className="spaceafter_d" />;
                    }
                    if (e === null) {
                      return '- ';
                    }

                  })}</span>
                </Card.Text>
                {/* <Button className="readmore"></Button> */}
                <span key={generateUniqueKey(e)} className="card_date">Prochain match: {prochainMatch.filter((d) => d.id === e.id).map((e) => moment(e.date).format("DD/MM/YYYY"))}</span>
                <div className="capitaines" key={generateUniqueKey(e)}>Capitaine: {capitaines.filter((f) => f.idEquipe === e.id).map((d) => d.capitaine)} </div>

              </Card.Body>
            </Card>
          )) : '')}

        </div>

        {/* {(nbEquipesGarcon.length < 1) ? ( */}
        <div className="equipes_title" id='titleGarcon' onClick={() => showHide('egarcon', 'titleGarcon')}><IoIosMan />Equipes Garçons : ({nbEquipesGarcon}) <IoMdArrowDropdown id='egarconA' className="arrow" /> </div>
        {/* ) : ('')} */}
        <div id="egarcon" className="equipes_list">
          {(equipesGarcon.length > 0 ? equipesGarcon.map((e) => (
            <Card className="shadow" key={generateUniqueKey(e)} style={{ width: '18rem', height: '18rem', margin: '0 auto' }}>
              {/* <Card.Img variant="bottom" className="img_card" src="https://www.salindrestennis.fr/images/logo.png" /> */}
              <Card.Header className="card-header_equipes">{e.homologation.libelle.toLowerCase().replace(/^./, e.homologation.libelle.toLowerCase()[0].toUpperCase())}</Card.Header>

              <Card.Body>
                <span className="card_date">{e.nom}</span>
                {/* <Card.Title className="card_title_perso">{e.homologation.libelle}</Card.Title> */}
                <Card.Text>
                  <span>{e.phases[0].phase.phase.libelle.toLowerCase().replace(/^./, e.phases[0].phase.phase.libelle.toLowerCase()[0].toUpperCase())}</span>
                </Card.Text>
                <Card.Text>
                  <span className="resultats">{e.phases[0].rencontres.map(function (e) {
                    if (e === 'V') {
                      return <BsFillTrophyFill className="spaceafter_v" />;
                    }
                    if (e === 'D') {
                      return <ImCross className="spaceafter_d" />;
                    }
                    if (e === null) {
                      return '- ';
                    }

                  })}</span>
                </Card.Text>
                {/* <Button className="readmore"></Button> */}
                <span key={generateUniqueKey(e)} className="card_date">Prochain match: {prochainMatch.filter((d) => d.id === e.id).map((e) => moment(e.date).format("DD/MM/YYYY"))}</span>
                <div className="capitaines" key={generateUniqueKey(e)}>Capitaine: {capitaines.filter((f) => f.idEquipe === e.id).map((d) => d.capitaine)} </div>

              </Card.Body>
            </Card>
          )) : '')}


        </div>
        {displayProgSemaine()}
      </div></>
    
  );
}

export default Equipes;
