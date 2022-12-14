import React, { useEffect, useState, useCallback, useRef } from 'react';
import './styles.scss';
import moment from 'moment';
import Moment from 'react-moment';
import Button from 'react-bootstrap/Button';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import Card from 'react-bootstrap/Card';
import { generateUniqueKey } from 'src/functions';
import Swal from 'sweetalert2';

import { IoMdArrowDropdown, IoIosMan, IoIosWoman } from 'react-icons/io';
import { BsFillTrophyFill, BsHouseDoorFill  } from 'react-icons/bs';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { RiTeamFill } from 'react-icons/ri';
import { FcCalendar } from 'react-icons/fc';
import { FaRegHandSpock } from 'react-icons/fa';
import { FcNext } from 'react-icons/fc';
import { TbExternalLink  } from 'react-icons/tb';
import { ImCross } from 'react-icons/im';
import { TailSpin, RotatingLines } from 'react-loader-spinner';
import Logo from 'src/assets/images/logot.png';
import store from 'src/store';


function Equipes() {

  const ref = useRef(null)
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
const [classement, setClassement] = useState([]);
const [classementComplet, setClassementComplet] = useState([]);
const [adversaire, setAdversaire] = useState([]);
const [codeClub, setCodeClub] = useState(60300117);
const [optionsClub, setOptionsClub] = useState([]);
  moment().locale('fr')
  // const codeClub = 60300117;
  // const codeClub = 60300701;


  useEffect(() => {
  }, [optionsClub])
  

  function search(code) {
    setOptionsClub([])
    setCapitaines([])
    setProchainMatch([])
    setClassement([])
    setAdversaire([])
    fetch(`https://gstennis.azurewebsites.net/api/search`, 
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({search: code})
})
  .then((response) => response.json())
  .then((res) => {
    // document.getElementsByTagName('datalist')[0].style.display = 'flex';
    if (document.getElementById('dlist')) {
    document.getElementById('dlist').style.display = 'flex';
    }
    if(res.clubs !== undefined) {
    setOptionsClub(res.clubs)
    }
  })
}


  useEffect(() => {
    setOptionsClub([])
    setCapitaines([])
    setProchainMatch([])
    setClassement([])
    setAdversaire([])
    search(codeClub.toString())
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
  displayProgSemaine()
  
  }, [codeClub])
  

  const exportProg = useCallback(() => {
    document.getElementById('exp').display = 'none';
    if (ref.current === null) {
      return
    }
    const elements = document.getElementsByClassName('daysOfMatch');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
    }
    document.getElementById('matchofweek').style.textAlign = 'left';
    document.getElementById('programmeSe').style.margin = 0;
    document.getElementById('end').style.display = 'none';

    if (window.screen.width < 500) {
      document.getElementById('programmeSe').style.width = '100%';
    } else {
    document.getElementById('programmeSe').style.width = '65%';
    }
    setTimeout(() => {
      setLoading(true)
      toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'programmeSemaine.png'
        link.href = dataUrl
        link.click()
        document.getElementById('matchofweek').style.textAlign = 'center';
        document.getElementById('programmeSe').style.margin = '0 auto 5rem';
        document.getElementById('end').style.display = 'block';
        setLoading(false)

      })
      .catch((err) => {
        console.log(err)
      })
    }, 4000);
    
  }, [ref])

  const displayProgSemaine = () => (
    <div className="programmeSe" id="programmeSe" ref={ref}>
      <pre>
          <div id="matchofweek" className="matchofweek"> <img src={Logo} className="logo_calendar" /><FcCalendar /> Matchs de la semaine : {(store.getState().Tennis.logged === true) && (<TbExternalLink id="exp" onClick={exportProg} />)}</div>
          {matchLundiPro.length > 0 ? (
            <div className="calendar_title" onClick={() => showHideProg('lundi')}>{moment(dateLundiPro).locale('fr').format("dddd Do MMMM yyyy").toLowerCase().replace(/^./, moment(dateLundiPro).locale('fr').format("dddd Do MMMM yyyy").toLowerCase()[0].toUpperCase())} ({matchLundiPro.length})<IoMdArrowDropdown className="arrow" /></div>
          ) : ('')}
          <div className="daysOfMatch" id="lundi">
          {matchLundiPro.filter((e) => e.homologation.sexe === 'F').map((f) => <div key={generateUniqueKey(f)} className="programme_item">{f.homologation.libelle.toLowerCase().replace(/^./, f.homologation.libelle.toLowerCase()[0].toUpperCase())} - {f.isAtHome === true ? (<><BsHouseDoorFill /> {f.clubEquipe1Nom} VS {f.clubEquipe2Nom}</>) : (<><TbExternalLink /> {f.clubEquipe1Nom} VS {f.clubEquipe2Nom}</>)} </div>)}
            {matchLundiPro.filter((e) => e.homologation.sexe === 'H').map((f) => <div key={generateUniqueKey(f)} className="programme_item">{f.homologation.libelle.toLowerCase().replace(/^./, f.homologation.libelle.toLowerCase()[0].toUpperCase())} - {f.isAtHome === true ? (<><BsHouseDoorFill /> {f.clubEquipe1Nom} VS {f.clubEquipe2Nom}</>) : (<><TbExternalLink /> {f.clubEquipe1Nom} VS {f.clubEquipe2Nom}</>)} </div>)}
          </div>
  
          {matchMardiPro.length > 0 ? (
            <div className="calendar_title" onClick={() => showHideProg('mardi')}>{moment(dateMardiPro).locale('fr').format("dddd Do MMMM yyyy").toLowerCase().replace(/^./, moment(dateMardiPro).locale('fr').format("dddd Do MMMM yyyy").toLowerCase()[0].toUpperCase())} ({matchMardiPro.length})<IoMdArrowDropdown className="arrow" /></div>
          ) : ('')}
          <div className="daysOfMatch" id="mardi">
  
          {matchMardiPro.filter((e) => e.homologation.sexe === 'F').map((f) => <div key={generateUniqueKey(f)} className="programme_item">{f.homologation.libelle.toLowerCase().replace(/^./, f.homologation.libelle.toLowerCase()[0].toUpperCase())} - {f.isAtHome === true ? (<><BsHouseDoorFill /> {f.clubEquipe1Nom} VS {f.clubEquipe2Nom}</>) : (<><TbExternalLink /> {f.clubEquipe1Nom} VS {f.clubEquipe2Nom}</>)} </div>)}
          {matchMardiPro.filter((e) => e.homologation.sexe === 'H').map((f) => <div key={generateUniqueKey(f)} className="programme_item">{f.homologation.libelle.toLowerCase().replace(/^./, f.homologation.libelle.toLowerCase()[0].toUpperCase())} - {f.isAtHome === true ? (<><BsHouseDoorFill /> {f.clubEquipe1Nom} VS {f.clubEquipe2Nom}</>) : (<><TbExternalLink /> {f.clubEquipe1Nom} VS {f.clubEquipe2Nom}</>)} </div>)}
          </div>
          {matchSamediPro.length > 0 ? (
            <div className="calendar_title" onClick={() => showHideProg('samedi')}>{moment(dateSamediPro).locale('fr').format("dddd Do MMMM yyyy").toLowerCase().replace(/^./, moment(dateSamediPro).locale('fr').format("dddd Do MMMM yyyy").toLowerCase()[0].toUpperCase())} ({matchSamediPro.length})<IoMdArrowDropdown id="arrowSamedi" className="arrow" /></div>
          ) : ('')}
          <div className="daysOfMatch" id="samedi">
          {matchSamediPro.filter((e) => e.homologation.sexe === 'F').map((f) => <div key={generateUniqueKey(f)} className="programme_item">{f.homologation.libelle.toLowerCase().replace(/^./, f.homologation.libelle.toLowerCase()[0].toUpperCase())} - {f.isAtHome === true ? (<><BsHouseDoorFill /> {f.clubEquipe1Nom} VS {f.clubEquipe2Nom}</>) : (<><TbExternalLink /> {f.clubEquipe1Nom} VS {f.clubEquipe2Nom}</>)} </div>)}
            {matchSamediPro.filter((e) => e.homologation.sexe === 'H').map((f) => <div key={generateUniqueKey(f)} className="programme_item">{f.homologation.libelle.toLowerCase().replace(/^./, f.homologation.libelle.toLowerCase()[0].toUpperCase())} - {f.isAtHome === true ? (<><BsHouseDoorFill /> {f.clubEquipe1Nom} VS {f.clubEquipe2Nom}</>) : (<><TbExternalLink /> {f.clubEquipe1Nom} VS {f.clubEquipe2Nom}</>)} </div>)}
          </div>
  
          {matchDimanchePro.length > 0 ? (
            <div className="calendar_title" onClick={() => showHideProg('dimanche')}>{moment(dateDimanchePro).locale('fr').format("dddd Do MMMM yyyy").toLowerCase().replace(/^./, moment(dateDimanchePro).locale('fr').format("dddd Do MMMM yyyy").toLowerCase()[0].toUpperCase())} ({matchDimanchePro.length})<IoMdArrowDropdown className="arrow" /></div>
          ) : ('')}
          <div className="daysOfMatch" id="dimanche">
            {matchDimanchePro.filter((e) => e.homologation.sexe === 'F').map((f) => <div key={generateUniqueKey(f)} className="programme_item">{f.homologation.libelle.toLowerCase().replace(/^./, f.homologation.libelle.toLowerCase()[0].toUpperCase())} - {f.isAtHome === true ? (<><BsHouseDoorFill /> {f.clubEquipe1Nom} VS {f.clubEquipe2Nom}</>) : (<><TbExternalLink /> {f.clubEquipe1Nom} VS {f.clubEquipe2Nom}</>)} </div>)}
            {matchDimanchePro.filter((e) => e.homologation.sexe === 'H').map((f) => <div key={generateUniqueKey(f)} className="programme_item">{f.homologation.libelle.toLowerCase().replace(/^./, f.homologation.libelle.toLowerCase()[0].toUpperCase())} - {f.isAtHome === true ? (<><BsHouseDoorFill /> {f.clubEquipe1Nom} VS {f.clubEquipe2Nom}</>) : (<><TbExternalLink /> {f.clubEquipe1Nom} VS {f.clubEquipe2Nom}</>)} </div>)}
          </div>
          <div className="end" id="end">
            Fin de la programmation de la semaine
          </div>
         </pre>
        </div>
  )

