import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactHtmlParser from 'react-html-parser';
import { generateUniqueKey } from 'src/functions';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useNavigate } from 'react-router-dom';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import SwiperCore, {
  Navigation, Mousewheel, Keyboard, Autoplay, Pagination,
} from 'swiper';
import './styles.scss';

SwiperCore.use([Navigation, Mousewheel, Keyboard, Autoplay]);

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://backtennis.herokuapp.com/articles/all')
      .then((response) => response.json())
    // .then((res) => console.log(res.data))
      .then((res) => setNews(res.data));
  }, []);

  return (
    <div className="news">
      <div className="intro"> L'AS Salindres Tennis vous souhaite la bienvenue sur son nouveau site.
        Après quelques années passées sans site Internet à jour, nous avons décidé de le relancer, afin que tout le monde puisse suivre l'actualité et la vie du club.
      </div>
      <h2 className="col-2-small title_section_news">Toutes les infos du club</h2>
      <div className="news_container">

        {window.screen.width < 500 ? (
          <Swiper
            autoplay={{ delay: 4000 }}
            cssMode
            navigation
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            mousewheel
            keyboard
            scrollbar={{ draggable: true }}
            loop={false}
            spaceBetween={0}
            slidesPerView="1"
            className="mySwiper slid"
            id="swi"
          >
            {news.map((e) => (

              <SwiperSlide key={generateUniqueKey(e)} autoFocus id={e.id}>
                <Card style={{ width: '18rem', height: '20rem' }}>
                  <Card.Img variant="top" className="card_img" src={e.image} />
                  <Card.Body>
                    <span className="card_date">{e.date}</span>
                    <Card.Title className="card_title_perso">{e.titre}</Card.Title>
                    <Card.Text>
                      {/* {ReactHtmlParser(e.contenu).substr(1, 50)} */}
                    </Card.Text>
                    <Button className="readmore"><Link to={`/article/${e.id}`}>Lire l'article</Link></Button>
                  </Card.Body>
                </Card>
              </SwiperSlide>

            ))}

          </Swiper>
        ) : (
          <Swiper
            autoplay={{ delay: 4000 }}
            cssMode
            navigation
        // pagination={{
        //   dynamicBullets: true,
        // }}
            modules={[Pagination]}
            mousewheel
            keyboard
            scrollbar={{ draggable: true }}
            loop={false}
            spaceBetween={0}
            slidesPerView="3"
            className="mySwiper slid"
            id="swi"
          >
            {news.map((e) => (

              <SwiperSlide key={generateUniqueKey(e)} autoFocus id={e.id}>
                <Card style={{ width: '18rem', height: '20rem' }}>
                  <Card.Img variant="top" className="card_img" src={e.image} />
                  <Card.Body>
                    <span className="card_date">{e.date} - {e.vue} vues</span>
                    <Card.Title className="card_title_perso">{e.titre}</Card.Title>
                    <Card.Text>
                      {/* {ReactHtmlParser(e.contenu).substr(1, 50)} */}
                    </Card.Text>
                    {/* <Button variant="primary"><Link to={`/article/${e.id}`}>Lire l'article</Link></Button> */}
                    <Link to={`/article/${e.id}`}><Button className="readmore">Lire l'article</Button></Link>
                  </Card.Body>
                </Card>
              </SwiperSlide>

            ))}

          </Swiper>
        )}

      </div>
    </div>
  );
}

export default News;
