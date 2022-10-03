import React, { useEffect } from 'react';
import './styles.scss';
import out from "../../../public/img/out.png"

function NotFound() {

    useEffect(() => {
        console.log(window.screen.width)
        if (window.screen.width < 600) {
        window.scrollTo({
            // eslint-disable-next-line no-undef
            top: 250,
            behavior: 'smooth',
          })
        } else {
            window.scrollTo({
                // eslint-disable-next-line no-undef
                top: 500,
                behavior: 'smooth',
              })
        }
    }, [])

  return (
    <div id='oopss'>
    <div id='error-text'>
        <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" />
        <span>Out ! </span>
        <p className="p-a">Balle Faute !</p>
        <p className="p-b">La balle n'a pas touché la ligne !</p>
        <a href='/' className="back">Remettre 2 balles</a>
    </div>
</div>
 );
}

export default NotFound;
