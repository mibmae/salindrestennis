import React, { useState, useEffect, useRef } from 'react';
import './styles.scss';
import { useForm } from 'react-hook-form';

function Resultats() {

  const formRes = useRef(null);
  const { register, handleSubmit, formState: { errors } } = useForm();


const [equipesF, setEquipesf] = useState([]);
const [equipesH, setEquipeh] = useState([]);
const [equipesHplus, setEquipeHplus] = useState([]);
const [equipesFplus, setEquipeFplus] = useState([]);
const [equipesGarcon, setEquipeGarcon] = useState([]);
const [equipesFille, setEquipeFille] = useState([]);
const [idEquipes, setIdEquipes] = useState([]);
const [idEquipe, setidEquipe] = useState(0);
const [equipesInfosCompletes, setEquipesInfosCompletes] = useState([]);


const getEquipes = () => {
  // setLoading(true);
fetch(`https://gstennis.azurewebsites.net/api/equipes?codeClub=60300117&millesime=2023`)
.then((response) => response.json())
.then((res) => {
  console.log(res)
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
  // setTimeout(() => document.getElementById('footer').style.display = 'block', 2500)
  // setTimeout(() => document.getElementById('equipes').style.display = 'block', 2500)
  // setTimeout(() => setLoading(false), 3500)
})

}

const getInfosEquipes = (id, homologation, division) => {
  fetch(`https://gstennis.azurewebsites.net/api/equipe?idEquipe=${id}&idHomologation=${homologation}&idDivision=${division}`)
.then((response) => response.json())
.then((res) => {
console.log(res)
})
}

useEffect(() => {
  equipesInfosCompletes.map((e) => getInfosEquipes(e.id, e.homologation, e.division))
}, [equipesInfosCompletes])
  useEffect(() => {
    getEquipes()
  }, [])

  const submitResultat = (e) => {
    const forma = document.getElementById('resultats_send');
    console.log(forma)
        const datas = Object.fromEntries(new FormData(forma).entries());

        console.log(datas)
    const cat = datas.categorie.split("|")
    console.log(cat[0])
    console.log(cat[1])
    console.log(cat[2])
    console.log(cat[3])
    console.log(cat[4])
    setidEquipe(cat[2])
    getInfosEquipes(cat[2], cat[3], cat[4])
    console.log(datas.resultat)
  }

  return (
   <div>
    <form id="resultats_send" onSubmit={handleSubmit(submitResultat)} ref={formRes}>
    <select name="categorie" id="categorie" >
    <option value="">--Please choose an option--</option>
    {/* {(equipesFplus.length > 0) && (
      equipesFplus.map((e) => <option value={`${e.homologation.libelle}|${e.nom}`}>{e.homologation.libelle} - {e.nom}</option> )
    )} */}
    {(equipesF.length > 0) && (
      equipesF.map((e) => <option value={`${e.homologation.libelle}|${e.nom}|${e.id}|${e.homologation.id}|${e.division.id}`}>{e.homologation.libelle} - {e.nom}</option> )
      )}
    {(equipesFplus.length > 0) && (
      equipesFplus.map((e) => <option value={`${e.homologation.libelle}|${e.nom}`}>{e.homologation.libelle} - {e.nom}</option> )
    )}
    {(equipesH.length > 0) && (
      equipesH.map((e) => <option value={`${e.homologation.libelle}|${e.nom}`}>{e.homologation.libelle} - {e.nom}</option> )
      )}
    {(equipesHplus.length > 0) && (
      equipesHplus.map((e) => <option value={`${e.homologation.libelle}|${e.nom}`}>{e.homologation.libelle} - {e.nom}</option> )
      )}
    {(equipesGarcon.length > 0) && (
      equipesGarcon.map((e) => <option value={`${e.homologation.libelle}|${e.nom}`}>{e.homologation.libelle} - {e.nom}</option> )
      )}
    {(equipesFille.length > 0) && (
      equipesFille.map((e) => <option value={`${e.homologation.libelle}|${e.nom}`}>{e.homologation.libelle} - {e.nom}</option> )
      )}

</select>
    
    <div>Résultat :
      <select name="resultat" id="resultat">
        <input type="hidden" value={idEquipe} />
        <option value="Victoire">Victoire</option>
        <option value="Defaite">Défaite</option>
      </select>
    </div>
    <button type='submit'>Envoyer</button>
    </form>
    </div>

 );
}

export default Resultats;
