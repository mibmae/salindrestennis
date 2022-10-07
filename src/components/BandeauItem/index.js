import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import fb from 'src/assets/images/facebook-share-button-icon.svg';
import { ImEye } from 'react-icons/im';

import './styles.scss';

function Article() {
  const [article, setArticle] = useState([]);
  const [articlePrev, setArticlePrev] = useState([]);
  const [articleNext, setArticleNext] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://backtennis.herokuapp.com/bandeau/${id}`)
      .then((response) => response.json())
      .then((res) => setArticle(res.data[0]));
    fetch(`https://backtennis.herokuapp.com/bandeau/next/${id}`)
      .then((response) => response.json())
            // .then((ttt) => console.log('ttt', ttt))
      .then((res) => setArticleNext(res.data));
    fetch(`https://backtennis.herokuapp.com/bandeau/prev/${id}`)
      .then((response) => response.json())
      .then((res) => setArticlePrev(res.data));

  }, [id]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [id]);

  return (
    <div className="bandeau_item">
      {/* <meta property="og:url" content="http://www.salindrestennis.fr/article.php?id=68" />
                                    <meta property="og:type"          content="website" />
                                    <meta property="og:title"         content="La kermesse de fin d année pour les enfants" />
                                    <meta property="og:description"   content="Le site de l'AS Salindres Tennis" />
                                    <meta property="og:image"         content="https://www.salindrestennis.fr/pics/ker2022/k1.jpg" />
									<meta name="description" content="La kermesse de fin d année pour les enfants"></meta> */}
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
      <h1 className="bandeau_item_title artd">{article.titre}</h1>
      <h5 className="bandeau_item_date">Le {article.date} <span> - </span>  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} className="sharebox">
            <span className="fb-icon" style={{backgroundImage: `url(${fb})`}}></span></a></h5>
      <div className="article_contenu"> {ReactHtmlParser(article.contenu)}</div>
      <div className="container_nav">
        <div>{articlePrev && (<Link to={`/bandeau/${articlePrev.id}`}><AiOutlineArrowLeft /> {articlePrev.titre}</Link>)}</div>
        <div>{articleNext && (<Link to={`/bandeau/${articleNext.id}`}>{articleNext.titre} <AiOutlineArrowRight /></Link>)}</div>
      </div>
    </div>
  );
}

export default Article;
