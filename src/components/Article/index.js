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
        fetch(`https://backtennis.herokuapp.com/articles/${id}`)
        .then((response) => response.json())
        .then((res) => setArticle(res.data[0]))
        fetch(`https://backtennis.herokuapp.com/articles/next/${id}`)
        .then((response) => response.json())
        .then((res) => setArticleNext(res.data))        
        fetch(`https://backtennis.herokuapp.com/articles/prev/${id}`)
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
      <div className="band mtp"  style={{ backgroundImage: `url(${article.image})`, backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', innerHeight: '100%', borderRadius: '100% 100% 48% 48% / 48% 48% 100% 100%' }}></div>
    <div className="container_art">
      <h1 className="title_section">{article.titre}</h1>
      <h5 className="article_date">Posté le {article.date}</h5>
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
