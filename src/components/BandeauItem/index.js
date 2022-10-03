import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './styles.scss';

function Article() {

    const [article, setArticle] = useState([]);
    const [articlePrev, setArticlePrev] = useState([]);
    const [articleNext, setArticleNext] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://backtennis.herokuapp.com/bandeau/${id}`)
        .then((response) => response.json())
        .then((res) => setArticle(res.data[0]))
        fetch(`https://backtennis.herokuapp.com/bandeau/next/${id}`)
        .then((response) => response.json())
        .then((res) => setArticleNext(res.data))        
        fetch(`https://backtennis.herokuapp.com/bandeau/prev/${id}`)
        .then((response) => response.json())
        .then((res) => setArticlePrev(res.data))
      }, [id])

      useEffect(() => {
          window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
      }, [id])


  return (
   <div className="article"> 
   {window.screen.width > 500 ? (
      <div className="band mtp"  style={{ backgroundImage: `url(${article.image})`, backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', innerHeight: '100%', borderRadius: '100% 100% 48% 48% / 48% 48% 100% 100%' }}></div>
   ) : (
    <div className="band mtp"  style={{ backgroundImage: `url(${article.image})`, backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat' }}></div>
   )}
      <h1 className="col-8 title_section artd">{article.titre}</h1>
      <h5 className="article_date">Posté le {article.date}</h5>
      <div className="article_contenu"> {ReactHtmlParser(article.contenu)}</div>
      <div className="container_nav">
        <div>{articlePrev && (<Link to={`/bandeau/${articlePrev.id}`}><AiOutlineArrowLeft /> {articlePrev.titre}</Link>)}</div>
        <div>{articleNext && (<Link to={`/bandeau/${articleNext.id}`}>{articleNext.titre} <AiOutlineArrowRight /></Link>)}</div>
      </div>
   </div>
 );
}

export default Article;
