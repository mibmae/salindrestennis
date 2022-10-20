import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { ImEye } from 'react-icons/im';
import { MdModeEdit } from 'react-icons/md';
import store from 'src/store';
import fb from 'src/assets/images/facebook-share-button-icon.svg';
import Helmet from 'react-helmet';
import MetaTags from 'react-meta-tags';

import './styles.scss';

function Article() {
  const [article, setArticle] = useState([]);
  const [articlePrev, setArticlePrev] = useState([]);
  const [articleNext, setArticleNext] = useState([]);
  const [vues, setVues] = useState('');
  const [ourText, setOurText] = useState("")

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://backtennis.herokuapp.com/articles/${id}`)
      .then((response) => response.json())
      .then((res) => setArticle(res.data[0]));
    fetch(`https://backtennis.herokuapp.com/articles/next/${id}`)
      .then((response) => response.json())
      .then((res) => setArticleNext(res.data));
    fetch(`https://backtennis.herokuapp.com/articles/prev/${id}`)
      .then((response) => response.json())
      .then((res) => setArticlePrev(res.data));
    fetch(`https://backtennis.herokuapp.com/articles/vues/${id}`, { method: 'POST' })
      .then((response) => response.json())
      .then((res) => setVues(res.data.vue));
      // .then((res) => setArticlePrev(res.data));
  }, [id]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [id]);
  

  const speechHandler = (msg) => {
    msg.text = ourText
    window.speechSynthesis.speak(msg)
  }

  // const msg = new SpeechSynthesisUtterance()
  // msg.text = ReactHtmlParser(article.contenu)

  // useEffect(() => {
  //   window.speechSynthesis.speak(msg)
  // }, [msg])


  return (
    <div className="article">
          <MetaTags>
            <title>{article.titre}</title>
            <meta property="og:description" content={article.titre} />
            <meta property="og:title" content={article.titre} />
            <meta property="og:image" content={article.image} />
            <meta property="og:url" content={document.location.href} />
          </MetaTags>
      {/* <meta property="og:url" content="http://www.salindrestennis.fr/article.php?id=69" />
                                    <meta property="og:type"          content="website" />
                                    <meta property="og:title"         content="Fin du Tournois de double : Résultats et photos !" />
                                    <meta property="og:description"   content="Le site de l'AS Salindres Tennis" />
                                    <meta property="og:image"         content="https://scontent.fctt1-1.fna.fbcdn.net/v/t39.30808-6/299679304_5395871710528096_5267388161371078485_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9XTMcY6VjPsAX_TMIoL&_nc_ht=scontent.fctt1-1.fna&oh=00_AT98MuNOfAbdG2Kz-LTLOr8htOQlriWtS09KsNUlQ-bXMA&oe=631FF73E" />
									<meta name="description" content="Fin du Tournois de double : Résultats et photos !"></meta> */}
     {window.screen.width > 500 ? (
        <div
          className="band mtp"
          style={{
            backgroundImage: `url(${article.image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            innerHeight: '100%',
            borderRadius: '100% 100% 48% 48% / 48% 48% 100% 100%',
          }}
        />
      ) : (
        <div
          className="band mtp"
          style={{
            backgroundImage: `url(${article.image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
      )}
            {/* <button onClick={(e) => window.speechSynthesis.speak(msg)}>Lire l'article</button> */}

      <div className="container_art">
        <h1 className="title_section_article">{article.titre} {store.getState().Tennis.logged === true ? (<span><Link to={`/admin/modifyarticle/${article.id}/visu`}><MdModeEdit /></Link></span>) : ('')}</h1>
        <h5 className="bandeau_item_date">Le {article.date} <span> - <ImEye /> {vues}</span>  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="blank" className="sharebox">
            <span className="fb-icon" style={{backgroundImage: `url(${fb})`}}></span></a></h5>
        <div className="article_contenu"> {ReactHtmlParser(article.contenu)}</div>
        <div className="container_nav">
          <div>{articlePrev && (<Link to={`/article/${articlePrev.id}`}><AiOutlineArrowLeft /> {articlePrev.titre}</Link>)}</div>
          <div>{articleNext && (<Link to={`/article/${articleNext.id}`}>{articleNext.titre} <AiOutlineArrowRight /></Link>)}</div>
        </div>
      </div>
    </div>
  );
}

export default Article;
