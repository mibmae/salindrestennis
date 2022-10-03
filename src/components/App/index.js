// == Import npm
import React from 'react';

// == Import
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  BrowserRouter as Router,
} from 'react-router-dom';
import Counter from 'src/containers/Counter';
import Bandeau from 'src/components/Bandeau';
import Header from 'src/components/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';
import Objectifs from 'src/components/Objectifs';
import Partenaires from 'src/components/Partenaires';
import Presentation from 'src/components/Presentation';
import Historique from 'src/components/Historique';
import Cotisations from 'src/components/Cotisations';
import Entrainements from 'src/components/Entrainements';
import NotFound from 'src/components/NotFound';
import Admin from 'src/components/Admin';
import Login from 'src/components/Login';
import Article from 'src/components/Article';
import BandeauItem from 'src/components/BandeauItem';
import { signinByToken, signinByTokenAdmin } from 'src/actions/';
import reactLogo from './react-logo.svg';
import './styles.css';
import store from 'src/store'
import ModifyBandeau from '../../containers/ModifyBandeau';
import ModifyArticle from '../../containers/ModifyArticle';
import News from 'src/components/News';
import NewBandeau from '../Admin/newBandeau';
import NewArticle from '../Admin/newArticle';

const tokenAdmin = localStorage.getItem('token_Tennis');
if (tokenAdmin !== 'undefined' && tokenAdmin !== null && tokenAdmin !== '') {
  store.dispatch(signinByTokenAdmin(tokenAdmin));
}


// == Composant
const App = () => {

return (
  <div className="app">
    {/* <Router> */}
   {/* <Header /> */}
   {/* <Bandeau /> */}
   <Routes>
   <Route path="/" exact element={<><Header /><Bandeau /><News /><Main /><Objectifs /><Partenaires /><Footer /></>} />
   <Route path="/tintin" exact element={<Counter />} />
   <Route path="/presentation" exact element={<><Header /><Bandeau /> <Presentation /><Partenaires /><Footer /></>} />
   <Route path="/historique" exact element={<><Header /> <Bandeau /><Historique /><Partenaires /><Footer /></>} />
   <Route path="/cotisations" exact element={<><Header /><Bandeau /> <Cotisations /><Partenaires /><Footer /></>} />
   <Route path="/entrainements" exact element={<><Header /><Bandeau /> <Entrainements /><Partenaires /><Footer /></>} />
   <Route path="/login" exact element={<><Header /><Login /></>} />
   <Route path="/bandeau/:id" exact element={<><Header /><BandeauItem /></>} />
   <Route path="/article/:id" exact element={<><Header /><Article /></>} />
   <Route path="/admin" exact element={<><Header /><Admin /></>} />
   <Route path="/admin/modifybandeau/:idArt" exact element={<><Header /><ModifyBandeau /></>} />
   <Route path="/admin/modifyarticle/:idArt" exact element={<><Header /><ModifyArticle /></>} />
   <Route path="/admin/modifyarticle/:idArt/:visu" exact element={<><Header /><ModifyArticle /></>} />
   <Route path="/admin/newbandeau" exact element={<><Header /><NewBandeau /></>} />
   <Route path="/admin/newarticle" exact element={<><Header /><NewArticle /></>} />
   <Route path="*" element={<><Header /><Bandeau /><NotFound /></>} />
   </Routes>
   {/* </Router> */}
   {/* <Partenaires /> */}
   {/* <Footer /> */}
  </div>
);
   }

// == Export
export default App;
