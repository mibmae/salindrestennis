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
  // let categories = [];
  // let idEquipes = [];

  const months = [
    {
      id: 0,
      name: 'Janvier',
    },
    {
      id: 1,
      name: 'Février'
    },
    {
      id: 2,
      name: 'Mars'
    },
    {
      id: 3,
      name: 'Avril'
    },
    {
      id: 4,
      name: 'Mai'
    },
    {
      id: 5,
      name: 'Juin'
    },
    {
      id: 6,
      name: 'Juillet'
    },
    {
      id: 7,
      name: 'Aout'
    },
    {
      id: 8,
      name: 'Septembre'
    },
    {
      id: 9,
      name: 'Octobre'
    },
    {
      id: 10,
      name: 'Novembre'
    },
    {
      id: 11,
      name: 'Décembre'
    },
  ]

  moment().locale('fr')

  
  // const searchClub = (codeClub) => {
  //   console.log(codeClub);
  //   const datas = '60300117'
  //   fetch('https://gstennis.azurewebsites.net/api/search/', { method: 'POST',
  //    body: JSON.stringify(datas)})
  //     .then((response) => response.json())
  //     .then((res) => {
  //       setEquipes(res);
  //       console.log('res', res);
  //     });
  // };

  


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
    console.log(res.femmes)
    setIdEquipes(array)
    setEquipesf(res.femmes);
    setEquipeh(res.hommes);
    setEquipeHplus(res.hommesPlus)
    setEquipeFplus(res.femmesPlus)
    setEquipeFille(res.filles)
    setEquipeGarcon(res.garcons)
    // getProchainMatch('2038956');
    setTimeout(() => document.getElementById('footer').style.display = 'block', 3000)
    setTimeout(() => document.getElementById('equipes').style.display = 'block', 3000)
    setTimeout(() => setLoading(false), 3500)
  })
}


const getAgenda = () => {
    fetch('https://gstennis.azurewebsites.net/api/agenda?codeClub=60300117&millesime=2023')
    .then((response) => response.json())
    .then((res) => {
      const resultats = res.filter((item) => new Date(item.date).getMonth() === 9);
      console.log(resultats[0].agendaDays)
      setAgenda(resultats[0].agendaDays)
      // const test = data.filter((item) => new Date(item.date).getMonth() === 9);
    })
  }
