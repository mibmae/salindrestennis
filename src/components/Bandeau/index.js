import React, { useEffect, useState, useRef } from 'react';
import './styles.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import { generateUniqueKey } from 'src/functions';
import { Link, useNavigate } from 'react-router-dom';
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import SwiperCore, {
  Navigation, Mousewheel, Keyboard, Autoplay, Pagination,
} from 'swiper';

SwiperCore.use([Navigation, Mousewheel, Keyboard, Autoplay]);

AOS.init();

function Bandeau() {
  const UseFocus = () => {
    const htmlElRef = useRef(null);
    const setFocus = () => {
      htmlElRef.current && htmlElRef.current.focus();
    };

    return [htmlElRef, setFocus];
  };

  const [inputRef, setInput1Focus] = UseFocus();
  const [bandeauList, setBandeauList] = useState([]);
  const navigate = useNavigate();
  // const routeChange = (e) =>{
  //  let path = `newPath`;
  // console.log(e.height)
  // console.log(e)
  // console.log(e.clickedIndex)
  // console.log(e.activeIndex)
  // navigate(path);
  // }
  useEffect(() => {
    fetch('https://backtennis.herokuapp.com/bandeau/all')
      .then((response) => response.json())
    // .then((res) => console.log(res.data))
      .then((res) => setBandeauList(res.data));
    // document.getElementById('PROUT').focus();
    // console.log(document.getElementById('swi').focus())
    setInput1Focus();
    // console.log(document.hasFocus())
  }, []);


  return (
    <div className="bandeau">
      {/* <div className="bandeau_text_title" data-aos="fade-up" data-aos-duration="3000">AS Salindres Tennis</div> */}
      <div className="swiper_container">
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
          loop
          spaceBetween={0}
          slidesPerView={1}
          // onTouchStart={(e) => routeChange(e)}
          // onClick={(e) => console.log('clicked')}
          className="mySwiper"
          id="swi"

        >
          {/* <SwiperSlide>
           <div className="diapo2" style={{ backgroundImage: `url(${backgroundUrl})` }} >
           <div className="bandeau_txt" data-aos="fade-up" data-aos-duration="3000" >Nouvelle saison qui commence !Nouvelle saison qui commence !Nouvelle saison qui commence !Nouvelle saison qui commence !</div>
           </div>
          </SwiperSlide> */}
          {bandeauList.map((e) => (
            <SwiperSlide key={generateUniqueKey(e)} autoFocus id={e.id} onClick={(f) => navigate(`/bandeau/${e.id}`)}>
              <Link to={`/bandeau/${e.id}`}><div
                className="diapo1"
                key={generateUniqueKey(e)}
                style={{
                  backgroundImage: `url(${e.image})`,
                  
                }}
              >
                <div className="bandeau_text_title" key={generateUniqueKey(e)}>{e.date} - {e.titre}</div>
                {/* <div className="bandeau_text_title" key={generateUniqueKey(e)} data-aos="fade-up" data-aos-duration="3000">{e.contenu}</div> */}
                                            </div>
              </Link>
            </SwiperSlide>

          ))}
          {/* <SwiperSlide>
           <div className="diapo2" style={{ backgroundImage: `url(${backgroundUrl2})` }}>
           <div className="bandeau_txt" data-aos="fade-up" data-aos-duration="3000">Nouvelle saison qui commence !Nouvelle saison qui commence !Nouvelle saison qui commence !Nouvelle saison qui commence !</div>
           </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="diapo3" style={{ backgroundImage: `url(${backgroundUrl3})` }}>
              <div className="bandeau_txt" data-aos="fade-up" data-aos-duration="3000">
              La kermesse de fin d année pour les enfants
</div>
</div>
          </SwiperSlide> */}
          {/* <SwiperSlide>
           <div className="diapo1">test4</div>
          </SwiperSlide> */}
        </Swiper>
        {/* <span id="PROUT" ref={inputRef} autoFocus onFocus={(e) => console.log('focus')}>PROUT</span> */}
      </div>
    </div>
  );
}

export default Bandeau;
