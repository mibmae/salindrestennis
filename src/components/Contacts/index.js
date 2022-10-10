import React from 'react';
import './styles.scss';

function Contacts() {

    const submitMail = () => {
        console.log('j envoie')
    }

  return (
   <div>
    <h2 className="col-2-small title_contact">Contactez-nous</h2>
    <div class="container_contact">  
   <form id="contact">
     <h3>As Salindres Tennis</h3>
     <h4>Pour tous renseignements ou questions</h4>
     <fieldset>
       <input placeholder="Votre nom" type="text" tabindex="1" required autofocus />
     </fieldset>
     <fieldset>
       <input placeholder="Votre adresse e-mail" type="email" tabindex="2" required />
     </fieldset>
     <fieldset>
       <input placeholder="Votre numéro de téléphone" type="tel" tabindex="3" required />
     </fieldset>
     {/* <fieldset>
       <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required />
     </fieldset> */}
     <fieldset>
       <textarea placeholder="Votre message ..." tabindex="5" required></textarea>
     </fieldset>
     <fieldset>
       <button name="submit" type="submit" id="contact-submit" onClick={submitMail}>Envoyer</button>
     </fieldset>
     {/* <p class="copyright">Designed by <a href="https://colorlib.com" target="_blank" title="Colorlib">Colorlib</a></p> */}
   </form>
 </div></div>
 );
}

export default Contacts;