const getAgendawe = () => {
    fetch('https://gstennis.azurewebsites.net/api/agenda?codeClub=60300117&millesime=2023')
    .then((response) => response.json())
    .then((res) => {
      const resultatsMonth = res.filter((item) => new Date(item.date).getMonth() === 9);
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
    const nextMatch = res.phases[0].rencontres.filter((equipe) => (equipe.equipe1.id === id || equipe.equipe2.id === id) && (moment(equipe.dateTheorique).isAfter(moment()))).filter((ppp) => moment(ppp.dateTheorique).isAfter(moment())).map((e) => e)
    console.log(nextMatch[0])
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
          // console.log('MatchOctoberPerDate', MatchOctoberPerDate);
          // const EachJourneeOctoberPerDate = MatchOctoberPerDate.map((match) => match.map((dd) => dd));
          // console.log('EachJourneeOctoberPerDate', EachJourneeOctoberPerDate)
          MatchOctoberPerDate.forEach((e) => e.forEach((d) => {
            // const found = date.filter((arrayItem) => arrayItem !== d.dateTheorique);
            const found = date.find((dte) => dte === d.dateTheorique);
            // console.log('FOUND', found)
            if (!found) {
            date.push(d.dateTheorique)
           }
          }))
          MatchOctoberPerDate.map((c) => c.forEach((e) => matchPerDate.push(e)))
              
                  // setMatchPerDate(MatchOctoberPerDate);
                  // EachMatchOctoberPerDate.map((d) => d.map((u) => u.filter((b) => b.homologation.libelle === "COUPE SENIORS +40 ANS MESSIEURS").map((f) => console.log(f.equipe1Nom))))
                  // EachMatchOctoberPerDate.map((d) => d.map((f) => console.log(f.homologation.libelle)))
                  MatchOctoberPerDate.map((e) => e.map((t) => {
                    if (categories.find((cat) => cat === t.homologation.categorieAge.libelle) !== t.homologation.categorieAge.libelle) {
                      categories.push(t.homologation.categorieAge.libelle)
                    }
                    
                  }))
                  // console.log(categories)
                  // console.log('Cat', categories.map((c) => c))
                  // console.log('MatchOctoberMap',  MatchOctoberPerDate.map((t) => t.map((re) => re)))
                  const journee = MatchOctoberPerDate.map((t) => t.map((re) => re));
                  // console.log('journee', journee)
                  // journee.forEach((rencontres) => rencontres.forEach((match) => console.log('Match', match)))
                  journee.forEach((rencontres) => setListeMatch(rencontres))
                  
                  // console.log('map', categories.map((c) => MatchOctoberPerDate.map((t) => t.map((re) => re))).filter((r) => r.homologation.categorieAge.libelle === c));
                  // EachMatchOctoberPerDate.map((e) => e.filter((t) => t.homologation.categorieAge.libelle === e.homologation.categorieAge.libelle));
                  // MatchOctoberPerDate.map((e) => console.log(e));
                  // Match par categorie
                  // console.log('filter', EachMatchOctoberPerDate.filter((e) => e.homologation.libelle === 'COUPE SENIORS +40 ANS MESSIEURS'))
                  const tutu = categories.map((c) => MatchOctoberPerDate.map((e) => e.filter((t) => t.homologation.categorieAge.libelle === c)));
                  // console.log('TUTU', tutu)
                  setTest([categories.map((c) => MatchOctoberPerDate.map((e) => e.filter((t) => t.homologation.categorieAge.libelle === c)))])
                  // console.log('filter', categories.map((c) => EachMatchOctoberPerDate.map((e) => e.filter((t) => t.homologation.libelle === c).split(''))))
                  const len = tutu.length;
                  for(let i = 0; i < len; i++ ) tutu[i] && tutu.push(tutu[i]); 
                  tutu.splice(0 , len);

                  // console.log('tutu', tutu)
                  // cities.filter((arrayItem) => arrayItem !== e.target.textContent);

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
      // console.log(arrows)
      for (let i = 0; i < arrows.length; i++) {
        // console.log(arrows[i])
        arrows[i].style.transform = "rotate(0deg)"
      }
    }, 2000);
    getDatesByMonth(9)
    document.getElementById('equipes').style.display = 'none'
    // searchClub(60300117);
    // getProchainMatch();
  }, []);

  // useEffect(() => {
  //   console.log(array)
  // }, [array]);
  useEffect(() => {
    setNbequipesF(equipesF.length + equipesFplus.length)
    setNbequipesH(equipesH.length + equipesHplus.length)
    setNbequipesGarcon(equipesGarcon.length)
    setNbequipesFilles(equipesFille.length)
    // getEquipes()
  }, [equipesF]);
  useEffect(() => {
    console.log(idEquipes)
    if (idEquipes.length > 0) {
      idEquipes.map((e) => {
        getProchainMatch(e)
      })
    }
  }, [idEquipes]);

  const getInfosEquipes = (id, homologation, division) => {
    console.log('GET INFOS EQUIPES', id, homologation, division)
    fetch(`https://gstennis.azurewebsites.net/api/equipe?idEquipe=${id}&idHomologation=${homologation}&idDivision=${division}`)
  .then((response) => response.json())
  .then((res) => {
console.log('GetInfosEquipes',res)
res.phases[0].detailsEquipes.filter((capitaine) => capitaine.idEquipe === id).map((nom) => setCapitaines(capitaines => [...capitaines, {idEquipe: nom.idEquipe, capitaine: nom.correspondant.nom.substr(5)}]))
// res.phases[0].detailsEquipes.filter((capitaine) => capitaine.idEquipe === id).map((nom) => console.log(nom.idEquipe))
// setProchainMatch(prochainMatch => [...prochainMatch, {id: nextMatch[0].equipe1.id, date: nextMatch[0].dateTheorique}])
//   })
})
  }

  useEffect(() => {
    console.log('useeffect EquipesInfosCompletes', equipesInfosCompletes)
    equipesInfosCompletes.map((e) => getInfosEquipes(e.id, e.homologation, e.division))
  }, [equipesInfosCompletes])
  useEffect(() => {
    console.log('useeffect prochainmatch', prochainMatch)
  }, [prochainMatch])
  useEffect(() => {
    console.log('useeffect capitaines', capitaines)
  }, [capitaines])
  
  // useEffect(() => {
  //   // fetch('https://gstennis.azurewebsites.net/api/equipe?idEquipe=2039362&idHomologation=82328040&idDivision=115211')
  //   fetch('https://gstennis.azurewebsites.net/api/agenda?codeClub=60300117&millesime=2023')

  //     .then((response) => response.json())
  //     .then((res) => {
  //       console.log(res);
  //       setTest(res);
  //       // for (let month = 0; month < 11; month++) {
  //       //   const October = res.filter((item) => new Date(item.date).getMonth() === month);
  //       //   console.log('Matchs ooctobre :', October)
  //       //           const OctoberPerDate = October.map((match) => match.agendaDays)
  //       //           console.log(OctoberPerDate)
  //       // }
        
  //       // console.log('Phases Rencontres', res.phases[0].rencontres.filter((d) => d.equipe1.codeClub === "6030017" || d.equipe2.codeClub === "6030017").map((t) => t));
  //       // setrencontres(res.phases[0].rencontres.filter((e) => e.equipe1.codeClub === '60300117' || e.equipe2.codeClub === '60300117').map((f) => searchClub(f.codeClubAccueil)));
  //       // setEquipef(res.femmes);
  //       // setEquipeh(res.hommes);
  //       // setEquipeHplus(res.hommesPlus);
  //       // setEquipeFplus(res.femmesPlus);
  //     });
  //   fetch('https://gstennis.azurewebsites.net/api/agenda?codeClub=60300117&millesime=2023')
  //     .then((response) => response.json())
  //     .then((res) => {
  //       // const tr = res.filter((item) => new Date(item.date).getMonth() === 9);
  //       setAgenda(res)
  //       const test = res.filter((item) => new Date(item.date).getMonth() === 9);
  //       console.log('Trout', test);
  //       const Tyty = test[0].agendaDays.map((t) => t.agendaItems.map((e) => e));
  //       console.log('Tyti', Tyty);
  //       setEssai(Tyty);
  //       Tyty.map((v) => console.log('V', v));
  //       // setEssai(test[0].agendaDays);

  //       setAllMatchs(tr);
  //       // res.map((e) => e.agendaDays.filter((item) => new Date(item.date).getMonth() === 9)).map((t) => console.log('TTT', t))
  //       // res.map((e) => setMatchsPerMonths(e.agendaDays.map((t) => t)));
  //       // setAgenda(res);
  //       // res.map((f) => f.agendaDays.map((g) => g.agendaItems.map((z) => z)))

  //       // // res.map((e) => e.agendaDays.map((t) => console.log(t.agendaItems)));
  //       // res.map((e) => setEssai(e.agendaDays));
  //       // res.map((e) => console.log(e.agendaDays));
  //       // console.log('agenda', moment(res.date).format('MMMM'));
  //       // setAgenda(res);
  //       // console.log(res.map((d) => d.agendaDays.filter((e) => moment(d.date).format('MMMM') === moment(e.dateTheorique).format('MMMM')))).map((g) => g);

  //       // setrencontres(res.phases[0].rencontres.filter((e) => e.equipe1.codeClub === '60300117' || e.equipe2.codeClub === '60300117').map((f) => searchClub(f.codeClubAccueil)));
  //       // // setEquipef(res.femmes);
  //       // // setEquipeh(res.hommes);
  //       // // setEquipeHplus(res.hommesPlus);
  //       // // setEquipeFplus(res.femmesPlus);
  //       getDatesByMonth(10);
  //     });
  //   fetch('https://gstennis.azurewebsites.net/api/equipes?codeClub=60300117&millesime=2023')
  //     .then((response) => response.json())
  //     .then((res) => {
  //       console.log('EQUIPES', res);
  //       setEquipef(res.femmes);
  //       setEquipeh(res.hommes);
  //       setEquipeHplus(res.hommesPlus);
  //       setEquipeFplus(res.femmesPlus);
  //     });
  // }, []);

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
          visible={true} />Chargement ...</div>) : ('')}
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
        <div className="programmeSe">
          <div className="matchofweek"><FcCalendar /> Matchs de la semaine :</div>

          {matchSamediPro.length > 0 ? (
            <div className="calendar_title" onClick={() => showHideProg('samedi')}>{moment(dateSamediPro).locale('fr').format("dddd Do MMMM yyyy")}<IoMdArrowDropdown className="arrow" /></div>
          ) : ('')}
          <div className="daysOfMatch" id="samedi">
            {matchSamediPro.map((f) => <div key={generateUniqueKey(f)} className="programme_item">{moment(f.dateTheorique).format("DD/MM/YYYY")} - {f.homologation.libelle} - {f.isAtHome === true ? (`${f.clubEquipe1Nom} reçoit ${f.clubEquipe2Nom}`) : (`${f.clubEquipe2Nom} se déplace chez ${f.clubEquipe1Nom}`)} </div>)}
          </div>

          {matchDimanchePro.length > 0 ? (
            <div className="calendar_title" onClick={() => showHideProg('dimanche')}>{moment(dateDimanchePro).locale('fr').format("dddd Do MMMM yyyy")}<IoMdArrowDropdown className="arrow" /></div>
          ) : ('')}
          <div className="daysOfMatch" id="dimanche">
            {matchDimanchePro.map((f) => <div key={generateUniqueKey(f)} className="programme_item">{moment(f.dateTheorique).format("DD/MM/YYYY")} - {f.homologation.libelle} - {f.isAtHome === true ? (`${f.clubEquipe1Nom} reçoit ${f.clubEquipe2Nom}`) : (`${f.clubEquipe2Nom} se déplace chez ${f.clubEquipe1Nom}`)} </div>)}
          </div>
          {matchLundiPro.length > 0 ? (
            <div className="calendar_title" onClick={() => showHideProg('lundi')}>{moment(dateLundiPro).locale('fr').format("dddd Do MMMM yyyy")}<IoMdArrowDropdown className="arrow" /></div>
          ) : ('')}
          <div className="daysOfMatch" id="lundi">
            {matchLundiPro.map((f) => <div key={generateUniqueKey(f)} className="programme_item">{moment(f.dateTheorique).format("DD/MM/YYYY")} - {f.homologation.libelle} - {f.isAtHome === true ? (`${f.clubEquipe1Nom} reçoit ${f.clubEquipe2Nom}`) : (`${f.clubEquipe2Nom} se déplace chez ${f.clubEquipe1Nom}`)} </div>)}
          </div>

          {matchMardiPro.length > 0 ? (
            <div className="calendar_title" onClick={() => showHideProg('mardi')}>{moment(dateMardiPro).locale('fr').format("dddd Do MMMM yyyy")}<IoMdArrowDropdown className="arrow" /></div>
          ) : ('')}
          <div className="daysOfMatch" id="mardi">

            {matchMardiPro.map((f) => <div key={generateUniqueKey(f)} className="programme_item">{moment(f.dateTheorique).format("DD/MM/YYYY")} - {f.homologation.libelle} - {f.isAtHome === true ? (`${f.clubEquipe1Nom} reçoit ${f.clubEquipe2Nom}`) : (`${f.clubEquipe2Nom} se déplace chez ${f.clubEquipe1Nom}`)} </div>)}
          </div>
          {/* data.filter((item) => new Date(item.date).getMonth() === 9); */}
          {/* let thisWeekSunday = moment().isoWeekday(7).format("DD/MM/YYYY");
   let thisWeekSaturday = moment().isoWeekday(6).format("DD/MM/YYYY"); */}
          {/* {agenda.filter((item => new Date(item.date) === moment().isoWeekday(7).format("DD/MM/YYYY")))} */}
          {/* res.phases[0].rencontres.filter((match) => (moment(match.dateTheorique).format("DD/MM/YYYY") === thisWeekSunday)) */}
          {/* {agenda.filter((match => (moment(match.dateTheorique).format("DD/MM/YYYY") === moment().isoWeekday(7).format("DD/MM/YYYY"))))} */}
          {/* {agenda.map((e) => e.agendaItems.map((f) => <div>{f.dateTheorique} - {f.homologation.libelle} - {f.isAtHome === true ? (`${f.clubEquipe1Nom} reçoit ${f.clubEquipe2Nom}`) : (`${f.clubEquipe2Nom} se déplace chez ${f.clubEquipe1Nom}`)} </div>))} */}
        </div>
      </div></>
    
  );
}

export default Equipes;
