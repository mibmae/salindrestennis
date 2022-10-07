import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { ImEye } from 'react-icons/im';
import { MdModeEdit } from 'react-icons/md';
import store from 'src/store';
import fb from 'src/assets/images/facebook-share-button-icon.svg';

import './styles.scss';

function Article() {
  const [article, setArticle] = useState([]);
  const [articlePrev, setArticlePrev] = useState([]);
  const [articleNext, setArticleNext] = useState([]);
  const [vues, setVues] = useState('');

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

  return (
    <div className="article">
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
      <div className="container_art">
        <h1 className="title_section_article">{article.titre} {store.getState().Tennis.logged === true ? (<span><Link to={`/admin/modifyarticle/${article.id}/visu`}><MdModeEdit /></Link></span>) : ('')}</h1>
        <h5 className="bandeau_item_date">Le {article.date} <span> - <ImEye /> {vues}</span>  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} className="sharebox">
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