const getEquipes = () => {
    setLoading(true);
  fetch(`https://gstennis.azurewebsites.net/api/equipes?codeClub=${codeClub}&millesime=2023`)
  .then((response) => response.json())
  .then((res) => {
    let arrayEquipes = [];
    res.hommes.map((e) => {
      arrayEquipes.push({
        id: e.id,
        homologation: e.homologation.id,
        division: e.division.id,
        numEquipe: e.nom.substr(-1)
      })
      setEquipesInfosCompletes(arrayEquipes)
    })
    res.femmes.map((e) => {
      arrayEquipes.push({
        id: e.id,
        homologation: e.homologation.id,
        division: e.division.id,
        numEquipe: e.nom.substr(-1)
      })
      setEquipesInfosCompletes(arrayEquipes)
    })
    res.hommesPlus.map((e) => {
      arrayEquipes.push({
        id: e.id,
        homologation: e.homologation.id,
        division: e.division.id,
        numEquipe: e.nom.substr(-1)
      })
      setEquipesInfosCompletes(arrayEquipes)
    })
    res.femmesPlus.map((e) => {
      arrayEquipes.push({
        id: e.id,
        homologation: e.homologation.id,
        division: e.division.id,
        numEquipe: e.nom.substr(-1)
      })
      setEquipesInfosCompletes(arrayEquipes)
    })
    res.filles.map((e) => {
      arrayEquipes.push({
        id: e.id,
        homologation: e.homologation.id,
        division: e.division.id,
        numEquipe: e.nom.substr(-1)
      })
      setEquipesInfosCompletes(arrayEquipes)
    })
    res.garcons.map((e) => {
      arrayEquipes.push({
        id: e.id,
        homologation: e.homologation.id,
        division: e.division.id,
        numEquipe: e.nom.substr(-1)
      })
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
    setTimeout(() => document.getElementById('footer').style.display = 'block', 2500)
    setTimeout(() => document.getElementById('equipes').style.display = 'block', 2500)
    setTimeout(() => setLoading(false), 3500)
  })
}

const getAgenda = () => {
    fetch(`https://gstennis.azurewebsites.net/api/agenda?codeClub=${codeClub}&millesime=2023`)
    .then((response) => response.json())
    .then((res) => {
      const resultats = res.filter((item) => new Date(item.date).getMonth() === new Date().getMonth());
      setAgenda(resultats[0].agendaDays)
    })
    .catch((error) => 
    Swal.fire({
      title: 'Code Club Non Valide !',
      text: "Le code du club demand?? n'est pas valide",
      icon: 'error',
      confirmButtonText: 'Ok',
    })
    )
  }
const getAgendawe = () => {
  setMatchDimanchePro([]);
  setMatchLundiPro([]);
  setMatchSamediPro([]);
  setMatchMardiPro([]);
    fetch(`https://gstennis.azurewebsites.net/api/agenda?codeClub=${codeClub}&millesime=2023`)
    .then((response) => response.json())
    .then((res) => {
      const resultatsMonth = res.filter((item) => new Date(item.date).getMonth() === new Date().getMonth());
      const samedi = resultatsMonth[0].agendaDays.filter((match => (moment(match.date).format("DD/MM/YYYY") === moment().isoWeekday(6).format("DD/MM/YYYY"))))
      if(samedi[0] !== undefined) {
      setDateSamediPro(samedi[0].date)
      setMatchSamediPro(samedi[0].agendaItems);
      }
      const dimanche = resultatsMonth[0].agendaDays.filter((match => (moment(match.date).format("DD/MM/YYYY") === moment().isoWeekday(7).format("DD/MM/YYYY"))))
      if (dimanche[0] !== undefined) {
      setDateDimanchePro(dimanche[0].date)
      setMatchDimanchePro(dimanche[0].agendaItems);
      }
      const lundi = resultatsMonth[0].agendaDays.filter((match => (moment(match.date).format("DD/MM/YYYY") === moment().isoWeekday(1).format("DD/MM/YYYY"))))
      if (lundi[0] !== undefined) {
      setDateLundiPro(lundi[0].date)
      setMatchLundiPro(lundi[0].agendaItems);
      }
      const mardi = resultatsMonth[0].agendaDays.filter((match => (moment(match.date).format("DD/MM/YYYY") === moment().isoWeekday(2).format("DD/MM/YYYY"))))
      if (mardi[0] !== undefined) {
      setDateMardiPro(mardi[0].date)
      setMatchMardiPro(mardi[0].agendaItems);
      }
    })
  }


  
  function se(code, id) {
    fetch(`https://gstennis.azurewebsites.net/api/search`, 
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({search: code})
})
  .then((response) => response.json())
  .then((res) => {
    setAdversaire(adversaire => [...adversaire, {id: id, equipe: res.clubs[0].nom}])

  })
}



const getProchainMatch = (id) => {
  fetch(`https://gstennis.azurewebsites.net/api/equipe?idEquipe=${id}&idHomologation=82328042&idDivision=115212`)
  .then((response => response.json()))
  .then((res) => {
    const nextMatch = res.phases[0].rencontres.filter((equipe) => (equipe.equipe1.id === id || equipe.equipe2.id === id) && (moment(equipe.dateTheorique).isSameOrAfter(moment().startOf('day')))).map((e) => e)
    if (nextMatch[0] !== undefined) {
     
    if (nextMatch[0].equipe1.id === id) {
      se((nextMatch[0].equipe2.codeClub), id);
        setProchainMatch(prochainMatch => [...prochainMatch, {id: nextMatch[0].equipe1.id, date: nextMatch[0].dateTheorique, codeClubAccueil: nextMatch[0].codeClubAccueil}])
    }
    if (nextMatch[0].equipe2.id === id) {
      se((nextMatch[0].equipe1.codeClub), id);
      setProchainMatch(prochainMatch => [...prochainMatch, {id: nextMatch[0].equipe2.id, date: nextMatch[0].dateTheorique, codeClubAccueil: nextMatch[0].codeClubAccueil}])
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

  const getInfosEquipes = (id, homologation, division) => {
    fetch(`https://gstennis.azurewebsites.net/api/equipe?idEquipe=${id}&idHomologation=${homologation}&idDivision=${division}`)
  .then((response) => response.json())
  .then((res) => {
res.phases[0].detailsEquipes.filter((capitaine) => capitaine.idEquipe === id).map((nom) => setCapitaines(capitaines => [...capitaines, {idEquipe: nom.idEquipe, numeroEquipe: nom.numero, capitaine: nom.correspondant.nom.substr(5)}]))
res.phases[0].classements.filter((classement) => classement.nom.includes('SALINDRES')).map((e) => setClassement(classement => [...classement, {id: id, idEquipe: e.nom.substr(-1), classement: e.place}]))

setClassementComplet(classementComplet => [...classementComplet, {idEquipe: id, classement: res.phases[0].classements}])
})
  }

  useEffect(() => {
    equipesInfosCompletes.map((e) => getInfosEquipes(e.id, e.homologation, e.division))
  }, [equipesInfosCompletes])
  useEffect(() => {
  }, [prochainMatch])
  useEffect(() => {
  }, [adversaire])
  useEffect(() => {
  }, [capitaines])
  useEffect(() => {
  }, [classement])
  
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
  useEffect(() => {
  }, [matchDimanchePro])
  useEffect(() => {
  }, [classementComplet])
  
  const showHide = (id, title) => {
    const fleche = document.getElementById(id + "A");
    
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

  const flipCard = (id) => {
    const front = document.getElementById(id + "front");
    const back = document.getElementById(id + "back")

    if (front.style.display === "block") {
    front.style.display = "none"
    back.style.display = "block"
    } else {
      front.style.display = "block"
      back.style.display = "none"
  
    }
    
  }

  const afficheEquipe = (e) => {
  
  return (
    <Card id="flip-card" className="shadow" key={generateUniqueKey(e)} style={{ width: '18rem', height: '20rem', margin: '0 auto' }}>
    <div id={e.id + "front"} key={generateUniqueKey(e)} className="front" style={{ display: 'block'}}>
    <Card.Header key={generateUniqueKey(e)} className="card-header_equipes">{e.homologation.libelle.toLowerCase().replace(/^./, e.homologation.libelle.toLowerCase()[0].toUpperCase())}
    <img src="https://ja-drancy.com/wp-content/uploads/2020/01/classement.jpg" className="classementImg" title="Voir le classement" alt="Voir le classement" onClick={(r) => flipCard(e.id)}/>
    </Card.Header>
    <Card.Body>
      <span className="card_date" key={generateUniqueKey(e)}>{e.nom}</span>
      <Card.Text key={generateUniqueKey(e)}>
        <span key={generateUniqueKey(e)}>{e.phases[0].phase.phase.libelle.toLowerCase().replace(/^./, e.phases[0].phase.phase.libelle.toLowerCase()[0].toUpperCase())}</span>
      </Card.Text>
      <Card.Text key={generateUniqueKey(e)}>
        <span key={generateUniqueKey(e)} className="res">{e.phases[0].rencontres.map(function (e) {
          if (e === 'V') {
            return <BsFillTrophyFill key={generateUniqueKey(e)} className="spaceafter_v" />;
          }
          if (e === 'D') {
            return <ImCross key={generateUniqueKey(e)} className="spaceafter_d" />;
          }
          if (e === 'N') {
            return <FaRegHandSpock key={generateUniqueKey(e)} className="spaceafter_n" />
          }
          if (e === null) {
            return '- ';
          }
        })}</span>
      </Card.Text>
      <Card.Text key={generateUniqueKey(e)}>
      <span key={generateUniqueKey(e)} className="card_date">Classement: {classement.filter((d) => d.id === e.id && d.idEquipe === e.nom.substr(-1)).map((e) => (e.classement !== 0) ? (e.classement === 1 ? (e.classement + 'er') : (e.classement + ' ??me')) : ('NC'))}</span><br />
        <span key={generateUniqueKey(e)} className="capitaines"><FcNext /> {prochainMatch.filter((d) => d.id === e.id).map((e) => (<><span key={generateUniqueKey(e)}>{moment(e.date).format("DD/MM/YYYY")}</span> <span key={generateUniqueKey(e)} className="valign">{e.codeClubAccueil === "60300117" ? (<BsHouseDoorFill />) : (<TbExternalLink />)}</span></>))} : {adversaire.filter((d) => d.id === e.id).map((e) => e.equipe)}</span><br />
        <span className="capitaines" key={generateUniqueKey(e)}>Capitaine: {capitaines.filter((f) => f.idEquipe === e.id).map((d) => <span key={generateUniqueKey(e)}>{d.capitaine}</span>)} </span><br />
      </Card.Text>
    </Card.Body>
    </div>
    <div id={e.id + "back"} key={generateUniqueKey(e)} className="back">
    <Card.Header key={generateUniqueKey(e)} className="card-header_equipes">{e.homologation.libelle.toLowerCase().replace(/^./, e.homologation.libelle.toLowerCase()[0].toUpperCase())}
   <img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/44359/back-arrow-emoji-clipart-xl.png" className='classementImg' onClick={(r) => flipCard(e.id)}/>
    </Card.Header>
    <Card.Body key={generateUniqueKey(e)}>
      <div key={generateUniqueKey(e)} className="classContain">
      <div key={generateUniqueKey(e)} className="classementAfc">Rang<div key={generateUniqueKey(e)} className="pts">Points</div></div>

      {classementComplet.filter((g) => g.idEquipe === e.id).map((f) => f.classement.map((d) => <div  className="classementAf" key={generateUniqueKey(d)}>{d.place} - {d.nom.includes('SALINDRES') ? (<span className="home">{d.nom}</span>) : (d.nom)}<div key={generateUniqueKey(d)} className="pts">{d.points}</div></div>))}
      </div>
      {/* {classementComplet.filter((d) => d.idEquipe === e.id).map((e) => (<><span>{e.classement.map((t) => t.nom)}</span> </>))}  */}
         </Card.Body>
    </div>
  </Card>
  )
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
    </div>
    <div className="equipes" id="equipes">
        <div className="matchofweek"><RiTeamFill /> Nos ??quipes engag??es en championnat 
        {(store.getState().Tennis.logged === true) && (

          <><div className="codeClub"><input type="text" list='dlist' className="input_club" placeholder='Entrez le code Club' id='codclub' onChange={(e) => search(e.target.value)} /><div id="dlist" className="city_datalist">
              {optionsClub.length >= 1 && optionsClub.map((club) => (
                <option
                  className="option"
                  value={`${club.nom}`}
                  key={generateUniqueKey(club)}
                  onClick={(e) => setCodeClub(club.code)}
                > {`${club.nom}`}
                </option>
              ))}
            </div>
        
        </div></>)} 
        </div>

        {/* Equipes Femmes */}

        {(equipesF.length > 0) ? (
          <div key={generateUniqueKey(equipesF)} className="equipes_title" id='titleFemme' onClick={() => showHide('efemme', 'titleFemme')}><IoIosWoman />Equipes Femmes : ({nbEquipesF}) <IoMdArrowDropdown id='efemmeA' className="arrow" /></div>
        ) : ('')}
        <div id="efemme" className="equipes_list">
          {(equipesF.length > 0 ? equipesF.map((e) => (
           afficheEquipe(e)
          )) : '')}
          {(equipesFplus.length > 0 ? equipesFplus.map((e) => (
    afficheEquipe(e)
          )) : '')}
        </div>

        {/* EQUIPE HOMMES */}
        {(equipesH.length > 0) ? (
          <div key={generateUniqueKey(equipesH)} className="equipes_title" id='titleHomme' onClick={() => showHide('ehomme', 'titleHomme')}><IoIosMan />Equipes Hommes : ({nbEquipesH}) <IoMdArrowDropdown id='ehommeA' className="arrow" /> </div>
        ) : ('')}
        <div id="ehomme" className="equipes_list">
          {(equipesH.length > 0 ? equipesH.map((e) => (
            afficheEquipe(e)
          )) : '')}
          {(equipesHplus.length > 0 ? equipesHplus.map((e) => (
            afficheEquipe(e)
          )) : '')}
        </div>

                  {/* Equipes Filles */}
        {(equipesFille.length > 0) ? (
        <div className="equipes_title" id="titleFille" onClick={() => showHide('efille', 'titleFille')}><IoIosMan />Equipes Filles : ({nbEquipesFilles}) <IoMdArrowDropdown id='efilleA' className="arrow" /> </div>
        ) : ('')}
        <div id="efille" className="equipes_list">
          {(equipesFille.length > 0 ? equipesFille.map((e) => (
            afficheEquipe(e)
          )) : '')}

        </div>
                  {/* Equipe Gar??ons */}
        {(equipesGarcon.length > 0) ? (
        <div className="equipes_title" id='titleGarcon' onClick={() => showHide('egarcon', 'titleGarcon')}><IoIosMan />Equipes Gar??ons : ({nbEquipesGarcon}) <IoMdArrowDropdown id='egarconA' className="arrow" /> </div>
        ) : ('')}
        <div id="egarcon" className="equipes_list">
          {(equipesGarcon.length > 0 ? equipesGarcon.map((e) => (
           afficheEquipe(e)
          )) : '')}
        </div>
        {displayProgSemaine()}
        </div>
        </>
        );
}

export default Equipes;

